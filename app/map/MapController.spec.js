import {DataService} from '../core/DataService';
import MapController from './MapController';

define('MapController', () => {

	let mockStationsSuccess = Promise.resolve({
		success: true,
		result : [
			{
				atcocode: '490000011B',
				distance: 1808.643795502,
				name: 'Baker Street'
			},
			{
				atcocode: '490000011A',
				distance: 2591.325831254,
				name: 'Bressenden Place'
			},
		]
	});


	let mockStationsFail = Promise.reject({
		success: false
	})

	let mapController;
	let mapView = {
		addGoogleMap: () => {

		}
	};

	beforeEach(() => {
		mapController = new MapController(mapView);
	});


	it("should add a google map", function() {
		let view = mapController.view;
		spyOn(view, 'addGoogleMap');
		mapController.init();
		expect(view.addGoogleMap).toHaveBeenCalled();
	});


	it("should call getCoachStations", function() {
		spyOn(mapController, 'getCoachStations');
		mapController.init();
		expect(mapController.getCoachStations).toHaveBeenCalled();
	});

//
//	it('should retreive a list of stations', (done) => {
//		spyOn(mapController, 'getCoachStations').and.returnValue(mockStationsSuccess);
//
//		spyOn(mapController, 'gotCoachStations');
//
//		mapController.init();
//
//		expect(mapController.gotCoachStations).toHaveBeenCalled();
//
//		done();
//	});
//
//
//	it('should handle a getCoachStations error', (done) => {
//		spyOn(mapController, 'getCoachStations').and.returnValue(mockStationsFail);
//
//		spyOn(mapController, 'coachStationsError');
//
//		mapController.init();
//
//		expect(mapController.coachStationsError).toHaveBeenCalled();
//
//		done();
//	});

})
