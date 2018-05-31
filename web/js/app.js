import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {User,Company} from './store';

const user = new User();
const company = new Company();

class PlayUser extends Component{
    queryUser(){
        const uName = this.refs.userName.value.replace(/\s/g,"");
        if(uName.length > 0){
            const arr = user.dataList.list;
            const newArr = [];
            for(let i=0;i<arr.length;i++){
                if(arr[i].name == uName){
                    newArr.push(arr[i]);
                }
            }
            user.dataList.list = newArr;
            user.dataList.len = user.dataList.list.length;
        }
    }
    addUser(){
        const userInfo = {"id": null,"name": "GuoYu","age": "18岁","mobile":15895623495,"address":"西航港双华路168号1栋"};
        user.dataList.list.push(userInfo);
        user.dataList.len = user.dataList.list.length;
    }
    delUser(){
        user.dataList.list.splice(0,1);
        user.dataList.len = user.dataList.list.length;
    }
    reGetData(){
        $.ajax({
            url:'./lib/user2.json',
            success:(res) => {
                user.dataList.list = res.list;
                user.dataList.len = res.list.length;
            }
        });
    }
    render(){
        return (
            <div style={{padding:'5px'}}>
                <input type="text" ref="userName" placeholder="输入用户名查询" />&nbsp;
                <button type="button" onClick={this.queryUser.bind(this)}>查询</button>&nbsp;
                <button type="button" onClick={this.addUser.bind(this)}>新增</button>&nbsp;
                <button type="button" onClick={this.delUser.bind(this)}>删除第一条</button>&nbsp;
                <button type="button" onClick={this.reGetData.bind(this)}>获取新数据</button>
            </div>
        );
    }
}
class PlayCompany extends Component{
    queryCompany(){
        const uName = this.refs.userName.value.replace(/\s/g,"");
        company.queryCompanyAction(uName);
    }
    addCompany(){
        const companyInfo = {"id": Math.random()*100,"name": "脸书中国","ceo": "扎克伯格","website":"http://www.lianpula.net/","city":"北京"};
        company.addCompanyAction(companyInfo);
    }
    deleteCompany(){
        company.deleteCompanyAction(0);
    }
    reLoadData(){
        company.reLoadDataAction();
    }
    render(){
        return (
            <div style={{padding:'5px'}}>
                <input type="text" ref="userName" placeholder="输入公司名查询" />&nbsp;
                <button type="button" onClick={this.queryCompany.bind(this)}>查询</button>&nbsp;
                <button type="button" onClick={this.addCompany.bind(this)}>新增</button>&nbsp;
                <button type="button" onClick={this.deleteCompany.bind(this)}>删除第一条</button>&nbsp;
                <button type="button" onClick={this.reLoadData.bind(this)}>获取新数据</button>
            </div>
        );
    }
}
//被改变状态的组件是观察者，observer
@observer
class UserTable extends Component{
    componentDidMount(){
        $.ajax({
            url:'./lib/user.json',
            success:(res) => {
                //异步获取的数据要传给状态管理容器
                user.dataList.list = res.list;
                user.dataList.len = res.list.length;
            }
        });
    }
    render(){
        if(user.dataList.list.length > 0){
            return (
                <div>
                    <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                        <thead><tr><td>姓名</td><td>年龄</td><td>手机</td><td>地址</td></tr></thead>
                        <tbody>
                        {
                            user.dataList.list.map((item,index) => {
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
                    <p style={{padding:'5px',textAlign:'center'}}>有{user.dataList.len}条数据</p>
                </div>
            );
        }else{
            return 'loading...';
        }
    }
}
//被改变状态的组件是观察者，observer
@observer
class CompanyTable extends Component{
    componentDidMount(){
        $.ajax({
            url:'./lib/company.json',
            success:(res) => {
                //异步获取的数据要传给状态管理容器
                company.dataList.list = res.list;
                company.dataList.len = res.list.length;
            }
        });
    }
    render(){
        if(company.dataList.list.length > 0){
            return (
                <div>
                    <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                        <thead><tr><td>公司名称</td><td>CEO</td><td>网址</td><td>所在地</td></tr></thead>
                        <tbody>
                        {
                            company.dataList.list.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.ceo}</td>
                                        <td>{item.website}</td>
                                        <td>{item.city}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                    <p style={{padding:'5px',textAlign:'center'}}>有{company.dataList.len}条数据</p>
                </div>
            );
        }else{
            return 'loading...';
        }
    }
}

class App extends Component{
    render(){
        return [
            <div key="line1" style={{padding:'5px',textAlign:'center',color:'orange'}}>不使用action</div>,
            <PlayUser key="playuser" />,
            <UserTable key="userTable" />,
            <hr key="hr1" />,
            <div key="line2" style={{textAlign:'center'}}>华丽的分界线</div>,
            <hr key="hr2" />,
            <div key="line3" style={{padding:'5px',textAlign:'center',color:'orange'}}>使用action</div>,
            <PlayCompany key="playcompany" />,
            <CompanyTable key="companyTable" />
        ];
    }
}
export default App;


