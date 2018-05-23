# react状态管理之mobx

将所有需要公共管理的状态纳入容器类。

添加修饰@observable，被观察者。

需要改变状态的组件添加修饰@observer，观察者。

在任何组件内部都能访问这个容器类，并改变其值。

<mobx核心包>

**mobx**

**mobx-react**

<修饰器依赖>@observable/@observer

**babel-plugin-transform-decorators**

**babel-plugin-transform-decorators-legacy**

在webpack.config.js中配置：

`{

    test: /\.(js|jsx)$/,
    
    use: {
    
        loader: 'babel-loader',
        
        options: {
        
            presets: ['env', 'react', 'stage-0'],
            
            plugins: ['transform-decorators-legacy','transform-decorators']//不能少
            
        }
        
    }
    
}`

npm install

webpack -p

npm start

访问：http://localhost:/9000