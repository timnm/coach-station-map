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

		let remoteSrc = API + '?key=' + API_KEY;// + '&callback=app.initMap%28%29';
		let remote = document.createElement('script');
				remote.onload = this.initGoogleMap.bind(this, this.rootEl);
				remote.src = remoteSrc;
				remote.setAttribute('async', true);
				remote.setAttribute('defer', true);

		document.body.appendChild(remote);
	}

	initGoogleMap(parentEl) {

		this.map = new google.maps.Map(parentEl, {
			center: {lat: -34.397, lng: 150.644},
			scrollwheel: false,
			zoom: 8
		});

	}
}
