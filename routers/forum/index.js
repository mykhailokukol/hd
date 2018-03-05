let controllers = require('./controllers')
module.exports = forum = {

  get: {
    description: 'forum',
    method: 'get',
    path: 'forum',
    controller: controllers.getForum
  }
}


