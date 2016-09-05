import CoachListController from './CoachListController';

const STATION_CLICKED = 'CoachListController station clicked';

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

	addStations(_stations) {
		this.stations = _stations;

		let listTemplate = `${this.stations.map(station => `<li><a class="c-button c-button--primary c-button--ghost c-button--block c-button--medium" id="${station.nationalcoachcode}">${station.name}</a></li>`).join('\n      ')}`;

		this.list = document.createElement('ul');
		this.list.innerHTML = listTemplate;
		this.rootEl.appendChild(this.list);

		//this.list.addEventListener('click', this.onStationClick.bind(this), false);
	}

	onStationClick(evt) {

	}



}
