import React, { Component } from 'react';

export default class Message extends Component {
    //添加state属性，进行动态数据初始化
    state = {
        message: []
    }
    //模拟网络请求
    componentDidMount(){
        setTimeout(()=>{
          //输入函数体
          this.setState({
            message: [
                { id: '001', title: '消息1' },
                { id: '002', title: '消息2' },
                { id: '003', title: '消息3' },
                { id: '004', title: '消息4' },
            ]
          })
        },1000)
    }
    // 重写继承父类render
    render() {
        console.log(this.state.message)//返回的数组中的模拟数据
        return (
            <div>
                <ul>

                    {
                        this.state.message.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    <a>{msgObj.title}</a>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}