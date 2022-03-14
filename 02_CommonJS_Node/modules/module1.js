// 不可以多个暴露
module.exports = {
    msg: 'module1',
    foo(){
        console.log(this.msg);
    }
}