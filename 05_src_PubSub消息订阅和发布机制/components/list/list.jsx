import React, { Component } from 'react';
import Item from '../item/item';
import PubSub from 'pubsub-js'

export default class List extends Component {
    //使用消息订阅和发布机制的方式进行组件通信
	state = {
		isFirst:true,//标识是否是第一次打开
		isLoading:false,//标识是否加载中
		error:'',//错误信息
		users:[]//所有用户信息
	}
    
    //使用生命周期方法进行挂载
    componentDidMount(){
        //在挂载里边可以1、开启定时器、2、发送网络请求、3、订阅消息
        PubSub.subscribe('atguigu',(msg,data)=>{
            //箭头函数中的msg不能删除
            this.setState(data)
        })
    }

    //重写父类继承render
    render() {
        
        const { users, error, isLoading, isFirst } = this.state;
        if (isFirst) {
            return <h2>输入关键词，点击搜索</h2>
        } else if (isLoading) {
            return <h2>Loading...</h2>
        } else if (error) {
            return <h2>{error}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((personObj) => {
                            //输入函数体
                            return <Item key={personObj.login} {...personObj} />
                        })
                    }
                </div>
            )
        }

    }
}
