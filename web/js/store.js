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
    dataList = {list:''};
    @action
    addUser = (data) => {
        this.dataList.list.unshift(data);//向数组开头添加一组数据
    };
    @action
    delUser = (number) => {
        this.dataList.list.splice(number,1);//删除下标为number的一条数据
    }
}
//示例二
export class Company{
    @observable
    dataList = {list:''};
    @action
    queryCompany = (arr) => {
        //console.log(JSON.stringify(id));
        //for(let i=0;i<this.dataList.list.length;i++){
        //    if(this.dataList.list[i].id == id){
        //        this.dataList.list.splice(i,1);
        //    }
        //}
        console.log(JSON.stringify(arr));
    }
}
