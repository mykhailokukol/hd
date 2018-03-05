let controllers = require('./controllers')
module.exports = home = {

  get: {
    description: 'start page',
    method: 'get',
    path: '/',
    controller: controllers.getHome
  }
}







