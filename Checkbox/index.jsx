import React from 'react';
import checkbox from './style/index.styl'
import classnames from 'classnames'

export default class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            iconClass:''
        }
        this.icon = null;
        this.iconClick = true;
        this.defaultclassName = {
            [checkbox.icon]:true,
            fa:true,
            'fa-check':true
        }
    }
    componentDidMount(){
        Object.keys(this.props).forEach((key)=>{
            if(checkbox[this.props[key]]){
                if(typeof this.props[key] === 'string' && key !== 'string'){
                    this.defaultClass[checkbox[this.props[key]]] = true;
                }else if(typeof this.props[key] === 'boolean'){
                    this.defaultclass[checkbox[key]] = checkbox[key]?this.props[key]:false;
                }
            }
       });
        if(this.props.default){
            this.defaultclassName[checkbox.checkClick] = true;
            this.iconClick = false;
        }
        this.setState({
            iconClass:classnames(this.defaultclassName)
        })
    }
    checkClick = ()=>{
        if(!this.props.disabled){
            if(this.iconClick){
                this.iconClick = false;
                this.icon.className += (' '+checkbox.checkClick);
            }else{
                this.icon.className = this.icon.className.split(' ').slice(0,-1).join(' ');
                this.iconClick = true;
            }
            if(typeof this.props.handle === 'function'){
                this.props.handle();
            }
        }
    }
    render(){
        return (
            <label className={[checkbox.label,this.props.disabled?checkbox.labeldis:''].join(' ')}>
                <span className={this.state.iconClass} ref={node => this.icon = node}>
                    <input type="checkbox" className={checkbox.checkBox} value="" onClick={this.checkClick}/>
                </span>
                {this.props.string && this.props.string.length?<span style={{margin:'0 8px'}}>{this.props.string}</span>:''}
            </label>
        );
    }
}