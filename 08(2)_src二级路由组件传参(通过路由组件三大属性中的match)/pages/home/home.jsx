import React, { Component } from 'react';
import Message from '../home_message/message'
import News from '../home_news/news'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item" to='/home/news'>News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item" to='/home/message'>Message</NavLink>
                        </li>
                    </ul>

                </div>
               {/* 注册路由 */}
               <Switch>
                 <Route path='/home/news' component={News} />
                 <Route path='/home/message' component={Message} />
                 <Redirect to='/home/message' />
               </Switch>
            </div>

        )
    }
}