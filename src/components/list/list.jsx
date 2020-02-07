import React, { Component } from 'react';
import Item from '../item/item';

export default class List extends Component {
    //重写父类继承render
    render() {
        //接收App传过来的users
        const { users, error, isLoading, isFirst } = this.props;
        if (isFirst) {
            return <h2>输入关键词，点击搜索</h2>
        } else if (isLoading) {
            return <h2>Loading...</h2>
        } else if (error) {
            return <h2>{error}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((personObj) => {
                            //输入函数体
                            return <Item key={personObj.login} {...personObj} />
                        })
                    }
                </div>
            )
        }

    }
}
