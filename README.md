# 使用 Webpack 构建一个项目

## 项目说明
1. 使用 CommonJS 进行对 `src/js` 目录下的 js 代码进行模块化，所有模块都不产生全局变量，只通过 require 声明依赖，以及通过 module.exports 暴露模块接口。

2. 根据 `webpack.config.js` 配置文件，使用 Webpack 对 js 进行打包, 入口文件为 `src/js/index.js`, 打包输出到 `dist/bundle.js`。

3. 使用 `css-loader` 和 `style-loader`, 将 `src/css/style.css` 也加入打包。

4. 使用 `html-webpack-plugin` 将 `src/index.html` 作为模板，最终在 `dist/` 目录自动生成引用打包后文件的 `index.html` 。

5. 使用 `copy-webpack-plugin` 将 `src/images` 下的所有图片复制到 `dist/images` 目录。

6. 使用 `UglifyJsPlugin` 对代码进行压缩。

7. 可以使用 `extract-text-webpack-plugin` 将 CSS 文件分离出来，构建后目录单独有一个 `style.css` 文件。

8. 使用 `clean-webpack-plugin`， 每次构建之前删掉 `dist` 目录，避免上一次构建的影响。

9. 使用 `webpack-dev-server` 可以开启本地服务器，保存代码后页面自动刷新。

10. `webpack` 和 `webpack-dev-server` 都装到项目本地，不全局安装，使用 [`npm scripts`]（比如`npm run build` 运行 `webpack` 命令, `npm run server` 可以开启本地服务器。）