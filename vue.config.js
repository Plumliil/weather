module.exports = {
    devServer: {
        port: 8080,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: { //配置跨域
            '/api': {
                target: 'http://localhost:8080', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': 'https://api.iyk0.com' //请求的时候使用这个api就可以
                }
            },
            '/ad': {
                target: 'http://localhost:8080', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/ad': 'http://pv.sohu.com' //请求的时候使用这个api就可以
                }
            },

        }
    }
}