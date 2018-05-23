# react状态管理之mobx

依赖的包:
<react依赖>
"react": "^16.3.0",
"react-dom": "^16.3.0",
"react-router-dom": "^4.2.2"

<babel转译>
"babel-core": "^6.26.0",
"babel-loader": "^7.1.4",
"babel-preset-env": "^1.6.1",
"babel-preset-react": "^6.24.1",
"babel-preset-stage-0": "^6.24.1",

<核心包mobx>
"mobx": "^4.3.0",
"mobx-react": "^5.1.2",
"babel-plugin-transform-decorators": "^6.24.1",
"babel-plugin-transform-decorators-legacy": "^1.3.4"

在webpack.config.js中配置：plugins: ['transform-decorators-legacy','transform-decorators']：如：
{
    test: /\.(js|jsx)$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: ['transform-decorators-legacy','transform-decorators']
        }
    }
}

npm install

webpack -p

npm start

访问：http://localhost:/9000