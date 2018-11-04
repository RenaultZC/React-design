import React from 'react';
import switchs from './style/index.styl'
import classnames from 'classnames'
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className:'',
            font:''
        };
        this.defaultClassName = {
            [switchs.btn]:true,
            [switchs.btnChecked]:false
        };
        this.defaultFont = {
            [switchs.font]:true
        };
        this.btn = true;
    }
    static propTypes = {
        defaultChecked: PropTypes.bool,
        checkedChildren: PropTypes.string,
        handle:PropTypes.func,
        unCheckedChildren:PropTypes.string,
        disabled:PropTypes.bool,
        className:PropTypes.string
    };
    componentDidMount = ()=>{
        if(this.props.disabled){
            this.btn = false;
        }
        this.defaultClassName[switchs.disabled] = this.props.disabled && true;
        this.defaultClassName[switchs.btnChecked] = this.props.defaultChecked && true;
        this.defaultClassName[switchs.disabledChecked] = this.props.defaultChecked && this.props.disabled;
        this.defaultClassName[switchs.small] = this.props.size === 'small';
        if(this.props.className){
            this.defaultClassName[this.props.className] = true;
        }
        this.defaultFont[switchs.fontChecked] = this.props.defaultChecked && true;
        this.setState({
            className:classnames(this.defaultClassName),
            font:classnames(this.defaultFont)
        });
    };
    btnClick = (el)=>{
        if(this.btn){
            this.btn = false;
            this.defaultClassName[switchs.btnChecked] = !this.defaultClassName[switchs.btnChecked];
            this.defaultFont[switchs.fontChecked] = !this.defaultFont[switchs.fontChecked];
            this.setState({
                className:classnames(Object.assign({},this.defaultClassName,{[switchs.btnClick]:true})),
                font:classnames(this.defaultFont)
            },()=>{
                setTimeout(() => {
                    this.setState({
                        className:classnames(this.defaultClassName)
                    });
                    this.btn = true;
                }, 300);
            });
            if(typeof this.props.handle === 'function'){
                this.props.handle(el);
            }
        }
    };
    render(){
        return (
            <button className={this.state.className} onClick={this.btnClick}>
                <span className={this.state.font}>{this.defaultClassName[switchs.btnChecked] ? this.props.checkedChildren : this.props.unCheckedChildren}</span>
            </button>
        )
    }
}