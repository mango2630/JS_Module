(function (){

    requirejs.config({
        baseUrl: 'js/',
        paths: {
            // 不要加后缀 .js!!!!!!!
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery: './libs/jquery.min'
        }
    })

    requirejs(['alerter'], function(alerter){
        alerter.showMsg();
    })
})()