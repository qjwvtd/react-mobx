/*
 * 2018/5/23
 * administractor
 */
import {observable} from 'mobx';
//必须提供store容器
export default class Store {
    //observable，状态是被观察者
    @observable tableList = [
        {"id": 1,"name": "Pety","age": "10岁"},
        {"id": 2,"name": "Andy","age": "12岁"},
        {"id": 3,"name": "HanMeimei","age": "11岁"},
        {"id": 4,"name": "LiLei","age": "15岁"}
    ];
    @observable userInfo = {"userName": 'qjwvtd',"mobile": 18828055416,"address": "成都双流区西航港大道"};
}