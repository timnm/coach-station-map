import MapView from '../map/MapView';

export default class ShellView {

	constructor(parentEl) {
		console.log('ShellView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.className = 'shell';
		parentEl.appendChild(this.rootEl);

		this.map = new MapView(this.rootEl);
	}

}
