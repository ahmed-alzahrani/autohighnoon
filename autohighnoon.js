var TaskService = require('./services/taskService')
var config = require('./config')
var TwitterService = require('./services/twitterService')
var twitterService = new TwitterService(config)

var task = TaskService.buildTask(0, twitterService.twitter)
TaskService.startTask(task)
