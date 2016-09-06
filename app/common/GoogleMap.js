/*global google */
const API = 'https://maps.googleapis.com/maps/api/js';

/**
 * Creates a Google Map from a postcode
 */

export default class GoogleMap {

	constructor(parentEl, postCode) {

		console.log('GoogleMap', parentEl, postCode);

		this.rootEl = document.createElement('div');
		this.rootEl.className = 'google-map';
		this.rootEl.style.width = '100%';
		this.rootEl.style.height = '100%';
		parentEl.appendChild(this.rootEl);

		// Add the script tag to download the API //
		let remoteSrc = API;
		let remote = document.createElement('script');
				remote.onload = this.initMap.bind(this, this.rootEl, postCode);
				remote.src = remoteSrc;
				remote.setAttribute('async', true);
				remote.setAttribute('defer', true);

		document.body.appendChild(remote);
	}

	initMap(parentEl, postCode) {
		this.postCode = postCode;
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
		this.map = new google.maps.Map(parentEl, mapOptions);

		// center on postcode and add marker //
		this.geocoder.geocode( { 'address': postCode}, (results, status) => {

			if (status == google.maps.GeocoderStatus.OK) {
				this.map.setCenter(results[0].geometry.location);
				console.log(results[0].geometry.location.lat);
				let marker = new google.maps.Marker({
						map: this.map,
						label: 'I',
						title: postCode,
						position: results[0].geometry.location,
						 icon: {
							path: google.maps.SymbolPath.CIRCLE,
							scale: 14,
							fillColor: '#33c5ff',
							fillOpacity: 1,
							strokeWeight: 4
						},

				});
			} else {
				// errors //
				alert('Could not create map: ' + status);
			}
		});

	}

}
