import GoogleMap from '../common/GoogleMap';

export default class CoachMap extends GoogleMap {

	constructor(parentEl, postCode) {
		console.log('CoachMap');

		super(parentEl, postCode);
	}

}
