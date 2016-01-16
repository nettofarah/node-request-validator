var merge = require('lodash/merge');

var requestValidator = require('./lib/request_validator');
var validations = require('./lib/validations');

module.exports = merge(requestValidator, validations);
