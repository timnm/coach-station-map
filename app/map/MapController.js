import DataService from '../core/DataService';
import {POST_CODE} from '../core/config';
import {DISTANCE} from '../core/config';


export default class MapController {

	constructor(view) {
		console.log('MapController', view);

		this.view = view;

		// init the Google map //
		this.view.addGoogleMap(POST_CODE);

		// get coach stations //
		DataService.getCoachStations(POST_CODE, DISTANCE)
		.then(function(results) {
			console.log(results);
		})
		.catch(function(error) {
			console.log(error);
		});

	}

}
