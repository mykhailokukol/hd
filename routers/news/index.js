let controllers = require('./controllers')
module.exports = news = {

  get: {
    description: '',
    method: 'get',
    path: 'news',
    controller: controllers.getNews
  }
}


