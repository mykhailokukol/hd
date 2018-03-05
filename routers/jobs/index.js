let controllers = require('./controllers')
module.exports = jobs = {

  get: {
    description: '',
    method: 'get',
    path: 'jobs',
    controller: controllers.getJobs
  }
}


