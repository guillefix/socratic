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
      <span className="user">Supervised learning theory  </span><div className="speech-bubble2">Because it has an inductive bias</div>
      <div className="speech-bubble1">Ok, but why does it have an inductive bias?</div>
      <span className="user">VC theory  </span><div className="speech-bubble2">Limited expressivity maybe?</div>
      <br/>
      <span className="user">Zhang et al.  </span><div className="speech-bubble2" style={{"width":"auto"}}>No, NNs can fit randomly labelled data</div>
      <br/>
      <span className="user">[citation]  </span><div className="speech-bubble2" style={{"width":"auto"}}>Maybe SGD is what's biasing towards certain solutions</div>
      <div className="speech-bubble1">But many very different optimization algorithms generalize well</div>
      <span className="user">Wu et al.  </span><div className="speech-bubble2">Yeah!</div>
      <div className="speech-bubble1">Hmm, maybe it's an intrinsic property of the NN, like it's parameter-function map?</div>
      <span className="user">  </span><div className="speech-bubble2">What's that?</div>
  <div className="speech-bubble1">
    <p>{"Let the space of functions that the model can express be $\\mathcal{F}$. If the model has $p$ real valued parameters, taking values within a set $\\Theta \\subseteq \\mathbb{R}^p$, "}</p>
    <p><big><b>the parameter-function map</b></big>, {"$\\mathcal{M}$, is defined as:"}</p>
