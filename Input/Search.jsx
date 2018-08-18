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
            [input.default]:true
        }
    }
    componentDidMount(){
        this.setState({
            className:classnames(this.defaultClass)
        })
    }
    render(){
        return(
            <input className={this.state.className}/>
        )
    }
}