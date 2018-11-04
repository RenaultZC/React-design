import React from 'react';
import radio from './style/index.styl';
import classnames from 'classnames';
import PropTypes from 'prop-types'

export default class Radio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            className:null,
            lly:false
        };
        this.defaultClass={
            [radio.radio]:true
        };
    }
    static propTypes = {
        defaultChecked: PropTypes.bool,
        value: PropTypes.string,
        handle:PropTypes.func,
        disabled:PropTypes.bool,
        name:PropTypes.string
    };
    componentDidMount(){
        Object.keys(this.props).forEach((key)=>{
            if(typeof this.props[key] === 'string' && key !== 'string' && radio[this.props[key]]){
                this.defaultClass[radio[this.props[key]]] = true;
            }else if(typeof this.props[key] === 'boolean'){
                this.defaultClass[radio[key]] = radio[key]?this.props[key]:false;
            }
       });
        this.setState({
            className:classnames(this.defaultClass)
        });
    }
    render(){
        return(
            <label className={radio.label+(this.props.disabled?' '+radio.disabled:'')} >
                <input
                    ref={node=>this.radio=node}
                    type='radio'
                    name={this.props.name}
                    className={this.state.className}
                    defaultChecked={this.props.defaultChecked}
                    onChange={this.props.handle}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onClick={()=>{this.setState({
                        lly:!this.state.lly
                    },()=>{console.log(this.state.lly)})}}
                />
                <span className={radio.radioText}>{this.props.children}</span>
            </label>
        )
    }
}