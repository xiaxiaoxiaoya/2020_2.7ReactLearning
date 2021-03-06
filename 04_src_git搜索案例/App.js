import React,{Component} from 'react';
import Search from './components/search/search';
import List from './components/list/list'


export default class App extends Component{
	//在App外壳中设置state初始化
	state = {
		isFirst:true,//标识是否是第一次打开
		isLoading:false,//标识是否加载中
		error:'',//错误信息
		users:[]//所有用户信息
	}
	//状态在哪儿，更新状态的行为就在哪儿 
	updateAppState = (obj)=>{
	  //输入函数体
	  this.setState(obj);
	}
	
	render(){
		return (
			<div className="container">
				<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<Search updateAppState = {this.updateAppState}/>
				</section>
				<List {...this.state}/>
			</div>
		)
	}
}