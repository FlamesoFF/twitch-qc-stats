import webpack from "webpack";
import path from 'path';
import merge from 'webpack-merge';

import commonCfg from './webpack.config.common';

const prodConfig: webpack.Configuration = {
    mode: 'production',
    output: {
        path: path.join(__dirname, './prod/'),
        filename: '[name].bundle.js'
    },
    optimization: {
        minimize: true
    },
    watch: false
};

export default merge(commonCfg, prodConfig);