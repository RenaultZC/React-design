import React from 'react';

export default class Affix extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
        this.Aff = null;
        this.AffTop = null;
        this.targetTop = null;
        this.top = null;
        this.run = false;
    }
    componentDidMount(){
        window.addEventListener('scroll',this.scroll.bind(this));
        this.top = this.props.offsetTop || 0;
    }
    scroll(event){
        this.scTop = this.AffTop - this.getTargetTop();
        if(this.scTop <= this.top){
            this.Aff.style.cssText = `position:fixed;top:${this.top}px;`;
            if(typeof this.props.handle === 'function' && this.run === false){
                this.props.handle();
                this.run = true;
            }
        }else{
            this.Aff.style.cssText = null;
            if(typeof this.props.handle === 'function' && this.run){
                this.props.handle();
                this.run = false;
            }
        }
    }
    getTargetTop(){
        return document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    }
    render(){
        return(
            <div ref={node => {this.AffTop = node.offsetTop; this.Aff = node}}>{this.props.children}</div>
        );
    }
}