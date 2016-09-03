import {POST_CODE} from '../core/config';


export default class MapController {

	constructor(view) {
		console.log('MapController', view);

		this.view = view;

		// init the Google map //
		this.view.addGoogleMap(POST_CODE);

	}


}