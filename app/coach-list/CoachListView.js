export default class CoachListView {

	constructor(parentEl) {
		console.log('CoachListView');

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'coach-list o-grid__cell o-grid__cell--width-20';
		parentEl.appendChild(this.rootEl);

		this.title = document.createElement('h1');
		this.title.textContent = 'Coach Station Finder';
		this.title.classList = 'c-heading c-heading--large';
		this.rootEl.appendChild(this.title);

//
//		this.controller = new MapController(this);
//		this.controller.init();
	}




}
