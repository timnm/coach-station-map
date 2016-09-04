export const API = 'https://data.gov.uk/data/api/service/transport/naptan_coach_stations/';

/**
 * Returns a list of coach stations for a postcode
 * within a given distance
 */
export const API_ERROR = 'API Error';

export class DataService {

	constructor() {
		console.log('MapService');
	}



	static getCoachStations(postCode, distance) {
		return new Promise(function(resolve, reject) {

			let url = API + 'postcode?postcode=' + postCode + '&distance=' + distance;

			console.log(url);

			let request = new XMLHttpRequest();
			request.open('GET', url);
			request.onload = function() {
				if (request.status === 200) {
					let data = JSON.parse(request.responseText);

					if(data.success) {
						resolve(data);
					} else {
						reject(new Error(API_ERROR));
					}

				} else {
					reject(new Error(API_ERROR));
				}
			};

			request.onerror = function() {
					reject(new Error('Network error'));
			};

			request.send();
		});
	}
}
