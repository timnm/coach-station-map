export default class MapController {

	constructor(view) {
		console.log('MapController', view);

		this.view = view;
	}

	addGoogleMap(postCode) {
		return this.view.addGoogleMap(postCode);
	}

	addStations(stations) {
		this.view.addStations(stations);
	}

	selectStation(id) {
		this.view.selectStation(id);
	}

}
