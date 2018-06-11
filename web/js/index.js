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
        <Button key="btn" />
    ],

    document.getElementById('root')
);