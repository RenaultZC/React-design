import React from 'react';
import input from './style/index.styl';
import classnames from 'classnames';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputClass: null
        }
        this.defaultClass = {
            [input.default]:true
        }
    }
    componentDidMount(){
        Object.keys(this.props).forEach((key)=>{
            if(input[this.props[key]]){
                if(typeof this.props[key] === 'string' && key !== 'string'){
                    this.defaultClass[input[this.props[key]]] = true;
                }else if(typeof this.props[key] === 'boolean'){
                    this.defaultclass[input[key]] = input[key]?this.props[key]:false;
                }
            }
       });
        this.setState({
            inputClass:classnames(this.defaultClass)
        })
    }
    onPressEnter=(event)=>{
        console.log(event)
    }
    render(){
        return(
            <input className={this.state.inputClass} placeholder={this.props.placeholder} defaultValue={this.props.string} type='text' onKeyDown={this.onPressEnter}/>
        );
    }
}