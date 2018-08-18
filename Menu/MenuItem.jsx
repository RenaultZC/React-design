import React from 'react';
import menuItem from './style/index.styl'

export default class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        console.log(this.props)
        return(
            <p className={this.props.disabled?menuItem.disabled:''}>{this.props.children}</p>
        )
    }
}