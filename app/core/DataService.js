const api = 'https://data.gov.uk/data/api/service/transport/naptan_coach_stations/';

/**
 * Returns a list of coach stations for a postcode
 * within a given distance
 */

export default class DataService {

	constructor() {
		console.log('MapService');
	}

	static getCoachStations(postCode, distance) {
		return new Promise(function(resolve, reject) {

			let url = api + 'postcode?postcode=' + postCode + '&distance=' + distance;

			let request = new XMLHttpRequest();
			request.open('GET', url);
			request.onload = function() {
				if (request.status === 200) {
					resolve(request.response);
				} else {
					reject(new Error(request.statusText));
				}
			};

			request.onerror = function() {
					reject(new Error('Network error'));
			};

			request.send();
		});
	}
}
