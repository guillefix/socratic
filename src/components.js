import React, { Component } from 'react';

export class B1 extends Component {
  constructor() {
    super();
    this.state = {exp_visible: false}
  }
  handleClick() {
    this.setState({exp_visible:!this.state.exp_visible})
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) this.setState({exp_visible:false})
  }
  render() {
    const {props, state} = this;
    console.log("hi", state.exp_visible);
    return (
    <div style={props.style} className={(props.isB2 ? "" : "speech-bubble1 ")+props.className}>
      <div onClick={this.handleClick.bind(this)}>{props.children}</div>
      <div className="ackshually" style={{color: "#606060", display: state.exp_visible ? "block" : "none"}}>{props.exp}</div>
    </div>
    )
  }
}

export const B2 = (props) => {
  return (
    <div><span className="user">{props.user}  </span><B1 {...props} className={"speech-bubble2 "}>{props.children}</B1></div>
  )
}
