import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const commonCfg: webpack.Configuration = {
    entry: {
        panel: './src/panel/index.ts',
        config: './src/config/index.ts'
    },

    target: 'web',

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
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: ['\.vue$']
                        }
                    }
                ]
            },

            {
                test: /\.js$/,
                loader: "babel-loader"
            },

            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        options: {
                            loaders: {
                                png: 'file-loader'
                            }
                        }
                    }
                }
                ]
            },

            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 16000, // Convert images < 8kb to base64 strings
                        name: '[hash]-[name].[ext]',
                        outputPath: 'assets/images'
                    }
                }]
            },

            {
                test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }]
            }
        ]
    },

    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     host: 'localhost',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     port: 8080
    // },

    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.css',
            '.scss',
            '.vue'
        ],

        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
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
        new CopyWebpackPlugin([
            {
                from: './src/assets/images',
                to: 'assets/images'
            },
            // {
            //     from: './src/assets/fonts',
            //     to: 'assets/fonts'
            // }
        ])
    ]
};

export default commonCfg;