const mediumZoom = require('medium-zoom')

/**
 * @file browser
 * @author Cuttle Cong
 * @date 2018/3/10
 * @description
 */
module.exports = function (opt) {

  return function (pageData) {
    var callbackCollect = this.callbackCollect

    callbackCollect(function (ele) {
      mediumZoom('image', opt || {})
    })
  }
}
