export default class CoachListController {
	constructor(view) {
		console.log('CoachListController');

		this.view = view;
	}


	addStations(stations) {
		console.log('add stations');
		this.view.addStations(stations);
	}

}
