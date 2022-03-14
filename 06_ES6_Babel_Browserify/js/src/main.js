// 引入其他模块

// 引入第三方库！
import $ from 'jQuery'


import {foo, bar, arr} from './module1'
import {fun, fun2} from './module2'
import myFun from './module3'

$('body').css('background', 'red')
console.log(foo, bar, arr);
console.log(fun, fun2);
console.log(myFun);

// babel js/src -d js/build