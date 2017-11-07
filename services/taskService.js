 var cron = require('node-cron') // for scheduling
 var config = require('../config')
 var zoneService = require('./zoneService')

 var TwitterService = require('./twitterService')
 var twitterService = new TwitterService(config)

 module.exports = class TaskService {
   static buildTask (minute, twitter) {
     let task = cron.schedule(`${minute} * * * *`, function () {
       let zone = zoneService.generateZone()
       twitterService.highNoonTweet(zone, twitter)
     })
     return task
   }

   static startTask (task) {
     task.start()
   }
}
