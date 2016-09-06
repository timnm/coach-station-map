import CoachListController from './CoachListController';

export default class CoachListView {

	constructor(parentEl) {
		console.log('CoachListView');

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'coach-list o-grid__cell o-grid__cell--width-100';
		parentEl.appendChild(this.rootEl);

		this.title = document.createElement('h3');
		this.title.classList = 'c-heading  c-heading--medium';
		this.title.textContent = 'Stations';
		this.rootEl.appendChild(this.title);

		this.controller = new CoachListController(this);

		return this.controller;
	}


	addStations(_stations) {
		this.stations = _stations;

		let listTemplate = `<ul>
													${this.stations.map(station => `<li><a class="c-button c-button--primary c-button--ghost c-button--block c-button--medium" id="${station.nationalcoachcode}">${station.name}</a></li>`).join('\n      ')}
												</ul>`;

		this.list = document.createElement('div');
		this.list.innerHTML = listTemplate;
		this.rootEl.appendChild(this.list);

		this.rootEl.addEventListener('click', this.onStationClick.bind(this), false);
	}


	onStationClick(evt) {
		evt.preventDefault();
		if(evt.target.nodeName !== 'A') return;
		let buttons = this.list.querySelectorAll('li a');

		for(let i=0; i<buttons.length; i++) {
			if(buttons[i] !== evt.target) {
				buttons[i].classList.remove('selected');
			} else {
				evt.target.classList.add('selected');
			}
		}
	}


	listClickHandler(callBack) {
		this.rootEl.addEventListener('click', callBack, false);
	}

}
