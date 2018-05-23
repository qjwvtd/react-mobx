# react状态管理之mobx


<react依赖>

react

react-dom

<babel依赖>

babel-core

babel-loader

babel-preset-env

babel-preset-react

babel-preset-stage-0

<mobx核心包>

**mobx**

**mobx-react**

**babel-plugin-transform-decorators**

**babel-plugin-transform-decorators-legacy**

在webpack.config.js中配置：

`{

    test: /\.(js|jsx)$/,
    
    use: {
    
        loader: 'babel-loader',
        
        options: {
        
            presets: ['env', 'react', 'stage-0'],
            
            **plugins: ['transform-decorators-legacy','transform-decorators']**
            
        }
        
    }
    
}`

npm install

webpack -p

npm start

访问：http://localhost:/9000