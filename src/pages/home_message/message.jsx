import React, { Component } from 'react';
import Details from '../message_details/message_details';
import {Route,NavLink} from 'react-router-dom';

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
                { id: '001', title: '歌曲1' },
                { id: '002', title: '歌曲2' },
                { id: '003', title: '歌曲3' },
                { id: '004', title: '歌曲4' },
            ]
          })
        },1000)
    }
    
    // 重写继承父类render
    render() {
        // console.log(this.state.message)//返回的数组中的模拟数据
        return (
            <div>
                <ul>

                    {
                        this.state.message.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 下边注释的这样直接写/1是死数据 */}
                                    {/* <NavLink to='/home/message/details/1' activeClassName='msgActive'>{msgObj.title}</NavLink>&nbsp;&nbsp; */}
                                    {/* 通过上边模拟的数据得到每条消息唯一的id */}
                                    <NavLink to={`/home/message/details/${msgObj.id}`} activeClassName='msgActive'>{msgObj.title}</NavLink>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path='/home/message/details/:id' component={Details} />
            </div>
        )
    }
}