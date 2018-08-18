import React from 'react';
import button from './style/index.styl'
import Icon from '../Icon'
import classnames from 'classnames'

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className : ''
        }
        this.btn = true;
        this.defaultClassName = {
            [button.btn]:true
        }
    }
    componentDidMount = ()=>{
        Object.keys(this.props).forEach((key)=>{
            if(button[this.props[key]]){
                if(typeof this.props[key] === 'string' && key !== 'string'){
                    this.defaultClass[button[this.props[key]]] = true;
                }else if(typeof this.props[key] === 'boolean'){
                    this.defaultclass[button[key]] = button[key]?this.props[key]:false;
                }
            }
       });
       if(this.props.disabled){
           this.btn = false;
       }
        this.setState({
            className:classnames(this.defaultClassName)
        })
    }
    btnClick = ()=>{
        if(this.btn){
            this.btn = false;
            this.setState({
                className:classnames(Object.assign({},this.defaultClassName,{[button.btnClick]:true}))
            },()=>{
                setTimeout(() => {
                    this.setState({
                        className:classnames(this.defaultClassName)
                    })
                    this.btn = true;
                }, 600);
            })
        }
        if(typeof this.props.handle === 'function'){
            this.props.handle();
        }
    }
    render(){
        return(
            <button className={this.state.className} onClick={this.btnClick}>{this.props.loading?<Icon classname="fa-circle-o-notch fa-spin"></Icon>:null}{this.props.icon?<Icon classname={this.props.icon}></Icon>:null}{this.props.string}</button>
        );
    }
}