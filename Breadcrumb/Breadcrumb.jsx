import React from 'react';
import breadcrumb from './style/index.styl'

export default class Breadcrumb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            separator : null
        }
    }
    componentDidMount(){
        this.setState({
            separator:this.props.separator || '/'
        })
    }
    childrenMap = () => {
        return this.props.children.map(( item, key)=>{
            if(key === this.props.children.length-1){
                return <span key={key} className={breadcrumb.lastchild}>{item}</span>;
            }
            return <span key={key}>{item}<b>{this.state.separator}</b></span>;
        })
    }
    render(){
        return(
            <div className={breadcrumb.breadcrumb}>
                {Object.prototype.toString.call(this.props.children)==='[object Array]'?this.childrenMap():<span className={breadcrumb.lastchild}>{this.props.children}</span>}
            </div>
        );
    }
}