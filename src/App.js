import React, { Component } from 'react';

import { B1,B2 } from './components'
import './App.css';

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
  handleClick(e) {
    // console.log(e.target.parentNode.parentNode.parentNode.className);
    //ackshually nodes
    // let ackshuallies = Array.from(e.target.parentNode.querySelectorAll(".ackshually"));
    //if any ackshually is hidden in the clicked boi, then update all dem chat bubbless
    if (e.target.parentNode.parentNode.parentNode.className === "panel chat")
      this.forceUpdate()
  }
  render() {
    return (
<div className="App">
<div dangerouslySetInnerHTML={{__html:"<script type='text/javascript' async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js'></script><script type='text/x-mathjax-config'>MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\\\(','\\\\)']]}});</script>"}}></div>

<div onClick={this.handleClick.bind(this)} className="container">
  <div className="header" style={{"gridArea":"header", "textAlign":"center"}}>
  <a href="http://www.ox.ac.uk/" target="_blank"><img src="oulogo.png" alt="" style={{"width":"12vw","position":"absolute","top":"2.5em","left":"0vw"}}/></a>
  <a href="http://www.sysbiodtc.ox.ac.uk/" target="_blank"><img src="dtclogo.jpeg" alt="" style={{"width":"12vw","position":"absolute","top":"2.5em","left":"88vw"}}/></a>
    <h1 className="poster-title">Deep learning generalizes because the parameter-function map is biased towards simple functions</h1>
    <h3 className="poster-authors">Guillermo Valle-Pérez, Chico Q. Camargo, Ard A. Louis</h3>
    <h3 className="poster-affiliations">Departments of Physics, University of Oxford, UK</h3>
  </div>

  <div className="panel chat" style={{"gridArea": "chat"}}>

  {/*intro*/}
    <B1 exp={<div>Generalization is the ability of a supervised learning algorithm to predict correctly on data outside the training set (typically assumed to come from the same distribution)</div>}>Why does deep learning generalize?</B1>
    <B2 user="Supervised learning theory" exp="All the theorems that guarantee generalization (PAC, VC/growth function, Rademacher, PAC-Bayes, compression, stability) try to quantify an inductive bias. This is obvious really, think of a completely unbiased algorithm (no restrictions on hypotheses, or bias within them), it just guesses randomly outside the training data.">Because it has an inductive bias</B2>
    <B1>Ok, but why does it have an inductive bias?</B1>
    <B2 user="VC theory" exp={<div>In binary classification, Vapnik-Chervonenkis theory determines when a hypothesis class ${"\\mathcal{H}"}$ has the <emph>uniform convergence property</emph>, which means that with high probability over the sampling of the training set <u>every</u> function in ${"\\mathcal{H}"}$ has a training error which is close to its generalization error, for sufficiently large training sets. It also quantifies how large the training sets need to be, giving generalization error bounds which are <u>worst-case over all empirical-risk-minimizing algorithms</u></div>}>Limited expressivity maybe?</B2>
    <br/>
    <B2 user="Zhang et al. (2017a)" exp={<div>If a binary classification model can fit any labelling on a given set of instances this means, by definition, that the VC dimension is greater than the size of the training set, which in turn implies that VC-dimension worst-case bounds are vacuous ($>1$). <B1 exp={<div>In reality, the experiments by Zhang et al. at most show that it can fit almost any labelling, but this is just a detail, the growth function would still be large, or equivalently, the VC dimension can only be guaranteed to be at least [a bit smaller than the size of the training data] <B1 exp={<div><img style={{width:"180px"}} src="https://i.ytimg.com/vi/YYLWwRUMXR0/hqdefault.jpg" alt="dankmeme"/></div>}>Aaackshually</B1></div>}>Ackshually</B1></div>}>No, neural networks (NNs) can fit randomly labelled data</B2>
    <br/>
    <B2 user="D Soudry et al., Zhang et al. (2017b), Zhang et al. (2018)">Maybe SGD is what's biasing towards certain solutions</B2>
    <B1 exp="For example: GD, Adam, RMSProp, and all the variants of SGD; even evolutionary algorithms and random search are found to work well in the domains where they have been tried!">But many very different optimization algorithms generalize well</B1>
    <B2 user="Wu et al." exp={<div>This is just one example of a paper where they find this <small>(the paper is also interesting for many other reasons)</small>. They find that the full-batch gradient descent only generalizes a few percept worse than SGD.</div>}>Yeah!</B2>
    <B1>Hmm, maybe it's an intrinsic property of the NN, like its parameter-function map?</B1>
    <B2 user="">What's that?</B2>
    <B1>
      <p>{"Let the space of functions that the model can express be $\\mathcal{F}$. If the model has $p$ real valued parameters, taking values within a set $\\Theta \\subseteq \\mathbb{R}^p$, "}</p>
      <p><big><b>the parameter-function map</b></big>, {"$\\mathcal{M}$, is defined as:"}</p>
      <p>{"$$\\begin{align} \\mathcal{M} : \\Theta &\\to \\mathcal{F}\\\\ \\theta &\\mapsto f_\\mathbf{\\theta} \\end{align}$$"}</p>
      <p>{"where $f_\\mathbf{\\theta}$ is the function implemented by the model with choice of parameter vector $\\mathbf{\\theta}$."}</p>
    </B1>

  {/*bias*/}
    <B1 className="result">
      <div className="panel-heading">
        <h3 className="bubble-title">Result 1: The parameter-function map is hugely biased</h3>
      </div>
      <p>For all the neural network architectures we tried:</p>
      <blockquote>
      The volumes of regions of parameter space producing particular funcions span a huge range of orders of magnitude.
      </blockquote>
    </B1>
      <B1 exp={<div><p>Fig 1. Probability versus rank of each of the functions (ranked by probability)</p><p>{"Obtained in a sample of $10^{10}$ (blue) or $10^7$ (others) parameters for a fully connected network of shape (7,40,40,1)"}</p></div>}>
        {/*<span style={{"fontSize":"0.6em","position":"relative", "top":"178px","left":"1140px","padding":"0.5em","background-color":"white"}}>{"$P(r)=\\frac{1}{\\ln{(N_0)}r}$"}</span>*/}
        <img src="rank_plot_extended.png" alt="logP vs LZ"/>
      </B1>
    <B2>Oh, and how did you find that out?</B2>
    <B1>
      <p>For a family of fully connected feedforward neural networks with $7$ Boolean inputs and one Boolean output of varying depths and widths, we sampled parameters with several distributions. In Figure, we show the empirical frequencies by which different functions are obtained</p>
    </B1>
    <B1>
      <p>For some larger neural networks with higher-dimensional input spaces, we used a Gaussian process approximation to calculate the probability of different functions. This can be seen in Figures</p>
    </B1>
    <B2>Ok, but do we have any way to characterize the bias? What kinds of functions are the networks biased towards?</B2>

    {/*simpbias*/}
    <B1 className="result">
      <div className="panel-heading">
        <h3 className="bubble-title">Result 2: The bias is towards simple functions</h3>
      </div>
      <p>We found that in all cases, the probability of a function inversely correlated with its complexity (using a variety of measures of complexity)</p>
    </B1>
    <B1 exp="Probability versus Lempel-Ziv complexity. Probabilities are estimated from a sample of $10^8$ parameters. Points with a frequency of $10^{-8}$ are removed for clarity because these suffer from finite-size effects (see Appendix G)">
    <img src="cnt_100000000_7_40_40_1_relu_freq_LZ_with_line.png" id="freq_lz_img" alt="rank plot"/>
    </B1>
    <B1 exp="Probability (using GP approximation) versus critical sample ratio (CSR) of labelings of 1000 random CIFAR10 inputs, produced by $250$ random samples of parameters. The network is a 4 layer CNN">
    <img src="CSR_logP_test_cnn_4_none_0000.png" id="CSR_logP_img" alt="logP vs CSR"/>
    </B1>

    {/*whybias*/}
    <B2>
      <div className="panel-heading">
        <h3 className="panel-title">Why are the networks biased?</h3>
      </div>
    </B2>
    <B1>
      <p>No deeper explanation yet about why the parameter-function map is biased. However, we do have some deeper reason, based on <b>algorithmic information theory</b> for why it is biased towards simple functions, given that it is biased.</p>
    </B1>
    <B2 user="Dingle et al.">
      <p>The probability $P(x)$ to obtain output $x$ of a <i>simple</i> map $f$, upon sampling its inputs uniformly at random, depends only on the Kolmogorov complexity of the output $K(x)$:</p>
      <p>{"$$P(x) \\leq 2^{-K(x)}$$"}</p>
      <p>{"The main condition on the map is that its Kolmogorov complexity is negligible relative to that of the output $K(f) \\ll K(x)$"}</p>
      <p><small>Kolmogorov complexity is uncomputable, so we use computable approximations to it, like Lempel-Ziv complexity</small></p>
    </B2>
    <B1>The parameter function map satisfies $K(f) \ll K(x)$, and indeed we found that the bound works (red line in Figure) </B1>
    <B2>Is this bias enough to explain the observed generalization?</B2>

    {/*gener*/}
    <B1 className="result">
      <div className="panel-heading">
        <h3 className="bubble-title">Result 3: The bias is enough to explain "the bulk" of the generalization in our experiments</h3>
      </div>
    </B1>
    <B1 exp="Mean generalization error and corresponding PAC-Bayes bound versus percentage of label corruption, for three datasets and a training set of size 10000. Training set error is 0 in all experiments. Note that the bounds follow the same trends as the true generalization errors. The empirical errors are averaged over 8 initializations. The Gaussian process parameters were $\sigma_w = 1.0$, $\sigma_b = 1.0$ and the network was a 4-layer CNN with no pooling. Insets show the marginal likelihood of the data as computed by the Gaussian process approximation (in natural log scale), versus the label corruption.">
    <img src="new_bound_insets_cnn_sigmaw_1_sigmab_1_MNIST_fashionMNIST_CIFAR_generror_vs_labelcorruption.png" alt="generalization error bounds"/>
    </B1>
    <B2>Interesting, and how did you determine that?</B2>
    <B1>
      <p>To explore this question:</p>
      <p>
      <ul>
        <li>We use the <b>PAC-Bayesian framework</b> to translate probabilistic biases into generalization guarantees</li>
        <li>We make the assumption that the algorithm optimizing the parameters is unbiased, to isolate the effect of the parameter-function map. More precisely, we assume that the optimization algorithm samples the zero-error region close to uniformly (<i><b>Assumption 1</b></i>).</li>
      </ul>
      </p>
    </B1>
    <B2>Can you provide more details on your method to obtain PAC-Bayes bounds?</B2>

  {/*methods*/}
    <B1 style={{"fontSize":"0.9em"}}>
      <i><b>Corollary 1</b> (of Langford's version of the <b>PAC-Bayesian theorem</b> (Langford et al.)) {"For any distribution $P$ on any function space and"} <u>realizable</u> {"distribution $\\mathcal{D}$ on a space of instances we have, for $0< \\delta \\leq 1 $, that with probability at least $1-\\delta$ over the choice of sample $S$ of $m$ instances"}</i>
      {"$$-\\ln{\\left(1-\\epsilon(Q^*)\\right)} \\leq \\frac{\\ln{\\frac{1}{P(U)}} + \\ln{\\left(\\frac{2m}{\\delta}\\right)}}{m-1}$$"}
      {"where $\\epsilon(Q^*)$ is the expected generalization error under distribution over functions $Q^*(c)=\\frac{P(c)}{\\sum_{c\\in U} P(c)}$, $U$ is the set of functions in $\\mathcal{H}$ consistent with the sample $S$, and where $P(U)=\\sum_{c\\in U} P(c)$"}
    </B1>
    <B2>Ah I see. So the bound depends on the data via $P(U)$, which is nothing but the marginal likelihood of the labels on the data, given by the prior $P(f)$. But how do you calculate $P(U)$ for neural networks, isn't that intractable?</B2>
    <br/>
    <B2 user="J Lee et al.">Yes. However, $P(f)$ for deep fully connected neural networks approaches a Gaussian process as the width of the layers approaches infinity.</B2>
    <B2 user="A Garriga-Alonso et al., R Novak et al.">also for convolutional networks, as the number of filters goes to infinity!</B2>
    <B2 user="AGG Mathews et al.">and it seems the networks don't need to be that wide for the approximation to be good <small className="speech-bubble1" style={{"padding":"0.2em 0.5em"}}>&nbsp;&nbsp;&nbsp;&nbsp;(we independently checked this too)</small></B2>
    <B1>
      Thanks everyone! The <b>Gaussian process approximation</b> is what allows us to compute $P(U)$ for realistically-sized NNs. However, the marginal likelihood for a Gaussian process with Bernoulli likelihood <small>(for binary classification, the setting of PAC-Bayes)</small> is still intractable, and so we explored some approximation techniques: Variational, Laplace, expectation-propagation (EP), and found EP to work best for our purposes.
    </B1>

    {/*algo*/}
    <B2>
      <div className="panel-heading">
        <h3 className="bubble-title">What's the effect of the optimization algorithm?</h3>
      </div>
      <p>
        After all, different optimization algorithms do show differences in generalization in practice
      </p>
    </B2>
    <B1>
      <p>Yes, but differences in generalization are typically of only a few percent.</p>
      <p>However, you raise an important point. Although we have shown that the bias is <i>enough</i> to explain the bulk of the generalization, whether it is the <i>actual</i> origin of the generalization in DNNs depends on the behaviour of the optimization algorithm.</p>
    </B1>
    <B1>
      <p> A sufficient (though not necessary) condition for the parameter-function map to be main origin of the generalization is that the optimization algorithm isn't too biased, namely <i><b>Assumption 1</b></i> is approximately valid.</p>
    </B1>
    <B1 exp="Average probability of finding a function for a variant of SGD (advSGD in this case; see Appendix A), versus average probability of finding a function when using the Gaussian process approximation to a 2 layer fully connected network. This is done for a randomly chosen, but fixed, target Boolean function of Lempel-Ziv complexity 84.0. See Appendix D for details. The Gaussian process parameters are $\sigma_w = 10.0$, and $\sigma_b = 10.0$. For advSGD, we have removed functions which only appeared once in the whole sample, to avoid finite-size effects">
    <img id="advSGD_Bayes_img" src="SGD_prob_EPapprox_no_single_sample_vs_advsgd_many_84.0_7_40_2_150000_10000_118_no_replace_1.0_10.0_10.0.png" alt="advSGD vs GP probabilities"/>
    </B1>
      <span style={{"position":"relative", "top":"11em","left":"32em"}}>advSGD probs</span>
      <span style={{"display":"inline-block","position":"relative", "top":"5em","left":"18.7em","transform":"rotate(-90deg)"}}>GP probs</span>
    <B1>
      <p>We conjecture that it is for many common DNN optimization algorithms <small>(note that for exact Bayesian sampling it is true, by definition)</small>, and show some empirical evidence supporting this .</p>
    </B1>
    <br/>
    <B2>Future work?</B2>
    <B1>There are problems regarding the validity of Assumption 1, the EP or other approximations to $P(U)$, as well as the tightness of PAC-Bayes itself.</B1>
    <B1>Furthermore, one can dig deeper to try to better understand the origin of the bias, and characterize it. In particular, there is the very important question of <b>why is the bias helpful for <i>real-world</i> tasks?</b></B1>

    {/*refs*/}
    <B2 style={{"fontSize":"0.8em"}}>
      <p>
        <b>
        Starring:
        </b>
      </p>
      <p>
      Zhang et al (2017a). Understanding deep learning requires rethinking generalization.  Published in ICLR 2017
      </p>
      <p>
      Wu et al. Towards understanding generalization of deep learning: Perspective of loss landscapes. arXiv preprint arXiv:1706.10239, 2017.
      </p>
      <p>
      J Lee et al. Deep neural networks as gaussian processes. arXiv preprint arXiv:1711.00165, 2017.
      </p>
      <p>
      A Garriga-Alonso et al.  Deep convolutional networks as shallow Gaussian processes.  Published in ICLR 2019
      </p>
      <p>
      R Novak et al. Bayesian Deep Convolutional Networks with Many Channels are Gaussian Processes.  Published in ICLR 2019
      </p>
      <p>
      AGG Mathews et al. Gaussian Process Behaviour in Wide Deep Neural Networks. Published in ICLR 2018
      </p>
      <p>
      Dingle et al. Input–output maps are strongly biased towards simple outputs. Nature communications, 9(1):761, 2018.
      </p>
      <p>D Soudry et al. The implicit bias of gradient descent on separable data. arXiv preprint arXiv:1710.10345, 2017</p>
      <p>Zhang et al. (2017b) Musings on deep learning: Properties of sgd. CBMM Memos 04/2017. </p>
      <p>Zhang et al. (2018) Energy–entropy competition and the effectiveness of stochastic gradient descent in machine learning. Molecular Physics, pp. 1–10, 2018.</p>
      <p>Langford et al. Bounds for averaging classifiers. 2001.</p>
    </B2>
  </div>

  </div>

</div>
    );
  }
}

export default App;
