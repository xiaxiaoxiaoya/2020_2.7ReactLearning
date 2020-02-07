import React, { Component } from 'react';
import axios from 'axios';
export default class Search extends Component {
    //写button的点击事件
    search = () => {
        //1、获取用户输入
        const { value } = this.refs.keyword;
        console.log(value)
        //3、校验输入框不能为空
        if (!value) {
            alert('内容不能为空')
        }
        //2、发送请求之前，展示loading状态
        this.props.updateAppState({
            isFirst:false,
            isLoading:true
        })
        
        //4、发送请求 根据返回的数据更新状态
        /* 但更新状态，在这个组件里是无法直接更新App的组件的状态 的，因此需要在App.js中进行更新状态 */
        axios.get('https://api.githubb.com/search/users', { params: { q: value } }).then(
            (response) => {
                //更新成功的状态
                this.props.updateAppState({
                    isLoading: false,
                    users: response.data.items
                })
                // console.log(response.data.items)
            },
            (error) => {
                //更新失败的状态
                this.props.updateAppState({
                    isLoading: false,
                    error:error.message
                })
            }
        )
        //5、提交之后，清空输入框
        this.refs.keyword.value='';
    }
    //重写render父类继承
    render() {
        return (
            <div>
                <input type="text" ref='keyword' placeholder="enter the name you search" />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}