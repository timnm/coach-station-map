import {DataService} from '../core/DataService';
import {POST_CODE, DISTANCE} from '../core/config';

export default class ShellController {
	constructor(view) {
		console.log('ShellController');

		this.view = view;

		this.init();
	}


	init() {
		this.listController = this.view.addCoachListView();
		this.mapController = this.view.addMapView();

		this.getCoachStations();
	}


	getCoachStations() {
		return DataService.getCoachStations(POST_CODE, DISTANCE)
		.then((results) => {
			this.gotCoachStations(results.result);
		})
		.catch((error) => {
			this.coachStationsError(error);
		});
	}


	gotCoachStations(stations) {
		console.log('gotCoachStations');
		this.listController.addStations(stations);
		this.mapController.addStations(stations);
	}


	coachStationsError(error) {
		console.log('coachStationsError', error);
	}



}
