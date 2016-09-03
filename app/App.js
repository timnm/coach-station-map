// index.html //
import 'file?name=[name].[ext]!./index.html';

import ShellView from './shell/ShellView';

import '../sass/app.scss';

export default class App {

	constructor() {
		console.log('App');

		this.shell = new ShellView(document.body);
	}

}

new App();
