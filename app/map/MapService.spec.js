import MapService from './MapService';
import {POST_CODE} from '../core/config';
import {DISTANCE} from '../core/config';

describe('MapService', () => {

	let mapService;

	beforeEach(function() {
    mapService = new MapService()
  });

	describe('getCoachStations', () => {

		it('should retreive a list of stations', () => {
			mapService.getCoachStations(POST_CODE, DISTANCE)
			.then((stations)=>{
				expect(stations.succes).toEqual('true');
			});

		});

	})

});
