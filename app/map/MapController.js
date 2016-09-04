import {DataService} from '../core/DataService';
import {POST_CODE, DISTANCE} from '../core/config';


export default class MapController {

	constructor(view) {
		console.log('MapController', view);

		this.view = view;
	}

	init() {
		this.addGoogleMap();
		this.getCoachStations();
	}

	addGoogleMap() {
		this.view.addGoogleMap(POST_CODE);
	}

	getCoachStations() {
		return DataService.getCoachStations(POST_CODE, DISTANCE)
		.then((results) => {
			this.gotCoachStations(results);
		})
		.catch((error) => {
			this.coachStationsError(error);
		});
	}

	gotCoachStations(stations) {
		console.log('gotCoachStations');
	}

	coachStationsError(error) {
		console.log('coachStationsError', error);
	}

}
