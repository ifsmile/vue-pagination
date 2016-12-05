var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
	entry:'./src/main.js',
	output:{
		path: path.resolve(__dirname,'dist'),
		filename:'js/[name].js',
		publicPath:'/dist/'
        // filename: './dist/js/main.js'
	},
	devServer:{
        contentBase: path.join(__dirname, "./"),
		historyApiFallback:true,
		hot:false,
		inline:true,
        noInfo: true,
        publicPath: "/dist/"
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.js$/,
				loader:'babel',
				exclude:/node_modules/
			},
			 {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
             {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: 'css/iconfont/[name].[ext]'
                }
            }, {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                query: {
                  limit: 40000,
                  name: 'img/[name].[ext]'
                }
            }
		]
	},
	vue: {
        loaders: {
            js: 'babel'
        }
    },
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })],
    babel:{
    	presets:['es2015'],
    	plugins:['transform-runtime']
    },
    resolve:{
    	extensions:['','.js','.vue','.css'],
    	alias:{
            vue: 'vue/dist/vue.js',
    		components:path.join(__dirname,'./src/components')
    	}
    },
    devtool: '#eval-source-map',
    plugins: [
        new ExtractTextPlugin("css/main.css"),
    ],
}