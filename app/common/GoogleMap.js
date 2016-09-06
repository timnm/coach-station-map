/*global google */
export const MAP_API_ERROR = 'Map API Error';

/**
 * Creates a Google Map from a postcode
 */

export class GoogleMap {

	constructor(parentEl, postCode) {

		this.parentEl = parentEl;
		this.postCode = postCode;

		this.API = 'https://maps.googleapis.com/maps/api/js';
	}


	init() {

		return new Promise((resolve, reject)=> {
			this.rootEl = document.createElement('div');
			this.rootEl.className = 'google-map';
			this.rootEl.style.width = '100%';
			this.rootEl.style.height = '100%';
			this.parentEl.appendChild(this.rootEl);

			// Add the script tag to download the API //
			let remoteSrc = this.API;
			this.remote = document.createElement('script');

			this.remote.onload = this.onScriptLoad.bind(this, resolve);

			this.remote.onerror = this.onScriptError.bind(this, reject);

			this.remote.src = remoteSrc;
			this.remote.setAttribute('async', true);
			this.remote.setAttribute('defer', true);

			document.body.appendChild(this.remote);
		});
	}

	onScriptLoad(resolve) {
		return resolve(this);
	}

	onScriptError(reject) {
		return reject(MAP_API_ERROR);
	}


	initMap() {

		return new Promise((resolve, reject)=> {

			// geocoder enables map from postcode, markers etc //
			this.geocoder = new google.maps.Geocoder();
			let latlng = new google.maps.LatLng(0,0);
			let mapOptions = {
				zoom: 13,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
					{
						featureType: 'all',
						stylers: [
							{ saturation: -80 }
						]
					},{
						featureType: 'road.arterial',
						elementType: 'geometry',
						stylers: [
							{ hue: '#00ffee' },
							{ saturation: 50 }
						]
					},{
						featureType: 'poi.business',
						elementType: 'labels',
						stylers: [
							{ visibility: 'off' }
						]
					}
				],
				mapTypeControl: true,
				mapTypeControlOptions: {
						style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
						position: google.maps.ControlPosition.BOTTOM_CENTER
				},

			};

			// init the map //
			this.map = new google.maps.Map(this.parentEl, mapOptions);

			// center on postcode and add marker //
			this.geocoder.geocode( { 'address': this.postCode}, (results, status) => {
				if (status == google.maps.GeocoderStatus.OK) {
					this.map.setCenter(results[0].geometry.location);

					new google.maps.Marker({
							map: this.map,
							label: 'I',
							title: this.postCode,
							position: results[0].geometry.location,
							 icon: {
								path: google.maps.SymbolPath.CIRCLE,
								scale: 14,
								fillColor: '#33c5ff',
								fillOpacity: 1,
								strokeWeight: 4
							},

					});

					return resolve(this.rootEl);
				} else {
					return reject(MAP_API_ERROR);
				}

			});

		});

	}

}
