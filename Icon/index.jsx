import React from 'react';


export default class Icon extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <span className={'fa '+this.props.classname}></span>
        );
    }
}