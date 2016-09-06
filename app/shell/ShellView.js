import MapView from '../map/MapView';
import CoachListView from '../coach-list/CoachListView';
import ShellController from './ShellController';

export default class ShellView {

	constructor(parentEl) {
		console.log('ShellView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'shell o-grid o-grid--small-full o-grid--medium-full o-grid--large-fit o-grid--no-gutter';
		parentEl.appendChild(this.rootEl);

		this.leftColWrapper = document.createElement('div');
		this.leftColWrapper.classList = 'left-col-wrapper o-grid__cell  o-grid__cell--width-0 o-grid__cell--width-100@small o-grid__cell--width-25@medium o-grid__cell--width-25@large';

		this.leftCol = document.createElement('div');
		this.leftCol.classList = 'left-col o-grid  o-grid--wrap o-grid--no-gutter';
		this.leftColWrapper.appendChild(this.leftCol);

		this.titleWrapper = document.createElement('div');
		this.titleWrapper.classList = 'title o-grid__cell o-grid__cell--width-100';
		this.leftCol.appendChild(this.titleWrapper);

		this.title = document.createElement('h1');
		this.titleWrapper.appendChild(this.title);
		this.title.textContent = 'Coach Station Finder';
		this.title.classList = 'c-heading c-heading--large';

		this.rootEl.appendChild(this.leftColWrapper);

		this.controller = new ShellController(this);
		this.controller.init();
	}


	addCoachListView() {
		return new CoachListView(this.leftCol);
	}


	addMapView() {
		return new MapView(this.rootEl);
	}


	displayCoachDataError(error) {
		this.error = document.createElement('div');
		this.error.classList = 'c-alerts__alert c-alerts__alert--error cf';
		this.error.textContent = error;
		document.body.insertBefore(this.error, document.body.firstChild);
	}

}
