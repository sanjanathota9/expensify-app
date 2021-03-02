const path=require('path');
const { node } = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log(path.join(__dirname,'public'));
module.exports=(env)=>{
    const isproduction=env==="production";
    const CSSExtract=new ExtractTextPlugin('styles.css');
    console.log(env);
    return {
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
              use:CSSExtract.extract({
                use:[
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                ]
              })
              
            }
        ]
        },
        plugins:[
            CSSExtract
        ],
        devtool:isproduction?'source-map':'inline-source-map',
        devServer:{
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true//SERVE UP INDEX.HTML FOR ALL 404 LET REACT ROUTER DECIDES WHICH ROUTE TO SHOW UP
        }
    }
    
}