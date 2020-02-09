import React,{Component} from 'react';
import Button from './components/button/button';


export default class App extends Component{	
	render(){
		return (
			<div>
				<h2>App</h2>
				<Button a='1'>这是我封装的第一个Button组件</Button>
			</div>
		)
	}
}