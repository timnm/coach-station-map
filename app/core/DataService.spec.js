import {DataService, API, API_ERROR} from './DataService';
import {POST_CODE, DISTANCE} from '../core/config';
import Utils from '../common/Utils';

import 'jasmine-ajax';

describe('MapService', () => {

	let mockAjaxSuccess = {
				  status: 200,
				  responseText: '{"success":true,"result":[{"ospoint":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG27700"}},"coordinates":[527746.0,181994.0]},"nationalcoachcode":"900057378C","name":"Baker Street","latlong":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG4326"}},"coordinates":[-0.16008949432614758,51.522424014262185]},"distance":1965.91377621,"atcocode":"490006135S"},{"ospoint":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG27700"}},"coordinates":[528934.0,179279.0]},"nationalcoachcode":"900057888S","name":"Bressenden Place","latlong":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG4326"}},"coordinates":[-0.14396741679000916,51.49775536154338]},"distance":2591.325831254,"atcocode":"490004555P"}]}'
	};

	let mockAjaxFail = {
		 status: 200,
		 responseText: '{"success":false}'
	};


	describe('getCoachStations', () => {

		beforeEach(function() {
      jasmine.Ajax.install();
    });


		afterEach(function() {
      jasmine.Ajax.uninstall();
    });


		beforeEach(function() {
			jasmine.addMatchers({
				toBeSorted: function() {
					return {
						compare: function(actual) {
							let expected = actual.slice();
							Utils.ARRAY_SORT_BY_DISTANCE(expected);

							return {
								pass: jasmine.matchersUtil.equals(actual, expected)
							};
						}
					};
				}
			});
		});


		it('should call the correct url', function() {

			let url = 'https://data.gov.uk/data/api/service/transport/naptan_coach_stations/postcode?postcode=WC1E 7BL&distance=3';

			DataService.getCoachStations(POST_CODE, DISTANCE);

			expect(jasmine.Ajax.requests.mostRecent().url).toBe(url);

		});


		it('should return a list of stations', function(done) {

			var getCS = DataService.getCoachStations(POST_CODE, DISTANCE);

			jasmine.Ajax.requests.mostRecent().respondWith(mockAjaxSuccess);

			getCS.then((stations)=>{
				expect(stations.length).toBeGreaterThan(0);
				done();
			});

		});


		it('should return a list of stations ordered by distance', function(done) {

			var getCS = DataService.getCoachStations(POST_CODE, DISTANCE);

			jasmine.Ajax.requests.mostRecent().respondWith(mockAjaxSuccess);

			getCS.then((stations)=>{
				expect(stations).toBeSorted();
				done();
			});

		});


		it('should error an unsuccessful call', function(done) {

			var getCS = DataService.getCoachStations();

			jasmine.Ajax.requests.mostRecent().respondWith(mockAjaxFail);

			getCS.catch((error)=>{
				expect(error.message).toEqual(API_ERROR);
				done();
			});

		});

	});

});
