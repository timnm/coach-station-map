import GoogleMap from '../common/GoogleMap';
import MapController from './MapController';


export default class MapView {

	constructor(parentEl) {
		console.log('MapView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'map o-grid__cell';
		parentEl.appendChild(this.rootEl);

		this.controller = new MapController(this);
		this.controller.init();
	}

	addGoogleMap(postCode) {
		this.gMap = new GoogleMap(this.rootEl, postCode);
	}
}
