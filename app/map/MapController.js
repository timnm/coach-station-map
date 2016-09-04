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

}
