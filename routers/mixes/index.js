let controllers = require('./controllers')
module.exports = mixes = {

  get: {
    description: '',
    method: 'get',
    path: 'mixes',
    controller: controllers.getMixes
  }
}


