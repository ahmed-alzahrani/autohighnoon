var Twit = require('twit')

module.exports = class TwitterService {
  constructor (config) {
    this.twitter = new Twit(config.twitter)
    this.reportTo = config.reportTo
  }

  generateTweet (status) {
    return {
      status: status
    }
  }

  highNoonTweet (zone, twitter) {
    let tweet = this.generateTweet(`Hey, ${zone}, it's high noon!`)
    this.twitter.post('statuses/update', tweet, this.tweeted.bind(this))
  }

  tweeted (err, data, response) {
    if (err) {
      let tweet = this.generateTweet(`.${this.reportTo} ... HEY! CAN YOU CHECK MY DEBUG-LOG`)
      this.twitter.post('statuses/updated', tweet)
    }
  }
}
