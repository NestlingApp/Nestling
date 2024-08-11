/* config-overrides.js */

const { override, addWebpackModuleRule } = require('customize-cra');

const path = require("path");
 
module.exports = override(
    addWebpackModuleRule({
        test: /\.module\.css$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
    }),
     config =>{
         config.resolve.alias = {

         };
         return config;
     }
);