import React from 'react';
import radioButton from './style/index.styl';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class RadioButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            className:null,
            labelClassName:null
        };
        this.defaultClass={
            [radioButton.radioButton]:true
        };
        this.labelButton={
            [radioButton.labelButton]:true
        }
    }
    static propTypes={
        defaultChecked: PropTypes.bool,
        value: PropTypes.string,
        handle:PropTypes.func,
        disabled:PropTypes.bool,
        name:PropTypes.string,
        first:PropTypes.bool,
        last:PropTypes.bool,
    };
    componentDidMount(){
        this.setState({
            className:classnames(this.defaultClass),
            labelClassName:classnames(this.labelButton)
        })
    }
    render(){
        return (
            <label className={this.state.labelClassName}>
                <input name={this.props.name} type="radio" defaultValue={this.props.value} className={this.state.className} onChange={this.props.handle} defaultChecked={this.props.defaultChecked}/>
                <span className={radioButton.radioBox}>{this.props.children}</span>
            </label>
        )
    }
}