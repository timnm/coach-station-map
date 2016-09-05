import CoachMap from './CoachMap';
import MapController from './MapController';


export default class MapView {

	constructor(parentEl) {
		console.log('MapView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'map o-grid__cell';
		parentEl.appendChild(this.rootEl);

		this.controller = new MapController(this);
		this.controller.init();

		return this.controller;
	}

	addGoogleMap(postCode) {
		//this.gMap = new CoachMap(this.rootEl, postCode);
	}

	addStations(stations) {
		this.gMap.addStations(stations);
	}
}