<p>{"$$\\begin{align} \\mathcal{M} : \\Theta &\\to \\mathcal{F}\\\\ \\theta &\\mapsto f_\\mathbf{\\theta} \\end{align}$$"}</p>
<p>{"where $f_\\mathbf{\\theta}$ is the function implemented by the model with choice of parameter vector $\\mathbf{\\theta}$."}</p>
  </div>
  </div>
  <div className="panel" style={{"gridArea": "bias"}}>
  <div className="speech-bubble1">
    <div className="panel-heading">
      <h3 className="bubble-title">Result 1: The parameter-function map is hugely biased</h3>
    </div>
    <p>For all the neural network architectures we tried:</p>
    <blockquote>
    The volumes of regions of parameter space producing particular funcions span a huge range of orders of magnitude.
    </blockquote>
    </div>
    <img src="rank_plot_extended.png" style={{"display": "block","width":"25em"}} alt="logP vs LZ"/>
    <div className="speech-bubble2" style={{"width":"auto"}}>Oh, and how did you find that out?</div>
    <div className="speech-bubble1" style={{"width": "auto"}}>
    <p>For a family of fully connected feedforward neural networks with $7$ Boolean inputs and one Boolean output of varying depths and widths, we sampled parameters with several distributions. In Figure, we show the empirical frequencies by which different functions are obtained</p>
    </div>
    <div className="speech-bubble1" style={{"width": "auto"}}>
    <p>For some larger neural networks with higher-dimensional input spaces, we used a Gaussian process approximation to calculate the probability of different functions. This can be seen in Figures</p>
    </div>
    <div className="speech-bubble2" style={{"width":"auto"}}>Ok, but do we have any way to characterize the bias? What kinds of functions are the networks biased towards?</div>
  </div>
  <div className="panel" style={{"gridArea": "biaswhy"}}>
    <div className="speech-bubble1">
      <div className="panel-heading">
        <h3 className="bubble-title">Result 2: The bias is towards simple functions</h3>
      </div>
    <p>We found that in all cases, the probability of a function inversely correlated with its complexity (using a variety of measures of complexity)</p>
    </div>
      <img src="cnt_100000000_7_40_40_1_relu_freq_LZ_with_line.png" style={{"float":"right","width":"20em"}} alt="rank plot"/>
      <img src="CSR_logP_test_cnn_4_none_0000.png" style={{"float":"left","width":"18em"}} alt="logP vs CSR"/>
    <div className="speech-bubble2">
      <div className="panel-heading">
        <h3 className="panel-title">Why are the networks biased?</h3>
      </div>
    </div>
    {/*<p>No deeper explanation yet about why the parameter-function map is biased; although we can get some insights by looking at the properties of the kernel in the Gaussian process approximation of the prior.</p>*/}
    <div className="speech-bubble1">
    <p>No deeper explanation yet about why the parameter-function map is biased. However, we do have some deeper reason, based on <b>algorithmic information theory</b> for why it is biased towards simple functions, given that it is biased.</p>
    </div>
    <span className="user" style={{"width":"3em"}}>Dingle et al.  </span><div className="speech-bubble2" style={{"width":"87%"}}>
    <p>The probability $P(x)$ to obtain output $x$ of a map $f$, upon sampling its inputs uniformly at random, which only depends on the Kolmogorov complexity of the output $K(x)$:</p>
    <p>{"$$P(x) \\leq 2^{-K(x)}$$"}</p>
    <p>{"The main condition on the map is that its Kolmogorov complexity is negligible relative to that of the output $K(f) \\ll K(x)$"}</p>
    <p>Kolmogorov complexity is uncomputable, so we use computable approximations to it, like Lempel-Ziv complexity</p>
    </div>
    <div className="speech-bubble1">
      The parameter function map satisfies $K(f) \ll K(x)$, and indeed the bound works (red line in Figure)
    </div>
  </div>

  <hr/>

  <div className="panel" style={{"gridArea": "gener"}}>
    <div className="speech-bubble2" style={{"width":"auto"}}>Is this bias enough to explain the observed generalization?</div>
    <div className="speech-bubble1">
      <div className="panel-heading">
        <h3 className="bubble-title">Result 3: The bias is enough to explain "the bulk" of the generalization in our experiments</h3>
      </div>
    </div>
    <img src="new_bound_insets_cnn_sigmaw_1_sigmab_1_MNIST_fashionMNIST_CIFAR_generror_vs_labelcorruption.png" style={{"float":"right","width":"25em"}} alt="generalization error bounds"/>
    <div className="speech-bubble2" style={{"width":"auto"}}>Interesting, and how did you determine that?</div>
    <div className="speech-bubble1">
      <p>To explore this question:</p>
      <p>
      <ul>
        <li>We use the PAC-Bayesian framework to translate probabilistic biases into generalization guarantees</li>
        <li>We make the assumption that the algorithm optimizing the parameters is unbiased, to isolate the effect of the parameter-function map. More precisely, we assume that the optimization algorithm samples the zero-error region close to uniformly (<i><b>Assumption 1</b></i>).</li>
      </ul>
      </p>
    </div>
  </div>
  <div className="panel" style={{"gridArea": "methods"}}>
    <div className="speech-bubble2" style={{"width":"auto"}}>Can you provide more details on your method to obtain PAC-Bayes bounds?</div>
    <div className="speech-bubble1" style={{"fontSize":"23pt"}}>
    <i><b>Corollarly 1</b> (of Langford's version of the <b>PAC-Bayesian theorem</b> [cite]) {"For any distribution $P$ on any function space and"} <u>realizable</u> {"distribution $\\mathcal{D}$ on a space of instances we have, for $0< \\delta \\leq 1 $, that with probability at least $1-\\delta$ over the choice of sample $S$ of $m$ instances"}</i>
    {"$$-\\ln{\\left(1-\\epsilon(Q^*)\\right)} \\leq \\frac{\\ln{\\frac{1}{P(U)}} + \\ln{\\left(\\frac{2m}{\\delta}\\right)}}{m-1}$$"}
    {"where $\\epsilon(Q^*)$ is the expected generalization error under distribution over functions $Q^*(c)=\\frac{P(c)}{\\sum_{c\\in U} P(c)}$, $U$ is the set of functions in $\\mathcal{H}$ consistent with the sample $S$, and where $P(U)=\\sum_{c\\in U} P(c)$"}
    </div>
    <div className="speech-bubble2" style={{"width":"auto"}}>Ah I see. So the bound depends on the data via $P(U)$, which is nothing but the marginal likelihood of the labels on the data, given by the prior $P(f)$. But how do you calculate $P(U)$ for neural networks, isn't that intractable?</div>
    <span className="user">J Lee et al.  </span><div className="speech-bubble2" style={{"width":"80%"}}>Yes. However, $P(f)$ for deep fully connected neural networks approaches a Gaussian process as the width of the layers approaches infinity.</div>
    <span className="user" style={{"width":"7em"}}>A Garriga-Alonso et al., R Novak et al.  </span><div className="speech-bubble2" style={{"width":"78%"}}>also for convolutional networks, as the number of filters goes to infinity!</div>
    <span className="user">AGG Mathews et al.  </span><div className="speech-bubble2" style={{"width":"70%"}}>and it seems the networks don't need to be that wide for the approximation to be good <small>(we independently checked this too)</small></div>
    <div className="speech-bubble1">
      Thanks everyone! The <b>Gaussian process approximation</b> is what allows us to compute $P(U)$ for realistically-sized NNs. However, the marginal likelihood for a Gaussian process with Bernoulli likelihood <small>(for binary classification, the setting of PAC-Bayes)</small> is still intractable, and so we explored two approximation techniques: Variational, Laplace, expectation-propagation (EP), and found EP to work best for our purposes.
    </div>
  </div>
  <div className="panel" style={{"gridArea": "algo"}}>
    <div className="speech-bubble2" style={{"width":"auto"}}>
    <div className="panel-heading">
      <h3 className="bubble-title">What's the effect of the optimization algorithm?</h3>
    </div>
    <p>
      After all, different optimization algorithms do show differences in generalization in practice
    </p>
    </div>
    <div className="speech-bubble1" style={{"width":"auto"}}>
    <p>Yes, but differences in generalization are typically of only a few percent.</p>
    <p>However, you raise an important point. The bias is <i>enough </i> to explain the bulk of the generalization. However, whether it is the actual origin of the generalization in DNNs depends on the behaviour of the optimization algorithm.</p>
    </div>
    <div className="speech-bubble1" style={{"width":"auto"}}>
    <p> A sufficient (though not necessary) condition for the parameter-function map to be main origin of the generalization is that the optimization algorithm isn't too biased, namely <i><b>Assumption 1</b></i> is approximately valid.</p>
    </div>
    <img src="SGD_prob_EPapprox_no_single_sample_vs_advsgd_many_84.0_7_40_2_150000_10000_118_no_replace_1.0_10.0_10.0.png" style={{"float":"right","width":"15em"}} alt="advSGD vs GP probabilities"/>
    <div className="speech-bubble1" style={{"width":"55%"}}>
    <p>We conjecture that it is for many common DNN optimization algorithms <small>(note that for exact Bayesian sampling it is true, by definition)</small>, and show some empirical evidence supporting this .</p>
    </div>
    <br/>
    <div className="speech-bubble2" style={{"width":"auto"}}>Future work?</div>
    <div className="speech-bubble1" style={{"width":"auto"}}>There are problems regarding the validity of Assumption 1, the EP or other approximations to $P(U)$, as well as the tightness of PAC-Bayes itself.</div>
    <div className="speech-bubble1" style={{"width":"auto"}}>Furthermore, one can dig dipper to try to better understand the origin of the bias, and characterize it. In particular, there is the very important question of <b>why is the bias helpful for <i>real-world</i> tasks?</b></div>
  </div>
</div>

</div>
    );
  }
}

export default App;
