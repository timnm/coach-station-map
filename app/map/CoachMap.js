/*global google */
import GoogleMap from '../common/GoogleMap';

export default class CoachMap extends GoogleMap {

	constructor(parentEl, postCode) {
		console.log('CoachMap');

		super(parentEl, postCode);
	}

	addStations(stations) {

		this.markers = {};

		for(let i=0; i<stations.length; i++) {

			let _lng = parseFloat(stations[i].latlong.coordinates[0]);
			let _lat = parseFloat(stations[i].latlong.coordinates[1]);

			let marker = new google.maps.Marker({
				map: this.map,
				position: {lng:_lng, lat:_lat},
				label: stations[i].name,
				title: stations[i].name,
				icon: {
					path: google.maps.SymbolPath.CIRCLE,
					fillColor: '#eee',
					fillOpacity: 0.8,
					scale: 13,
					strokeWeight: 2
				}
			});

			this.markers[stations[i].nationalcoachcode] = marker;

			marker.setMap(this.map);
		}
	}

	selectStation(id) {
		console.log('cmap');
		for(let marker in this.markers) {
			if(marker === id) {
				this.markers[marker].icon.fillColor = 'yellow';
				this.markers[marker].setZIndex(999);
				this.map.setCenter(this.markers[marker].position);
			} else {
				this.markers[marker].icon.fillColor = '#eee';
				this.markers[marker].setZIndex(500);
			}

			this.markers[marker].setMap(this.map);
		}
	}

}
