import React, { Component } from 'react';
// import logo from './logo.svg';
// import './poster.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import './bootstrap_noprint_localedit.css';
// import { MathJax } from 'mathjax';
// MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
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
<div dangerouslySetInnerHTML={{__html:"<script type='text/javascript' async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js'></script><script type='text/x-mathjax-config'>MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\\\(','\\\\)']]}});</script>"}}></div>
<div className="container">
  <div className="header" style={{"gridArea":"header"}}>
    <h1 className="poster-title">Deep learning generalizes because the parameter-function map is biased towards simple functions</h1>
    <h2 className="poster-authors">Guillermo Valle-Pérez, Chico Q. Camargo, Ard A. Louis</h2>
    <h3 className="poster-affiliations">Departments of Physics, University of Oxford, UK</h3>
    <hr className="fancy-line"/>
  </div>
  <div className="panel" style={{"gridArea": "intro"}}>
    <div className="panel-heading">
    </div>
      <div className="speech-bubble1">Why does deep learning generalize?</div>
      <span className="user" style={{"display": "inline-block","width":"5em"}}>Supervised learning theory  </span><div className="speech-bubble2">Because it has an inductive bias</div>
      <div className="speech-bubble1">Ok, but why does it have an inductive bias?</div>
      <span className="user">VC theory  </span><div className="speech-bubble2">Limited expressivity maybe?</div>
      <br/>
      <span className="user">Zhang et al.  </span><div className="speech-bubble2" style={{"width":"14em"}}>No, NNs can fit randomly labelled data</div>
      <br/>
      <span className="user">[citation]  </span><div className="speech-bubble2" style={{"width":"15em"}}>Maybe SGD is what's biasing towards certain solutions</div>
      <div className="speech-bubble1">But many very different optimization algorithms generalize well</div>
      <span className="user">Wu et al.  </span><div className="speech-bubble2">Yeah!</div>
      <div className="speech-bubble1">Hmm, maybe it's an intrinsic property of the NN, like it's parameter-function map?</div>
      <span className="user">  </span><div className="speech-bubble2">What's that?</div>
  </div>
  <div className="panel" style={{"gridArea": "pfdef"}}>
    <div className="panel-heading">
      <h3 className="panel-title">The parameter-function map</h3>
    </div>
    <p>{"Let the space of functions that the model can express be $\\mathcal{F}$. If the model has $p$ real valued parameters, taking values within a set $\\Theta \\subseteq \\mathbb{R}^p$, the parameter-function map, $\\mathcal{M}$, is defined as:"}</p>
