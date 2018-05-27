/*
 * 2018/5/23
 * administractor
 */
import {observable,action} from 'mobx';
//observable，状态是被观察者
//action，暴露给组件监听的action

//示例一(首先在容器中初始化state)
export class User {
    @observable
    userTable = {
        list:[
            {"id": 1,"name": "Pety","age": "10岁","mobile":13552653265,"address":"西航港双华路168号5栋"},
            {"id": 2,"name": "Andy","age": "12岁","mobile":15826598652,"address":"西航港双华路168号11栋"},
            {"id": 3,"name": "HanMeimei","age": "11岁","mobile":13584652697,"address":"西航港双华路168号3栋"},
            {"id": 4,"name": "LiLei","age": "15岁","mobile":18825649857,"address":"西航港双华路168号9栋"}
        ]
    };
    @action
    addUser = (data) => {
        this.userTable.list.unshift(data);//向数组开头添加一组数据
    };
    @action
    delUser = (number) => {
        this.userTable.list.splice(number,1);//删除下标为number的一条数据
    }
}
//示例二(异步获取的数据作状态管理)
export class PackageJson{
    @observable
    demoJson = '';
    @action
    changeVersion = (val) => {
        this.demoJson.version = val;
    }
    @action
    changeDescription = (val) => {
        this.demoJson.description = val;
    }
}
