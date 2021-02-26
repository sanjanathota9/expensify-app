const path=require('path');
const { node } = require('webpack');

console.log(path.join(__dirname,'public'));
module.exports={
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
          test: /\.s?css$/,
          use:[
              'style-loader',
               'css-loader',
               'sass-loader'
          ]
        }
    ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true//SERVE UP INDEX.HTML FOR ALL 404 LET REACT ROUTER DECIDES WHICH ROUTE TO SHOW UP
    }
}
