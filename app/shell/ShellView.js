import MapView from '../map/MapView';
import CoachListView from '../coach-list/CoachListView';
import ShellController from './ShellController';

export default class ShellView {

	constructor(parentEl) {
		console.log('ShellView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'shell o-grid o-grid--small-full o-grid--medium-full o-grid--large-fit o-grid--no-gutter';
		parentEl.appendChild(this.rootEl);

		this.controller = new ShellController(this);
	}

	addCoachListView() {
		this.listView = new CoachListView(this.rootEl);
	}

	addMapView() {
		this.mapView = new MapView(this.rootEl);
	}

}
