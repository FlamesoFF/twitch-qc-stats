import webpack from "webpack";
import webpackDevServer from 'webpack-dev-server';
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const config = [
    {
        mode: 'development',
        entry: {
            panel: './src/panel/index.ts',
            config: './src/config/index.ts'
        },
        output: {
            path: path.join(__dirname, './dist/'),
            filename: '[name].bundle.js'
        },

        target: 'web',
        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader', // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },

                {
                    test: /\.css$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader" // translates CSS into CommonJS
                    ]
                },

                {
                    test: /\.ts$/,
                    use: [
                        "ts-loader"
                    ]
                },

                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },

                {
                    test: /\.vue$/,
                    use: [
                        "vue-loader"
                    ],

                },

                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                }
            ]
        }, 
        
        devServer : {
            contentBase: path.join(__dirname, 'dist'),
            host: 'localhost',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            port: 8080
        },

        resolve: {
            extensions: [
                '.ts',
                '.js',
                '.css',
                '.scss',
                '.vue'
            ],

            alias: {
                'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
            }
        },


        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './src/template.html',
                filename: 'panel.html',
                chunks: ['panel'],
                inject: 'body',
                options: {
                    title: 'Panel'
                }
            }),
            new HtmlWebpackPlugin({
                template: './src/template.html',
                filename: 'config.html',
                chunks: ['config'],
                inject: 'body',
                options: {
                    title: 'Configuration'
                }
            }),
            new CopyWebpackPlugin([{
                from: './Quake Champions Stats.json',
                to: 'manifest.json'
            }])
        ],

        watch: true
    }
];

export default config;