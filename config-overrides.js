/**
 * Created by greatwo on 2020/7/9.
 */
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
       fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css',
     }),
);