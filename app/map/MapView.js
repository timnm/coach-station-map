import GoogleMap from '../common/GoogleMap';
import MapController from './MapController';
import {POST_CODE} from '../core/config';

export default class MapView {

	constructor(parentEl) {
		console.log('MapView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.className = 'map';
		parentEl.appendChild(this.rootEl);

		this.controller = new MapController();

		// init the Google map //
		this.gMap = new GoogleMap(this.rootEl, POST_CODE);
	}
}
