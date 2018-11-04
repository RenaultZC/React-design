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
       if(this.props.prefix){
           this.defaultClass[input.wrapper] = true;
       }
        this.setState({
            inputClass:classnames(this.defaultClass)
        })
        this.prefix = this.props.prefix ? <span className={['fa',this.props.prefix,input.prefix].join(' ')}></span> : null;
        this.width = this.props.style ? this.props.style.width : null;
    }
    onPressEnter=(event)=>{
        if(event.keyCode === 13){ 
            if(typeof this.props.handle === 'function'){
                this.props.handle();
            }
        }
    }
    render(){
        return(
            <span className={input.bg} style={{width:this.width}}>
                {this.prefix}
                <input className={this.state.inputClass} placeholder={this.props.placeholder} defaultValue={this.props.string} style={this.props.style} type='text' onKeyDown={this.onPressEnter}/>
            </span>
        );
    }
}