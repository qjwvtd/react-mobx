/*
 * 2018/5/23
 * administractor
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Button from './button';



ReactDOM.render(
    [
        <App key="main" />,
        <hr key="hr1"/>,
        <p key="p">以上是组件在同一个JS文件的引用，下面是在不同JS文件下的操作</p>,
        <hr key="hr2"/>,
        <Button key="btn" />
    ],

    document.getElementById('root')
);