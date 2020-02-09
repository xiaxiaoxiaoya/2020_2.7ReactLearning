import React,{Component} from 'react';
import './button.css';

export default class Button extends Component{
    render(){
        console.log(this)
        return (
        <button {...this.props} className='button'></button>
        // <button className='button'>{this.props.children}</button>
        )
    }
}