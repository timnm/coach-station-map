import GoogleMap from '../common/GoogleMap';

/*global google */
const API = 'https://maps.googleapis.com/maps/api/js';

const POSTCODE = 'WC1E 7BL';
const DISTANCE = '3';
const API_KEY = '';

export default class MapView {

	constructor(parentEl) {
		console.log('MapView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.className = 'map';
		parentEl.appendChild(this.rootEl);

		// init the Google map //
		this.gMap = new GoogleMap(this.rootEl, POSTCODE);
	}
}
