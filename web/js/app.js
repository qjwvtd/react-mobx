import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {User,PackageJson} from './store';

const user = new User();
const packageJson = new PackageJson();

class AddUser extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    addUser(){
        const userInfo = {
            "id": null,
            "name": "GuoYu",
            "age": "18岁",
            "mobile":15895623495,
            "address":"西航港双华路168号1栋"
        };
        user.addUser(userInfo);
    }
    delUser(){
        user.delUser(0);
    }
    render(){
        return (
            <div>
                <pre>"name": "GuoYu","age": "18岁","mobile":15895623495,"address":"西航港双华路168号1栋"</pre>
                <button type="button" onClick={this.addUser.bind(this)}>添加上面的数据</button>&nbsp;
                <button type="button" onClick={this.delUser.bind(this)}>删除第一条</button>
            </div>
        );
    }
}
class ChangePackage extends Component{
    changePackage(){
        const ran = ((Math.random()*10).toFixed(0)) + '.0.0';
        packageJson.changeVersion(ran);
        packageJson.changeDescription('the demo version is ' + ran);
    }
    render(){
        return (
            <button type="button" onClick={this.changePackage.bind(this)}>改变下面的version和description</button>
        );
    }
}

// 被改变状态的组件是观察者，observer
@observer
class UserTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:user.userTable.list
        };
    }
    render(){
        return (
            <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                <thead><tr><td>姓名</td><td>年龄</td><td>手机</td><td>地址</td></tr></thead>
                <tbody>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.address}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

@observer
class PackageJsonInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            demoJson:packageJson.demoJson
        };
    }
    componentDidMount(){
        $.ajax({
            url:'./lib/demo.json',
            method:'GET',
            dataType:'JSON',
            success:(data) => {
                //异步获取的数据如果要做状态管理
                //一定要把获取的数据先传给状态管理容器
                //再把自身状态绑定到容器里
                packageJson.demoJson = data;
                this.setState({
                    demoJson:packageJson.demoJson
                });
            }
        });
    }
    render(){
        return (
            <div>
                <pre>version:{this.state.demoJson.version}</pre>
                <pre>description:{this.state.demoJson.description}</pre>
            </div>
        );
    }
}

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return [
            <AddUser key="addUser" />,
            <UserTable key="userTable" />,
            <p key="华丽的分界线" style={{background:'green',textAlign:'center',color:'#fff'}}>华丽的分界线</p>,
            <ChangePackage key="package" />,
            <PackageJsonInfo key="testDemoJson" />
        ];
    }
}
export default App;


