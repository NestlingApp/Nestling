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
             "@": path.resolve(__dirname, "src"),
             "@Images": path.resolve(__dirname,"src/assets/img"),
             "@Pages":path.resolve(__dirname,"src/pages"),
             "@Components":path.resolve(__dirname,"src/components"),
             "@Data":path.resolve(__dirname,"src/data"),
             "@Styles":path.resolve(__dirname,"src/styles")
         };
         return config;
     }
);