import React from 'react';
import radioGroup from './style/index.styl';
import PropTypes from 'prop-types';
import Radio from './Radio';
import RadioButton from './RadioButton';

export default class RadioGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    static propTypes = {
        name:PropTypes.string,
        handle:PropTypes.func
    };
    render(){
        let name = this.props.name ? this.props.name : 'radio'+Math.floor(10000*Math.random());
        return(
            <div className={radioGroup.radioGroup}>
                {this.props.children.map((index,key)=>{
                    if(index.type.name === 'Radio'){
                        return <Radio
                            key={key}
                            name={name}
                            handle={this.props.handle}
                            value={index.props.value}
                            disabled={index.props.disabled}
                            defaultChecked={index.props.defaultChecked}
                        >{index.props.children}</Radio>
                    }else if(index.type.name === 'RadioButton'){
                        return <RadioButton
                            key={key}
                            name={name}
                            handle={this.props.handle}
                            value={index.props.value}
                            first={key === 0 ? true : false}
                            last={key === this.props.children.length - 1 ? true : false}
                            disabled={index.props.disabled}
                            defaultChecked={index.props.defaultChecked}
                        >{index.props.children}</RadioButton>
                    }
                    return null;
                })}
            </div>
        )
    }
}