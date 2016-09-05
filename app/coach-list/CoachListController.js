export default class CoachListController {
	constructor(view) {
		console.log('CoachListController');

		this.view = view;

		this.init();
	}

	init() {

	}

	addStations(stations) {
		console.log('add stations');
		this.view.addStations(stations);
	}



}
