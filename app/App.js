import ShellView from './shell/ShellView';

// index.html //
import 'file?name=[name].[ext]!./index.html';

export default class App {

	constructor() {
		console.log('App');

		this.shell = new ShellView(document.body);
	}

}

new App();
