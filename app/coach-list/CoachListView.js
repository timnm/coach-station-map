import CoachListController from './CoachListController';

export default class CoachListView {

	constructor(parentEl) {
		console.log('CoachListView');

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'coach-list o-grid__cell o-grid__cell--width-100';
		parentEl.appendChild(this.rootEl);

		this.title = document.createElement('h3');
		this.title.textContent = 'The list';
		this.rootEl.appendChild(this.title);

		this.controller = new CoachListController(this);
		this.controller.init();

		return this.controller;
	}




}
