var  path=require('path');
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    mode:'development',
    entry:{
        app:'./app/app.js'
    },
    output:{
        path: path.resolve(__dirname + '/public')
    },
    //插件
    module:{
        rules:[
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {loader:'url-loader',options:{limit:8024}}
                ]
            },
            {
                test:/.\html?$/,
                use:[
                    {loader:'html-withimg-loader'}
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'index.html',

            //表示将入口脚本插入到body结束之前
            // false 不要入口脚本 （基本用不上）
            // head表示将入口脚本插入到head结束标签之前
            inject:'body',

            filename:'pro.html',

            minify:{
                removeComments:true,


                removeAttributeQuotes:true,

                collapseWhitespace:true,
            }
        })
    ]


}