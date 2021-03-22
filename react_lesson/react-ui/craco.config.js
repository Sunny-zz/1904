// 修改 antd 的主题配置

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      // 让 less 插件生效， 在 react 内可以引入 less 文件
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};