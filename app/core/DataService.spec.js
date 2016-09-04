import DataService from './DataService';
import {POST_CODE} from '../core/config';
import {DISTANCE} from '../core/config';

describe('MapService', () => {

	describe('getCoachStations', () => {

		it('should retreive a list of stations', () => {
			DataService.getCoachStations(POST_CODE, DISTANCE)
			.then((stations)=>{
				expect(stations.succes).toEqual('true');
			});

		});

	})

});
