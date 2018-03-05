const http = require('http');
const fs = require('fs');
const express = require('express');
//Auth packages


let initMiddleware = require('./initMiddleware');



const Server = function (
	port,
	restData
) {
	let app = express();
	let server;


	function init() {
		initMiddleware(app);
		initRoutes();
	}


	function initRoutes() {
		restData.forEach((p) => {
			addRoutes(p.method, p.path, p.controller);
		})
		app.use(function (req, res) {
			res.render('404');
		});
	}

	function addRoutes(method = 'post', route, handler) {
		let endpointPath = `/${route}`;
		app[method](`${endpointPath}`, handler);

	}

	this.start = () => {
		server = http.createServer(app);
		server.listen(port, () => {
			console.info(`Server listening on port ${port}`);
		})
	}

	init();
}

module.exports = Server;