/*
 * 2018/5/23
 * administractor
 */
import {observable,computed,action} from 'mobx';
//observable，状态是被观察者
//action，暴露给组件监听的action
//示例一
export class User {
    @observable
    dataList = {list:[]};
}
//示例二
export class Company{
    @observable
    dataList = {list:[]};
}
