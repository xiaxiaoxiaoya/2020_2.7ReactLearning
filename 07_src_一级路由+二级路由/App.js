import React,{Component} from 'react';
import Home from './pages/home/home';
import About from './pages/about/about';
import Demo from './components/demo/demo'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom';


export default class App extends Component{
	
	render(){
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
						<Demo />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<NavLink className='list-group-item' to="/about">About</NavLink>
							<NavLink className='list-group-item' to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									{/* 默认高亮 */}
									<Redirect to="/about" />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}