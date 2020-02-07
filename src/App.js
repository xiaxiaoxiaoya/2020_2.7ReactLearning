import React,{Component} from 'react'


export default class App extends Component{

	render(){
		return (
			<div className="container">
				<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input type="text" placeholder="enter the name you search" />&nbsp;<button>Search</button>
				</div>
				</section>
				<div className="row">
					<div className="card">
						<a href="https://github.com/reactjs">
						<img src="https://avatars2.githubusercontent.com/u/59079335?s=40&v=4" style={{width:'100px'}} alt='headers'/>
						</a>
						<p className="card-text">reactjs</p>
					</div>
					<div className="card">
						<a href="https://github.com/reactjs">
						<img src="https://avatars2.githubusercontent.com/u/59079335?s=40&v=4" style={{width:'100px'}} alt='headers'/>
						</a>
						<p className="card-text">reactjs</p>
					</div>
					<div className="card">
						<a href="https://github.com/reactjs">
						<img src="https://avatars2.githubusercontent.com/u/59079335?s=40&v=4" style={{width:'100px'}} alt='headers'/>
						</a>
						<p className="card-text">reactjs</p>
					</div>
					<div className="card">
						<a href="https://github.com/reactjs">
						<img src="https://avatars2.githubusercontent.com/u/59079335?s=40&v=4" style={{width:'100px'}} alt='headers'/>
						</a>
						<p className="card-text">reactjs</p>
					</div>
					<div className="card">
						<a href="https://github.com/reactjs">
						<img src="https://avatars2.githubusercontent.com/u/59079335?s=40&v=4" style={{width:'100px'}} alt='headers'/>
						</a>
						<p className="card-text">reactjs</p>
					</div>
					<div className="card">
						<a href="https://github.com/reactjs">
						<img src="https://avatars2.githubusercontent.com/u/59079335?s=40&v=4" style={{width:'100px'}} alt='headers'/>
						</a>
						<p className="card-text">reactjs</p>
					</div>
				</div>
			</div>
		)
	}
}