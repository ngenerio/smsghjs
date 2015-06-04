var has = {}.hasOwnProperty

var utils = {}

/**
 * encodes a given text into base64
 * @param  {String} text The text to be encoded
 * @return {String}      The encoded string
 */
utils.encode = function (text) {
  return new Buffer(text).toString('base64')
}

/**
 * serialize  It takes and object and turns its properties and values into a url-encoded form
 * @param  {Object} obj    Object whose properties and values are going to be encoded
 * @param {Boolean} encodeProp to determine whether to encode the property or not
 * @param {Boolean} encodeValue to determine whether to encode the value or not
 * @return {String}
 */
utils.serialize = function (obj, encodeProp, encodeValue) {
  var strArr = []

  for (var prop in obj) {
    if (has.call(obj, prop)) {
      strArr.push((encodeProp ? encodeURIComponent(prop) : prop) + '=' + (encodeValue ? encodeURIComponent(obj[prop]) : obj[prop]))
    }
  }

  return strArr.join('&')
}

/**
 * merges objects provided as arguments into a single object
 * @return {Object} Contains the properties and values of the argument objects
 */
utils.merge = function () {
  var obj = {}
  var args = [].slice.call(arguments, 0)

  for (var i = 0, l = args.length; i < l; i++) {
    for (var prop in args[i]) {
      if (has.call(args[i], prop) && args[i][prop]) {
        obj[prop] = args[i][prop]
      }
    }
  }

  return obj
}

module.exports = utils