/* config-overrides.js */

const { override } = require('customize-cra');
const path = require("path");
 
module.exports = override(
     config =>{
         config.resolve.alias = {
             "@": path.resolve(__dirname, "src"),
             "@Images": path.resolve(__dirname,"src/assets/img"),
             "@Pages":path.resolve(__dirname,"src/pages"),
             "@Components":path.resolve(__dirname,"src/components")
         };
         return config;
     },
);