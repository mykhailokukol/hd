let controllers = require('./controllers')
module.exports = p404 = {

  get: {
    description: 'error',
    method: 'get',
    path: '404',
    controller: controllers.get404
  }
}


