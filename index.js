let Server = require('./modules/server');
let port = 3000;
let routers = require('./routers');

let server = new Server(port, routers);
server.start();


