import MapView from '../map/MapView';
import CoachListView from '../coach-list/CoachListView';

export default class ShellView {

	constructor(parentEl) {
		console.log('ShellView', parentEl);

		this.rootEl = document.createElement('div');
		this.rootEl.classList = 'shell o-grid o-grid--small-full o-grid--medium-full o-grid--large-fit o-grid--no-gutter';
		parentEl.appendChild(this.rootEl);

		this.list = new CoachListView(this.rootEl);

		this.map = new MapView(this.rootEl);


	}

}
