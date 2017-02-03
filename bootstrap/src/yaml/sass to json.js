var scssToJson = require('scss-to-json');
var path = require('path');

var filePath = path.resolve(__dirname, 'abb-colors.scss');
var colors = scssToJson(filePath);


