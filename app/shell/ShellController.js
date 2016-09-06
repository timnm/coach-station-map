import {DataService} from '../core/DataService';
import {POST_CODE, DISTANCE} from '../core/config';

export default class ShellController {

	constructor(view) {
		console.log('ShellController');

		this.view = view;
	}


	init() {
		this.listController = this.view.addCoachListView();
		this.mapController = this.view.addMapView();
		this.getCoachStations();
	}


	getCoachStations() {
		return DataService.getCoachStations(POST_CODE, DISTANCE)
		.then((stations) => {
			return this.gotCoachStations(stations);
		})
		.catch((error) => {
			return this.coachStationsError(error);
		});
	}


	gotCoachStations(stations) {
		console.log('gotCoachStations');
		this.listController.addStations(stations);
		this.listController.view.rootEl.addEventListener('click', this.onStationClick.bind(this), false);
		this.mapController.addStations(stations);
	}


	coachStationsError(error) {
		console.log('coachStationsError', error);
	}


	onStationClick(evt) {
		console.log(evt.target);
	}


}
