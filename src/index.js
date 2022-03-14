import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';
const sqlite3 = require('sqlite3').verbose();


Vue.use(VeeValidate);

// setup SQLite3 connection
let db = new sqlite3.Database(':memory:', (err) => {
	if (err) {
		return console.error(err.message);
	}

	console.log('Connected to the SQLite Database');
});

//Closing database connection
db.close((err) => {
	if (err) {
		return console.error(err.message);
	}

	console.log('Close the database connection.');
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
