import React from 'react';
import menu from './style/index.styl'

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.type = true;
    }
    listDisplay = ()=>{
        if(this.type){
            this.list.style.display = 'block';
            this.triangle.className += (' '+menu.clickTriangle);
            this.type = false;
        }else{
            this.list.style.display = 'none';
            this.triangle.className = this.triangle.className.split(' ').slice(0,-1).join(' ');
            this.type = true;
        }
        if(typeof this.props.handle === 'function'){
            this.props.handle();
        }
    }
    render(){
        return(
            <div>
                {
                    this.props.type === 'hover'?
                    <div onMouseOver={this.listDisplay} onMouseOut={this.listDisplay} className={menu.box}>
                        <a className={menu.menu}>{this.props.title} <span className={[menu.triangle].join(' ')} ref={node => this.triangle = node}></span></a>
                        <div className={menu.list} ref={node => this.list = node}>{this.props.children}</div>
                    </div>
                    :
                    <div onClick={this.listDisplay} className={menu.box}>
                        <a className={menu.menu}>{this.props.title} <span className={[menu.triangle].join(' ')} ref={node => this.triangle = node}></span></a>
                        <div className={menu.list} ref={node => this.list = node}>{this.props.children}</div>
                    </div>
                }
            </div>
        )
    }
}