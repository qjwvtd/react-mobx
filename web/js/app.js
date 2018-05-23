import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import Store from './store';

const store = new Store();

class AddUser extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    addUserHanld(){
        const userInfo = {"id":"5","name":"Tony","age":"20岁"};
        store.tableList.push(userInfo);
    }
    render(){
        return (
            <div>
                <pre>id:"5",name:"Tony",age:"20岁"</pre>
                <button type="button" onClick={this.addUserHanld.bind(this)}>把上面的数据添加到用户表</button>
            </div>
        );
    }
}
class ChangePerson extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    changePerson(){
        store.userInfo.userName = 'zhangXiaoJun';
    }
    render(){
        return (
            <div>
                <pre>username:"zhangXiaoJun"</pre>
                <button type="button" onClick={this.changePerson.bind(this)}>把上面的username更新到个人信息表</button>
            </div>
        );
    }
}
// 被改变状态的组件是观察者，observer
@observer
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            userTablelist:'',
            personInfo:''
        };
    }
    componentDidMount(){
        this.setState({
            userTablelist:store.tableList,
            personInfo:store.userInfo
        });
    }
    render(){
        if(this.state.userTablelist.length > 0){
            return (
                <div>
                    <h3>用户表</h3>
                    <AddUser />
                    <table border="1" cellSpacing="0" cellPadding="0">
                        <thead><tr><td>序号</td><td>姓名</td><td>年龄</td></tr></thead>
                        <tbody>
                        {
                            this.state.userTablelist.map((item,index) =>
                                <tr key={index}>
                                    <td>{item.id}</td><td>{item.name}</td><td>{item.age}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <hr/>
                    <h3>个人信息</h3>
                    <ChangePerson />
                    <table border="1" cellSpacing="0" cellPadding="0">
                        <thead><tr><td>姓名</td><td>手机</td><td>地址</td></tr></thead>
                        <tbody>
                            <tr>
                                <td>{this.state.personInfo.userName}</td>
                                <td>{this.state.personInfo.mobile}</td>
                                <td>{this.state.personInfo.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return 'loading';
        }
    }
}

export default App;


