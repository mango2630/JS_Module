'use strict';

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入其他模块

(0, _jQuery2.default)('body').css('background', 'red');
console.log(_module.foo, _module.bar, _module.arr);
console.log(_module2.fun, _module2.fun2);
console.log(_module4.default);

// babel js/src -d js/build