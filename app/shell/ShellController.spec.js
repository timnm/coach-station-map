import {DataService, API_ERROR} from '../core/DataService';
import ShellController from './ShellController';

describe('ShellController', ()=> {

	let mockStationsSuccess = Promise.resolve(
		[
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
	);


	let mockStationsFail = Promise.reject(
			API_ERROR
	);


	let view = {
		addCoachListView: ()=> {},
		addMapView: ()=> {}
	}


	let shellController;

	beforeEach(()=> {
		shellController = new ShellController(view);
	});


	it("should fetch a list of coach stations", function() {

		spyOn(DataService, 'getCoachStations').and.returnValue(mockStationsSuccess);
		spyOn(shellController, 'gotCoachStations');

		let getCS = shellController.getCoachStations();

		getCS
		.then(()=> {
			console.log('here');
			expect(shellController.gotCoachStations).toHaveBeenCalled();
		})

	});


	it("should handle a data error", function() {

		spyOn(DataService, 'getCoachStations').and.returnValue(mockStationsFail);
		spyOn(shellController, 'coachStationsError');

		let getCS = shellController.getCoachStations();

		getCS
		.then(()=> {
			console.log('here');
			expect(shellController.coachStationsError).toHaveBeenCalled();
		})

	});

})
