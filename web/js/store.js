/*
 * 2018/5/23
 * administractor
 */
import {observable,action,computed,autorun} from 'mobx';
//observable，状态是被观察者
//action，动作

//不使用action
class User {
    @observable
    dataList = {list:[],len:null};
}
//使用action
class Company {
    @observable dataList = {list:[],len:null};
    @action.bound
    queryCompanyAction(name){
        if(name.length > 0){
            const arr = this.dataList.list;
            const newArr = [];
            for(let i=0;i<arr.length;i++){
                if(arr[i].name == name){
                    newArr.push(arr[i]);
                }
            }
            this.dataList.list = newArr;
            this.dataList.len = this.dataList.list.length;
        }
    }
    @action.bound
    addCompanyAction(o){
        this.dataList.list.push(o);
        this.dataList.len = this.dataList.list.length;
    }
    @action.bound
    deleteCompanyAction(number){
        this.dataList.list.splice(number,1);
        this.dataList.len = this.dataList.list.length;
    }
    @action.bound
    reLoadDataAction(){
        $.ajax({
            url:'./lib/company2.json',
            success:(res) => {
                this.dataList.list = res.list;
                this.dataList.len = res.list.length;
            }
        });
    }
}
export const user = new User();
export const company = new Company();
