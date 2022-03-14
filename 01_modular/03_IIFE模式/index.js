(function(){
    let msg = 'module3'
    function foo(){
        console.log(msg);
    }
    // 立即执行函数的this指向window
    window.module = {
        foo: foo
    }
})()