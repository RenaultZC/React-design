import React from 'react';

export default class BreadcrumbItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <span>{this.props.children}</span>
        )
    }
};