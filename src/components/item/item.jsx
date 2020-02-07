import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {
    //重写父类render
    render() {
        const { login, avatar_url, html_url } = this.props;
        // console.log(this)
        return (
            <div className="card">
                <a href={html_url}>
                    <img src={avatar_url} style={{ width: '100px' }} alt='headers' />
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}