import React, { Component } from 'react';
// import logo from './logo.svg';
// import './poster.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import './bootstrap_noprint_localedit.css';
// import { MathJax } from 'mathjax';
// MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
// <div dangerouslySetInnerHTML={{__html:"<script type='text/javascript' async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js'></script><script type='text/x-mathjax-config'>MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\\\(','\\\\)']]}});</script>"}}></div>
class App extends Component {
      componentDidMount () {
        let script = document.createElement("script");

        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
        script.async = true;

        document.body.appendChild(script);

        script = document.createElement("script");

        script.src = "MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});";

        document.body.appendChild(script);
      }
  render() {
    return (
<div className="App">
<div className="container">
  <div className="header" style={{"gridArea":"header"}}>
    <h1 className="poster-title">Deep learning generalizes because the parameter-function map is biased towards simple functions</h1>
    <h2 className="poster-authors">Guillermo Valle-Pérez, Chico Q. Camargo, Ard A. Louis</h2>
    <h3 className="poster-affiliations">Departments of Physics, University of Oxford, UK</h3>
    <hr className="fancy-line"/>
  </div>
  <div className="panel" style={{"gridArea": "intro"}}>
    <div className="panel-heading">
      <div className="speech-bubble">Why does deep learning generalize?</div>
    </div>
  </div>
  <div className="panel" style={{"gridArea": "bias"}}>
    <div className="panel-heading">
      <h3 className="panel-title">What's the origin of the inductive bias of deep neural networks?</h3>
    </div>
  </div>
  <div className="panel" style={{"gridArea": "biaswhy"}}>
    <div className="panel-heading">
      <h3 className="panel-title">What's the origin of the inductive bias of deep neural networks?</h3>
    </div>
  </div>
  <div className="panel" style={{"gridArea": "gener"}}>
    <div className="panel-heading">
      <h3 className="panel-title">What's the origin of the inductive bias of deep neural networks?</h3>
    </div>
  </div>
  <div className="panel" style={{"gridArea": "algo"}}>
    <div className="panel-heading">
      <h3 className="panel-title">What's the origin of the inductive bias of deep neural networks?</h3>
    </div>
  </div>
  <div className="panel" style={{"gridArea": "methods"}}>
    <div className="panel-heading">
      <h3 className="panel-title">What's the origin of the inductive bias of deep neural networks?</h3>
    </div>
  </div>
</div>

</div>
    );
  }
}

export default App;
