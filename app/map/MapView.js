import CoachMap from './CoachMap';
import MapController from './MapController';


export default class MapView {

	constructor(parentEl) {
		console.log('MapView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'map o-grid__cell';
		parentEl.appendChild(this.rootEl);

		this.controller = new MapController(this);
		return this.controller;
	}

	addGoogleMap(postCode) {
		this.map = new CoachMap(this.rootEl, postCode);

		return this.map.init()
		.then((map)=> {
			return this.map.initMap(map);
		});
	}

	addStations(stations) {
		this.map.addStations(stations);
	}

	selectStation(id) {
		this.map.selectStation(id);
	}
}
