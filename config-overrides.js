/**
 * Created by greatwo on 2020/7/9.
 */
const { override, fixBabelImports,addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
    addDecoratorsLegacy(),
       fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css',
     }),
);