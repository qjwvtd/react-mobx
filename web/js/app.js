import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {User,Company} from './store';

const user = new User();
const company = new Company();
class PlayUser extends Component{
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
class QueryCompany extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    findCompany(){
        //const cName = this.refs.companyName.value.replace(/\s+/g,"");
        //if(cName.length > 0){
        //    let arr = company.dataList.list;
        //    let newArr = [];
        //    for(let i=0;i<arr.length;i++){
        //        if(arr[i].name == cName){
        //            //arr[i].id = Math.random()*100;
        //            //arr[i].name = '旸谷科技';
        //            //arr[i].ceo = 'xiaojun';
        //            //arr[i].link = 'www.cdsunrise.net';
        //            //arr[i].address = '成都';
        //            newArr.push(arr[i]);
        //        }
        //    }
        //    //company.queryCompany(newArr);
        //    //company.dataList.list = newArr;
        //}

        //分界线
        for(let i=0;i<company.dataList.list.length;i++){
            company.dataList.list.splice(i,company.dataList.list.length);
        }
        const newArr = {
            "id": 2,
            "name": "旸谷科技",
            "ceo": "xiaojun",
            "link": "http://www.cdsunrise.net/",
            "address": "成都"
        };
        company.dataList.list.push(newArr);
    }
    render(){
        return (
            <div>
                <input type="text" ref="companyName" placeholder="输入企业名称查询" />
                <button type="button" onClick={this.findCompany.bind(this)}>查询</button>&nbsp;
            </div>
        );
    }
}
// 被改变状态的组件是观察者，observer
@observer
class UserTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:''
        };
    }
    componentDidMount(){
        $.ajax({
            url:'./lib/user.json',
            success:(res) => {
                //异步获取的数据如果要做状态管理,一定要把获取的数据先传给状态管理容器,再把自身状态绑定到容器里
                user.dataList.list = res.data;
                this.setState({
                    list:user.dataList.list
                });

            }
        });
    }
    render(){
        if(this.state.list.length > 0){
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
        }else{
            return 'loading...';
        }
    }
}

@observer
class CompanyTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:''
        }
    }
    componentDidMount(){
        $.ajax({
            url:'./lib/company.json',
            method:'GET',
            dataType:'JSON',
            success:(data) => {
                //异步获取的数据如果要做状态管理,一定要把获取的数据先传给状态管理容器,再把自身状态绑定到容器里
                company.dataList.list = data.list;
                this.setState({
                    list:company.dataList.list
                });
            }
        });
    }
    render(){
        if(this.state.list.length > 0){
            return (
                <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                    <thead><tr><td>序号</td><td>公司名称</td><td>CEO</td><td>公司官网</td><td>所在地</td></tr></thead>
                    <tbody>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.ceo}</td>
                                    <td>{item.link}</td>
                                    <td>{item.address}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            );
        }else{
            return 'loading...';
        }
    }
}


class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return [
            <PlayUser key="addUser" />,
            <UserTable key="userTable" users={user} />,
            <p key="华丽的分界线1" style={{background:'green',textAlign:'center',color:'#fff'}}>华丽的分界线</p>,
            <QueryCompany key="queryCompany" />,
            <CompanyTable key="CompanyTable" companys={company} />
        ];
    }
}
export default App;


