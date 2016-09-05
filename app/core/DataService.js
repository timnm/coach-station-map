import Utils from '../common/Utils';

export const API = 'https://data.gov.uk/data/api/service/transport/naptan_coach_stations/';

/**
 * Returns a list of coach stations for a postcode
 * within a given distance
 */
export const API_ERROR = 'API Error';

const mockAjaxSuccess = {
				status: 200,
				responseText: '{"success":true,"result":[{"ospoint":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG27700"}},"coordinates":[528934.0,179279.0]},"nationalcoachcode":"900057888S","name":"Bressenden Place","latlong":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG4326"}},"coordinates":[-0.14396741679000916,51.49775536154338]},"distance":2591.325831254,"atcocode":"490004555P"},{"ospoint":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG27700"}},"coordinates":[527746.0,181994.0]},"nationalcoachcode":"900057378C","name":"Baker Street","latlong":{"type":"Point","crs":{"type":"name","properties":{"name":"EPSG4326"}},"coordinates":[-0.16008949432614758,51.522424014262185]},"distance":1965.91377621,"atcocode":"490006135S"}]}'
};

export class DataService {

	constructor() {
		console.log('MapService');
	}


	static getCoachStations(postCode, distance) {
		return new Promise(function(resolve, reject) {

			let url = API + 'postcode?postcode=' + postCode + '&distance=' + distance;

			// offline testing //
//			let data = JSON.parse(mockAjaxSuccess.responseText);
//			let stations = data.result;
//			Utils.ARRAY_SORT_BY_NAME(stations);
//			resolve(stations);

			let request = new XMLHttpRequest();
			request.open('GET', url);
			request.onload = function() {
				if (request.status === 200) {
					// parse the JSON //
					let data = JSON.parse(request.responseText);
					if(data.success) {
						// sort the array alphabetically //
						let stations = data.result;
						Utils.ARRAY_SORT_BY_NAME(stations);
						return resolve(stations);
					} else {
						return reject(new Error(API_ERROR));
					}

				} else {
					return reject(new Error(API_ERROR));
				}
			};

			request.onerror = function() {
					return reject(new Error('Network error'));
			};

			request.send();
		});
	}
}
