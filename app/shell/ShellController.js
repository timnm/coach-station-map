export default class ShellController {
	constructor(view) {
		console.log('ShellController');

		this.view = view;

		this.init();
	}

	init() {
		this.view.addCoachListView();
		this.view.addMapView();
	}



}
