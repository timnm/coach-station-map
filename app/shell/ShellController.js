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
		this.mapController.addGoogleMap(POST_CODE)
		.catch((error)=> {
			console.log(error);
		});
		this.getCoachStations();
	}


	getCoachStations() {
		return DataService.getCoachStations(POST_CODE, DISTANCE)
		.then((stations) => {
			//return this.gotCoachStations(stations);
			return this.coachStationsError('someerrro');
		})
		.catch((error) => {
			return this.coachStationsError(error);
		});
	}


	gotCoachStations(stations) {
		console.log('gotCoachStations');
		this.listController.addStations(stations);
		this.listController.view.listClickHandler(this.onStationClick.bind(this));
		this.mapController.addStations(stations);
	}


	coachStationsError(error) {
		this.view.displayCoachDataError('Could not fetch coach stations data');
	}


	onStationClick(evt) {
		console.log(evt.target);
		this.mapController.selectStation(evt.target.id);
	}


}
