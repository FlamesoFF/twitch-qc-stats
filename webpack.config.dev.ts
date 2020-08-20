import webpack from "webpack";
import path from 'path';
import webpackMerge from 'webpack-merge';

import commonCfg from './webpack.config.common';

const devConfig : webpack.Configuration = {
    mode: 'development',
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    watch: true
};

export default webpackMerge(commonCfg, devConfig);