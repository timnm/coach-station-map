export default class Utils {

	static ARRAY_SORT_BY_NAME(_array) {
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
		_array.sort((a, b) => {
			var nameA = a.name.toUpperCase(); // ignore upper and lowercase
			var nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			// names must be equal
			return 0;
		});
	}


	static ARRAY_SORT_BY_DISTANCE(_array) {
		_array.sort((a, b) => {
			if (a.distance > b.distance) {
				return 1;
			}

			if (a.distance < b.distance) {
				return -1;
			}

			// a must be equal to b
			return 0;
		});
	}
}
