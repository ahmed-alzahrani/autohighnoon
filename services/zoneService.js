var time = require('time')
var moment = require('moment-timezone')
var _ = require('lodash')

module.exports = class ZoneService {

  static generateZone () {
    let highNoonArray = []
     // loop through each zone, and if it's noon, add it to the highNoonArray
    _.forEach(moment.tz.names(), function (name) {
      let now = new time.Date()
      now.setTimezone(name)
      if (now.getHours() === 12) {
        highNoonArray.push(name)
      }
    })
    highNoonArray = this.pruneList(highNoonArray)
    let zone = highNoonArray[Math.floor(Math.random() * highNoonArray.length)]
    zone = this.pruneZone(zone)
    return zone
  }

  static pruneList (list) {
    _.filter(list, function (name) {
      return ((name.indexOf('/') > -1))
    })
    return list
  }

  static pruneZone (zone) {
    let index = zone.indexOf('/') + 1
    zone = zone.substring(index)
    zone = zone.replace('_', ' ')
    return zone
  }
}
