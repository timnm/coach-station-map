/*global google */
import {GoogleMap, MAP_API_ERROR, API} from './GoogleMap';
import {POST_CODE} from '../core/config';

import 'jasmine-ajax';

describe('GoogleMap', () => {

	it('should handle downloading the api', (done)=> {

		let parentEl = document.body;

		let gMap = new GoogleMap(parentEl, POST_CODE);
		gMap.API = "https://mock";

		let promise = gMap.init();

		gMap.remote.onload(Promise.resolve(gMap));

		promise.then((val)=> {
			expect(val).toEqual(jasmine.anything());
			done();
		});

	});


	it('should handle an error when downloading the api', (done)=> {

		let parentEl = document.body;

		let gMap = new GoogleMap(parentEl, POST_CODE);

		gMap.API = "https://mock";

		let promise = gMap.init();

		gMap.remote.onerror(Promise.reject(MAP_API_ERROR));

		gMap.init()
		.catch((error)=> {
			expect(error).toEqual(MAP_API_ERROR);
			done();
		});

	});


});