<p>{"$$\\begin{align} \\mathcal{M} : \\Theta &\\to \\mathcal{F}\\\\ \\theta &\\mapsto f_\\mathbf{\\theta} \\end{align}$$"}</p>
<p>{"where $f_\\mathbf{\\theta}$ is the function implemented by the model with choice of parameter vector $\\mathbf{\\theta}$."}</p>
  </div>
  <div className="panel" style={{"gridArea": "bias"}}>
    <div className="panel-heading">
      <h3 className="panel-title">The parameter-function map is biased towards simple function</h3>
    </div>
    <p>For all the neural network architectures we tried:</p>
    <blockquote>
    The volumes of regions of parameter space producing particular funcions span a huge range of orders of magnitude.
    </blockquote>
    <img src="rank_plot_extended.png" style={{"float":"right","width":"25em"}} alt="logP vs LZ"/>
    <p>For a family of fully connected feedforward neural networks with $7$ Boolean inputs and one Boolean output of varying depths and widths, we sampled parameters with several distributions. In Figure, we show the empirical frequencies by which different functions are obtained</p>
    <br/>
    <p>For some larger neural networks with higher-dimensional input spaces, we used a Gaussian process approximation to calculate the probability of different functions. This can be seen in Figures</p>
    <br/>
    <p>We found that in all cases, the probability of a function inversely correlated with its complexity (using a variety of measures of complexity)</p>
    <br/>
    <br/>
    <img src="cnt_100000000_7_40_40_1_relu_freq_LZ_with_line.png" style={{"float":"right","width":"25em"}} alt="rank plot"/>
    <img src="CSR_logP_test_cnn_4_none_0000.png" style={{"float":"left","width":"25em"}} alt="logP vs CSR"/>
  </div>
  <div className="panel" style={{"gridArea": "biaswhy"}}>
    <div className="panel-heading">
      <h3 className="panel-title">Why are the networks biased?</h3>
    </div>
    <p>No deeper reason yet about why the parameter-function map is biased; although we can get some insights by looking at the properties of the kernel in the Gaussian process approximation of the prior.</p>
    <p>However, we do have some deeper explanation for why it is biased towards simple functions, given that it is biased.</p>
    <p>From algorithmic information theory one can deduce an upper bound on the probability $P(x)$ to obtain output $x$ of a map $f$, upon sampling its inputs uniformly at random, which only depends on the Kolmogorov complexity of the output $K(x)$:</p>
    <p>{"$$P(x) \\leq 2^{-K(x)}$$"}</p>
    <p>{"The main condition on the map is that its Kolmogorov complexity is negligible relative to that of the output $K(f) \\ll K(x)$"}</p>
    <p>Kolmogorov complexity is uncomputable, so we use computable approximations to it, like Lempel-Ziv complexity, which has been found to work well in practice for many maps arising in models from the physical sciences and engineering [cite]</p>
  </div>
  <div className="panel" style={{"gridArea": "gener"}}>
    <div className="panel-heading">
      <h3 className="panel-title">Is this bias enough to explain the observed generalization?</h3>
    </div>
    <img src="new_bound_insets_cnn_sigmaw_1_sigmab_1_MNIST_fashionMNIST_CIFAR_generror_vs_labelcorruption.png" style={{"float":"right","width":"25em"}} alt="generalization error bounds"/>
    <p>To explore this question:</p>
    <p>
    <ul>
      <li>We use the PAC-Bayesian framework to translate probabilistic biases into generalization guarantees</li>
      <li>We make the assumption that the algorithm optimizing the parameters is unbiased, to isolate the effect of the parameter-function map. More precisely, we assume that the optimization algorithm samples the zero-error region close to uniformly (<emph><b>Assumption 1</b></emph>).</li>
    </ul>
    </p>
    <p><b>The result: </b></p>
    <blockquote>The bias is enough to explain "the bulk" of the generalization in our experiments</blockquote>
  </div>
  <div className="panel" style={{"gridArea": "algo"}}>
    <div className="panel-heading">
      <h3 className="panel-title">What's the effect of the learning algorithm?</h3>
    </div>
    <img src="SGD_prob_EPapprox_no_single_sample_vs_advsgd_many_84.0_7_40_2_150000_10000_118_no_replace_1.0_10.0_10.0.png" style={{"float":"right","width":"25em"}} alt="advSGD vs GP probabilities"/>
    <p>We have seen that the bias is enough to explain the bulk of the generalization. However, whether it is the actual origin of the generalization in DNNs depends on the behaviour of the optimization algorithm. A sufficient (though not necessary) condition for the PF map to be main origin of the generalization is that the optimization algorithm isn't too biased, namely <i><b>Assumption 1</b></i> is approximately valid. We conjecture that it is for many common DNN optimization algorithms, and show some empirical evidence supporting this.</p>
    <br/>
    <p>Note that for exact Bayesian sampling it is true, by definition, and so approximate Bayesian sampling like MCMC should approximately satisfy it too.</p>
  </div>
  <div className="panel" style={{"gridArea": "methods"}}>
    <div className="panel-heading">
      <h3 className="panel-title">Method details</h3>
    </div>
  </div>
</div>

</div>
    );
  }
}

export default App;
