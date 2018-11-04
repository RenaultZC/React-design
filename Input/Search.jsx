import React from 'react';
import input from './style/index.styl';
import classnames from 'classnames';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className:null
        }
        this.defaultClass = {
            [input.default]:true,
            [input.search]:true
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
            className:classnames(this.defaultClass)
        })
    }
    inpputFoucs = ()=>{
        this.input.focus();
        if(typeof this.props.handle === 'function'){
            this.props.handle();
        }
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
            <span className={input.bg}>
                <input type='text' className={this.state.className} ref={node=>this.input=node} placeholder={this.props.placeholder} defaultValue={this.props.string} onKeyDown={this.onPressEnter}/>
                <span className={['fa','fa-search',input.icon].join(' ')} onClick={this.inpputFoucs}></span>
            </span>
        )
    }
}