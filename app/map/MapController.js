import {POST_CODE} from '../core/config';

export default class MapController {

	constructor(view) {
		console.log('MapController', view);

		this.view = view;
	}

	init() {
		this.addGoogleMap();
	}

	addGoogleMap() {
		this.view.addGoogleMap(POST_CODE);
	}

	addStations(stations) {
		this.view.addStations(stations);
	}

	selectStation(id) {
		this.view.selectStation(id);
	}

}
