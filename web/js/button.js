/*
 * 2018/6/11
 * administractor
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {user,company} from './store';


export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:'',
            companyInfo:''
        };
    }
    addUser(){
        const userInfo = {"id": null,"name": "GuoYu","age": "18岁","mobile":15895623495,"address":"西航港双华路168号1栋"};
        user.dataList.list.push(userInfo);
        user.dataList.len = user.dataList.list.length;
    }
    addCompany(){
        const companyInfo = {"id": Math.random()*100,"name": "脸书中国","ceo": "扎克伯格","website":"http://www.lianpula.net/","city":"北京"};
        company.addCompanyAction(companyInfo);
    }
    clearAll(){
        user.dataList.list = [];
        company.dataList.list = [];
    }
    render(){
        return (
            [
                <button key="addUser" type="button" onClick={this.addUser.bind(this)}>click me,添加一个用户</button>,
                <button key="addCompany" type="button" onClick={this.addCompany.bind(this)}>click me,添加一个公司</button>,
                <button key="clear" type="button" onClick={this.clearAll.bind(this)}>click me,清除所有</button>
            ]
        );
    }
}
