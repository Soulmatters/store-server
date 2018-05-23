'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.productById = productById;
exports.products = products;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function productById(id, auth) {
    var product = _axios2.default.get('https://yves.fashion/wp-json/wc/v1/products/' + id, {
        headers: {
            Authorization: auth
        }
    });
    return product;
}
function products(auth) {
    var product = _axios2.default.get('https://yves.fashion/wp-json/wc/v1/products?per_page=10', {
        headers: {
            Authorization: auth
        }
    });
    return product;
}