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
        this.state = {
            userInfo:'',
            companyInfo:''
        };
    }
    showUserInfo(){
        this.setState({
            userInfo:user
        });
    }
    showCompanyInfo(){
        this.setState({
            companyInfo:company
        });
    }
    clearAll(){
        user.dataList.list = [];
        company.dataList.list = [];
    }
    render(){
        return (
            [
                <button key="showUserBtn" type="button" onClick={this.showUserInfo.bind(this)}>click me,showUserInfo</button>,
                <div key="userinfo" style={{width:'360px'}}>{JSON.stringify(this.state.userInfo)}</div>,
                <button key="showCompanyBtn" type="button" onClick={this.showCompanyInfo.bind(this)}>click me,showCompanyInfo</button>,
                <div key="companyfo" style={{width:'360px'}}>{JSON.stringify(this.state.companyInfo)}</div>,
                <button key="clear" type="button" onClick={this.clearAll.bind(this)}>click me,clearAll</button>
            ]
        );
    }
}
