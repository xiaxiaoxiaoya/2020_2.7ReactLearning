import React,{Component} from 'react';
import {Button,Input, message} from 'antd';
// import 'antd/dist/antd.css'


export default class App extends Component{	
	show = ()=>{
	  //输入函数体
	  message.success('操作成功')
	//   message.error('操作成功')
	//   message.warning('操作成功')
	}
	render(){
		return (
			<div>
				<h2>App</h2>
				{/* <Button href='http://www.baidu.com' type='primary '>点击</Button> */}
				<Button onClick={this.show} type='primary'>点击</Button>
				<Button type='danger '>点击</Button>
				<Input style={{width:'100px'}}></Input>
			</div>
		)
	}
}