'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


app.use('/api', _routes2.default);
app.get('/', function (req, res) {
    return res.send('Hello World!');
});

app.listen(9000, function () {
    return console.log('Example app listening on port 9000!');
});