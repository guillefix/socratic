import React, { Component } from 'react';

export class B1 extends Component {
  constructor() {
    super();
    this.state = {exp_visible: false}
  }
  handleClick(e) {
    this.setState({exp_visible:!this.state.exp_visible})
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) this.setState({exp_visible:false})
  }
  render() {
    const {props, state} = this;
    console.log("hi", state.exp_visible);
    // console.log((props.children.filter) ? props.children.filter(n=>n.type==="exp") : "");
    const exps = (props.children.filter) ? props.children.filter(n=>n.type==="exp") : ""
    const content = (props.children.filter) ? props.children.filter(n=>n.type!=="exp") : props.children
    return (
    <div {...props} className={(props.isB2 ? "speech-bubble2 " : "speech-bubble1 ")+props.className}>
      <div onClick={this.handleClick.bind(this)}>{content}</div>
      {/*<div onClick={this.handleClick.bind(this)}>{props.children.slice(0,1)}</div>*/}
      <div className="ackshually" style={{color: "#606060", display: state.exp_visible ? "block" : "none"}}>{exps}</div>
    </div>
    )
  }
}

export const B2 = (props) => {
  return (
    <div><span className="user">{props.user}  </span><B1 {...props} isB2>{props.children}</B1></div>
  )
}
