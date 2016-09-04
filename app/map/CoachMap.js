/*global google */
import GoogleMap from '../common/GoogleMap';

export default class CoachMap extends GoogleMap {

	constructor(parentEl, postCode) {
		console.log('CoachMap');

		super(parentEl, postCode);
	}

	addStations(stations) {

		let gmaps = google.maps;
		let geo = this.geocoder;

		this.geocoder.geocode( { 'address': this.postCode}, (results, status) => {

			if (status == google.maps.GeocoderStatus.OK) {

				this.map.setCenter(results[0].geometry.location);

				for(let i=0; i<stations.length; i++) {
					let pos = {lng:parseFloat(stations[i].latlong.coordinates[0].toFixed(3)), lat:parseFloat(stations[i].latlong.coordinates[1].toFixed(3))};
					console.log(stations[i].name);

					let marker = new google.maps.Marker({
						map: this.map,
						position: pos,
						label: stations[i].name,
						title: stations[i].name,
						icon: {
							path: google.maps.SymbolPath.CIRCLE,
							fillColor: 'yellow',
							fillOpacity: 1,
							scale: 10,
							strokeWeight: 1
						}
					});
				}

				google.maps.event.trigger(this.map, 'resize');

			} else {
				// errors //
				alert('Could not add stations: ' + status);
			}
		});
	}

}
