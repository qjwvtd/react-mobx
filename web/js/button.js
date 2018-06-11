/*
 * 2018/6/11
 * administractor
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {user,company} from './app';


export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    showUserInfo(){
        let userDom = this.refs.showUser;
        userDom.innerHTML = '';
        userDom.innerHTML = JSON.stringify(user);
    }
    showCompanyInfo(){
        let companyDom = this.refs.showCompany;
        companyDom.innerHTML = '';
        companyDom.innerHTML = JSON.stringify(company);
    }
    render(){
        return (
            [
                <button key="showUserBtn" type="button" onClick={this.showUserInfo.bind(this)}>click me,showUserInfo</button>,
                <div key="userinfo" style={{width:'360px'}} ref="showUser">{JSON.stringify(user)}</div>,
                <button key="showUserBtn" type="button" onClick={this.showCompanyInfo.bind(this)}>click me,showCompanyInfo</button>,
                <div key="userinfo" style={{width:'360px'}} ref="showCompany">{JSON.stringify(company)}</div>
            ]
        );
    }
}
