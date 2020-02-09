import React, { Component } from 'react';

export default class Details extends Component {
    //模拟数据
    state = {
        data:[
            {id:'001',title:'歌曲1',content:'《爱啦啦》'},
			{id:'002',title:'歌曲2',content:'《山外小楼夜听雨》'},
			{id:'003',title:'歌曲3',content:'《I Really Like You》'},
			{id:'004',title:'歌曲4',content:'《齐天》！'},
        ]
    }
    //重写render
    render() {
        //通过路由组件三大属性中的match属性中的params拿到在message页面所点击信息的地址栏中的参数
        // console.log(this)
        const {id} = this.props.match.params;//通过解构赋值拿到地址栏中的id
        // console.log(id)

        //通过find()方法：找出第一个满足条件返回true的那条数据
        const result = this.state.data.find((item)=>{
          //输入函数体
          return item.id === id
        })
        console.log(result)
        return (
            <ul>
                <li>ID:{result.id}</li>
                <li>Title:{result.title}</li>
                <li>Content:{result.content}</li>
            </ul>
        )
    }
}