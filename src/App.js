import React, { Component } from 'react';

import { B1,B2 } from './components'
import './App.css';

class App extends Component {
      componentDidMount () {
        document.title="Deep learning generalizes because the parameter-function map is biased towards simple functions"
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
    // console.log(e.target.parentNode.parentNode.parentNode.parentNode.className);
    //ackshually nodes
    // let ackshuallies = Array.from(e.target.parentNode.querySelectorAll(".ackshually"));
    //if any ackshually is hidden in the clicked boi, then update all dem chat bubbless
    if (e.target.parentNode.parentNode.parentNode.className === "panel chat" || e.target.parentNode.parentNode.parentNode.parentNode.className === "panel chat")
      this.forceUpdate()
  }
  render() {
    return (
<div className="App">
<div dangerouslySetInnerHTML={{__html:"<script type='text/javascript' async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js'></script><script type='text/x-mathjax-config'>MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\\\(','\\\\)']]}});</script>"}}></div>
<div dangerouslySetInnerHTML={{__html:"<script type='text/x-mathjax-config'>window.onload = ()=>{document.querySelectorAll('.container a').forEach(n=>n.addEventListener('click', function(e){e.stopPropagation();}))}</script>"}}></div>

  <div className="header" style={{"textAlign":"center"}}>
    <a href="http://www.ox.ac.uk/" target="_blank"><img src="oulogo.png" alt="" style={{"width":"12vw","position":"absolute","top":"2.5em","left":"0vw"}}/></a>
    <a href="http://www.sysbiodtc.ox.ac.uk/" target="_blank"><img src="dtclogo.jpeg" alt="" style={{"width":"12vw","position":"absolute","top":"2.5em","left":"88vw"}}/></a>
    <h1 className="poster-title">Deep learning generalizes because the parameter-function map is biased towards simple functions</h1>
    <h3 className="poster-authors">Guillermo Valle-Pérez, Chico Q. Camargo, Ard A. Louis</h3>
    <h3 className="poster-affiliations">Departments of Physics, University of Oxford, UK</h3>
    <h4 className=""><mark>Tap on the bubbles to expand explanation. At me <a href="https://twitter.com/guillefix" target="_blank">@guillefix</a> on twitter with questions/suggestions</mark></h4>
  </div>

<div onClick={this.handleClick.bind(this)} className="container">
  <div className="panel chat" style={{"gridArea": "chat"}}>

  {/*intro*/}
    <B1>
      <div>Why does deep learning generalize?</div>
      <exp>Generalization is the ability of a supervised learning algorithm to predict correctly on data outside the training set (typically assumed to come from the same distribution). See <a target="_blank" href="http://guillefix.me/cosmos/static/Introduction%2520to%2520supervised%2520learning%2520theory.html">here</a> for an intro to supervised learning theory, including a formal definition of generalization in this context.</exp>
    </B1>
    <B2 user="Supervised learning theory">
      <div>Because it has an inductive bias</div>
      <exp><p>All the theorems that guarantee generalization (PAC, VC/growth function, Rademacher, PAC-Bayes, compression, stability) try to quantify an inductive bias. This is obvious really, think of a completely unbiased algorithm (no restrictions on hypotheses, or bias within them), it just guesses randomly outside the training data.</p><p>See <a target="_blank" href="http://guillefix.me/cosmos/static/Introduction%2520to%2520supervised%2520learning%2520theory.html">here</a> for a more in depth look at supervised learning theory.</p></exp>
    </B2>
    <B1>Ok, but why does it have an inductive bias?</B1>
    <B2 user="VC theory" >
      <div>Limited expressivity maybe?</div>
      <exp>
        <p>In binary classification, <a target="_blank" href="http://guillefix.me/cosmos/static/VC%2520dimension.html">Vapnik-Chervonenkis</a> theory determines when a hypothesis class ${"\\mathcal{H}"}$ has the <emph>uniform convergence property</emph>, which means that with high probability over the sampling of the training set <u>every</u> function in ${"\\mathcal{H}"}$ has a training error which is close to its generalization error, for sufficiently large training sets. It also quantifies how large the training sets need to be, giving generalization error bounds which are <u>worst-case over all empirical-risk-minimizing algorithms</u></p>
        <B1 >
          <div>More references</div>
          <exp>If you want to understand VC dimension theory, as well as most of classic learning theory, and other more applied parts of learning theory, I recommend the excellent book <a target="_blank" href="http://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/">Understanding Machine learning by Shai and Shai</a>, which has a <a target="_blank" href="https://www.youtube.com/watch?v=b5NlRg8SjZg&list=PLPW2keNyw-usgvmR7FTQ3ZRjfLs5jT4BO">recorded video lecture series</a></exp>
        </B1>
      </exp>
    </B2>
    <br/>
    <B2 user={<a href="#zhang2017a">Zhang et al. (2017a)</a>} >
      <div>No, neural networks (NNs) can fit randomly labelled data</div>
      <exp>
        If a binary classification model can fit any labelling on a given set of instances this means, by definition, that the VC dimension is greater than the size of the training set, which in turn implies that VC-dimension worst-case bounds are vacuous ($>1$).
        <B1 >
          <div>Ackshually</div>
          <exp>
            In reality, the experiments by Zhang et al. at most show that it can fit almost any labelling, but this is just a detail, the growth function would still be large, or equivalently, the VC dimension can only be guaranteed to be at least [a bit smaller than the size of the training data]
            <B1 >
              <div>Aaackshually</div>
              <exp><img style={{width:"10em"}} src="https://i.ytimg.com/vi/YYLWwRUMXR0/hqdefault.jpg" alt="dankmeme"/></exp>
            </B1>
          </exp>
        </B1>
      </exp>
    </B2>
    <br/>
    <B2  user={<span><a href="#soudry2018">D Soudry et al.</a>, <a href="#zhang2017b">Zhang et al. (2017b)</a>, <a href="#zhang2018">Zhang et al. (2018)</a></span>}>
      <div>Maybe SGD is what's biasing towards certain solutions</div>
      <exp><p>Soudry et al. prove particular properties of gradient descent, when using cross-entropy loss, showing that it converges to a maximum-margin distribution on separable data</p><p>Zhang et al. (2017b) prove properties of SGD including that it converges to flat minima</p><p>Zhang et al. (2018) also show that SGD can be biased to wide minima, even at the expense of a higher value of loss</p></exp>
    </B2>
    <B1 >
      <div>But many very different optimization algorithms generalize well</div>
      <exp>For example: GD, Adam, RMSProp, and all the variants of SGD; even evolutionary algorithms and random search are found to work well in the domains where they have been tried!</exp>
    </B1>
    <B2 user={<a href="#wu2017">Wu et al.</a>} >
      <div>Yeah!</div>
      <exp>This is just one example of a paper where they find this <small>(the paper is also interesting for many other reasons)</small>. They find that the full-batch gradient descent only generalizes a few percent worse than SGD.</exp>
    </B2>
    <B1>Hmm, maybe it's an intrinsic property of the NN, like its parameter-function map?</B1>
    <B2 user="">What's that?</B2>
    <B1 id="param-fun-map" >
      <p>{"Let the space of functions that the model can express be $\\mathcal{F}$. If the model has $p$ real valued parameters, taking values within a set $\\Theta \\subseteq \\mathbb{R}^p$, "}</p>
      <p><big><b>the parameter-function map</b></big>, {"$\\mathcal{M}$, is defined as:"}</p>
      <p>{"$$\\begin{align} \\mathcal{M} : \\Theta &\\to \\mathcal{F}\\\\ \\theta &\\mapsto f_\\mathbf{\\theta} \\end{align}$$"}</p>
      <p>{"where $f_\\mathbf{\\theta}$ is the function implemented by the model with choice of parameter vector $\\mathbf{\\theta}$."}</p>
      <exp>
        <p>
          So intuitively, a function is the input-output map that the network implements.
          <B1 >
            <div>More precisely</div>
            <exp>
              We enumerate all the inputs <small>(for instance, all images in our training set, or all 7-dimensional Boolean vectors for the first set of experiments)</small>, and the list the corresponding outputs the neural network (with parameters $\theta$) produces. For a fixed ordering of the inputs, this sequence of outputs is what we call a <emph>function</emph>.
              <small>
                <B1 >
                  <div>Smol achkshually</div>
                  <exp>This is really the mathematical definition of "function", as a collection of input-output pairs, except that we represent this collection using a canonical ordering, determined by the ordering of the inputs. For the case of Boolean inputs, we are looking at Boolean functions, and you can think of our sequence as its truth table.</exp>
                </B1>
              </small>
            </exp>
          </B1>
        </p>
        <p>Because of overparametrization, there is lots of <u>redundancy in the parameters</u>, and so many paramaters give rise to the same function</p>
      </exp>
    </B1>

  {/*bias*/}
    <B1 className="result" >
      <div className="panel-heading">
        <h3 className="bubble-title">Result 1: The parameter-function map is hugely biased</h3>
      </div>
      <p>For all the neural network architectures we tried:</p>
      <blockquote>
      The volumes of regions of parameter space producing particular functions span a huge range of orders of magnitude.
      </blockquote>
      <exp>Another more precise statement: Upon sampling parameters i.i.d. using a Gaussian or uniform distribution, the probability of obtaining different functions varies by maany orders of magnitude.     Note that we can talk about the probability of a single function, because we consider only binary classification, so the output is 0/1, and we have a finite number of inputs (say $N$), there are then in total a finite number (at most $2^N$) functions that network can implement</exp>
    </B1>
      <B1 id="figure1" >
        {/*<span style={{"fontSize":"0.6em","position":"relative", "top":"178px","left":"1140px","padding":"0.5em","background-color":"white"}}>{"$P(r)=\\frac{1}{\\ln{(N_0)}r}$"}</span>*/}
        <img src="rank_plot_extended.png" alt="logP vs LZ"/>
        <exp>
          <p>Fig 1. Probability of obtaining a particular function versus its rank (ranked by probability)</p>
          <p>{"Obtained in a sample of $10^{10}$ (blue) or $10^7$ (others) parameters for a fully connected network of shape (7,40,40,1)"}</p>
          <B1 >
            <div>What are the different lines?</div>
            <exp>{"The different lines (differen colors) represent different distributions over the parameters. The red line, however, represents Zipf'z law, where $P(\\text{rank})\\propto\\frac{1}{\\text{rank}}$"}</exp>
          </B1>
          <B1 >
            <div>What is "Rank"?</div>
          <exp>We rank the functions by their probability. The rank is just the index of the function on that sequence. So rank 1 meanse the most probable functions, rank 10 means the 10th most probable function</exp>
          </B1>
        </exp>
      </B1>
    <B2>Oh, and how did you find that out?</B2>
    <B1 >
      <p>For a family of fully connected feedforward neural networks with $7$ Boolean inputs and one Boolean output of varying depths and widths, we sampled parameters with several distributions. In <a href="#figure1">Figure 1</a>, we show the empirical frequencies by which different <a href="#param-fun-map">functions</a> are obtained</p>
      <exp>
      <p>We sample the parameters of the neural network $N$ times. For each sample, we evaluate the network on each of the $2^7$ Boolean input vectors, to obtain the sequence of outputs, which we call "function". The "empirical frequency" is just how many times a particular function appeared after sampling $N$ times.</p>
      <p>In Figure 1. these counts are dividied by the total number of samples $N$, so that they approach the actual probability of obtaining that function, on the limit of large samples.</p>
      <p>For all the input distributions, $N=10^8$, except for the blue one, for which we made a bigger sample $N=10^{10}$, which is why it goes further down.</p>
      </exp>
    </B1>
    <B1 >
      <p>For some larger neural networks with higher-dimensional input spaces, we used a Gaussian process approximation to calculate the probability of different functions. This can be seen in Figures 2a and the inset of Figure 3</p>
      <exp>We explain the Gaussian process approximation in more detail later.     Also note that for high-dimensional input spaces, we need to look at the functions constrained on a limited set of inputs <small>(e.g. a random sample of $100$ images from CIFAR10)</small>, because we aren't gonna enumerate all possible images lol. We can say we are talking about labellings rather than functions proper, but the math is the same, and the inutition basically too.</exp>
    </B1>
    <B2>Ok, but do we have any way to characterize the bias? What kinds of functions are the networks biased towards?</B2>

    {/*simpbias*/}
    <B1 id="result2" className="result" >
      <div className="panel-heading">
        <h3 className="bubble-title">Result 2: The bias is towards simple functions</h3>
      </div>
      <p>We found that in all cases, the probability of a function inversely correlated with its complexity (using a variety of measures of complexity)</p>
      <exp>
        We correlate the probability of obtaining a function with its complexity. We also have shown that if we plot Figure 2b as a histogram, most of the probability weight is near the bound, so that the correlation is actually even better.
        <B1 >
          <div>What are the measures of complexity</div>
          <exp>
            <p>We try several. Most of them are intended to approximate <a target="_blank" href="http://guillefix.me/cosmos/static/Kolmogorov%2520complexity.html">Kolmogorov complexity</a> (which is uncomputable), and try to capture how compressible something is (i.e. "can you describe it in few words/lines of code?").</p>
            <p><a target="_blank" href="http://guillefix.me/cosmos/static/Lempel-Ziv%2520complexity.html">Lempel-Ziv complexity</a> for example tries to compress a sequence of characters (a sequence of outputs, when we apply it to functions). It basically looks for statistical regularities in the sequence, and finds a shorter description seizing these. Our complexity measure is basically the compressed size. See our implementation <a target="_blank" href="https://github.com/guillefix/simpbias-tools">here</a>, where I also put most of the other complexity measures we tried</p>
            <p>Other measures of complexity we tried are described in the Appendix F1 in <a target="_blank" href="https://arxiv.org/abs/1805.08522">the paper</a>, and include measures on the size of the shortest Boolean expression encoding the Boolean function, and measures on how sensitive the function is to small changes in its input.</p>
          </exp>
        </B1>
      </exp>
    </B1>
    <B1 >
      <img src="cnt_100000000_7_40_40_1_relu_freq_LZ_with_line.png" id="freq_lz_img" alt="rank plot"/>
      <exp>
        Probability versus Lempel-Ziv complexity. Probabilities are estimated from a sample of $10^8$ parameters, the same way as in <a href="#figure1">Figure 1</a>. Points with a frequency of $10^{-8}$ are removed for clarity because these suffer from finite-size effects (see Appendix G)
        <B1 >
          <div>What is LZ complexity?</div>
          <exp>
            Lempel-Ziv complexity is a compression-based complexity measure. We express our functions as sequences of outputs, which because our outputs are 0/1, can be seen as bitstrings. We compress these strings using the Lempel-Ziv compression algorithm, which basically looks for statistical regularities in a sequence. "Lempel-Ziv complexity" is essentially defined as length of the compressed string (expressing how compressible the original string was). See more by expanding <a href="#result2">Result 2</a>
          </exp>
        </B1>
      </exp>
    </B1>
    <B1 >
      <img src="CSR_logP_test_cnn_4_none_0000.png" id="CSR_logP_img" alt="logP vs CSR"/>
      <exp>
        Probability (using GP approximation) versus critical sample ratio (CSR) of labelings of 1000 random CIFAR10 inputs, produced by $250$ random samples of parameters. The network is a 4 layer CNN.
        <B1 >
          <div>What is CSR?</div>
          <exp>
            In short, CSR is a measure of how sensitive the function is to small perturbation of the inputs, it measures what fraction of inputs are close to the decision boundary. It was proposed in <a target="_blank" href="https://arxiv.org/abs/1706.05394">this paper by Krueger et al.</a>
          </exp>
        </B1>
        <B1 >
          <div>Why is this correlation so good?</div>
          <exp>
            I'm not sure yet :P. But I'll just point out if we plot the $y$-axis with respect to entropy of the function (i.e. does it map most things to the same output, or not), the correlation is equally good. Food for thought.
          </exp>
        </B1>
      </exp>
    </B1>

    {/*whybias*/}
    <B2>
      <div className="panel-heading">
        <h3 className="panel-title">Why are the networks biased?</h3>
      </div>
    </B2>
    <B1 >
      <p>No deeper explanation yet about why the parameter-function map is biased. However, we do have some deeper reason, based on <a target="_blank" href="http://guillefix.me/cosmos/static/Algorithmic%2520information%2520theory.html"><b>algorithmic information theory</b></a> for why it is biased towards simple functions, given that it is biased.</p>
      <exp>You can see in <a href="#figure1">Figure 1</a> that the distribution seems to follow Zipf's law. We think that this may indicate that there may be a way of explaining the fact that they are biased, because there are so many ways of explaining Zipf's law in many systems.</exp>
    </B1>
    <B2  user={<a href="#dingle2018">Dingle et al.</a>}>
      <p>The probability $P(x)$ to obtain output $x$ of a <i>simple</i> map $f$, upon sampling its inputs uniformly at random, depends only on the Kolmogorov complexity of the output $K(x)$:</p>
      <p>{"$$P(x) \\leq 2^{-K(x)+O(1)}$$"}</p>
      <p>{"The main condition on the map is that its Kolmogorov complexity is negligible relative to that of the output $K(f) \\ll K(x)$"}</p>
      <p><small>Kolmogorov complexity is uncomputable, so we use computable approximations to it, like Lempel-Ziv complexity</small></p>
      <exp>
        <div>
          <p>The intuition behind this result is tricky to get at first, if you are not used to thinking about Kolmogorov complexity, but let me try</p>
          <p>Kolmogorov complexity is defined as the shortest description of a thing, when using a Turing universal language (like all normal programming languages)</p>
          <p>Therefore, it is typically not hard to upper bound the Kolmogorov complexity of something (let's assume the thing is a string, and call it $x$ for short). One just need to find <i>a</i> description of $x$, and then the shortest description has to be equal or shorter than this one!</p>
          <p><small>(finding a lower bound of Kolmogorov complexity is much harder, and in some cases provably impossible..)</small></p>
          <p>So let's say the probaility distribution $P$ itself (or equivalently the input-output map $f$ defining it) has a very short description, taking $C$ bits</p>
          <p>We can describe any $x$ in the support of $P$ by first describing $P$, with $C$ bits, and then giving a code (that can be constructed from $P$) that uniquely identifies $x$. An easy-to-describe coding escheme that is constructed from a distribution $P$ is the <a target="_blank" href="https://www.wikiwand.com/en/Shannon%E2%80%93Fano%E2%80%93Elias_coding">Shannon-Fano-Elias coding</a>. The important thing is that this coding asigns to each $x$ a code/description of size {"$\\log{\\frac{1}{P(x)}}$"} bits.</p>
          <p>So we described $x$ using {"$C+\\log{\\frac{1}{P(x)}}$"} bits. The constant $C$ doesn't grow with $x$, and so we call it "$O(1)$"</p>
          <p>By the discussion above, this means we can upper bound the Kolmorov complexity by the size of this description {"$K(x)<-\\log{P(x)}+O(1)$"}, which rearranging gives the desired result <small>(note that we still write $+O(1)$ even if it changes sign, as its just a symbol meaning "a constant", not a specific value)</small></p>
        </div>
      </exp>
    </B2>
    <B1>
      <div>The parameter-function map satisfies $K(f) \ll K(x)$, and indeed we found that the bound works (red line in Figure)</div>
      <exp>
      <p>Here $K(f)$ is the complexity of the parameter-function map, and $K(x)$ is the complexity of an "output" of this map, namely a function</p>
      <p>We can estimate the complexity of parameter-function map by the length of the python code you write to define your neural network architecture. This usually requires a constant number of bits, the only variables that scale with input dimension $n$ are usually the size of the layers. But encoding the number $n$ requires only {"$O(\\log{n})$"} bits. On the other hand, a typical Boolean function on an $n$-dimensional input space requires $O(2^n)$ bits to describe (one bit, per possible input, think of the truth table). Even if we are considering the function restricted a finite set of inputs of size $m$, typically {"$m\\gg \\log{n}$"}. We conclude that in almost all cases, $K(f) \ll K(x)$ is expected to hold.  </p>
      </exp>
    </B1>
    <B2>Is this bias enough to explain the observed generalization?</B2>

    {/*gener*/}
    <B1 className="result" >
      <div className="panel-heading">
        <h3 className="bubble-title">Result 3: The bias is enough to explain "the bulk" of the generalization in our experiments</h3>
      </div>
      <exp>
        <p>What do I mean by explaining "the bulk" of the generalization? I mean that the bound is reasonably tight, so that assuming onlyt the bias in the parameter function map, we are able to guarantee "the majority" of the difference in generalization performance between random guessing and the neural network. However, there is still a significant as-of-yet unexplained gap. This may come form the several approximations used to actually compute the bound (see <a href="#future-work1">Future work</a>).</p>
        <p>In addition, differences of a few percent typically obtained by using different algorithms, or other tricks, are not captured by our theory, but these are typically only small relative differences in generalization, so we argue they are typically lower-order effects. We aim to offer a <b>first-order explanation of generalization</b></p>
      </exp>
    </B1>
    <B1 >
      <img src="new_bound_insets_cnn_sigmaw_1_sigmab_1_MNIST_fashionMNIST_CIFAR_generror_vs_labelcorruption.png" alt="generalization error bounds"/>
      <exp>
        <p>Mean generalization error and corresponding PAC-Bayes bound versus percentage of label corruption, for three datasets and a training set of size 10000. Training set error is 0 in all experiments.</p>
        <B1>
          <span>What's the $x$-axis?</span>
          <exp>The label-corruption in the $x$-axis is just so that we are testing the bounds on a larger set of data distributions. The amount of label corruption corresponds to the probability of randomizing the output label, and is a proxy for data distribution complexity (the more randomized, the more complex the target distribution trying to be learnt)</exp>
        </B1>
        <B1>
            <span>What do all the lines mean?</span>
            <exp>
            <p>The different colors correspond to different datasets (MNIST, fashion-MNIST, CIFAR10). <small>Note, we work with the <b>binarized</b> versions of these, because we are investigating binary classification. The classification task is therefore, to classify as $0$ if it belongs to one of the first $5$ classes of the original dataset, or as $1$ if it belongs to one of the last $5$ classes.</small></p>
            <p>The dotted lines correspond to the actual generalization error on the test set, after training the neural network to $0$ training error.</p>
            <p>The corresponding solid lines correspond to the generalization error bounds that obtain. These bounds assume only the bias of the parameter-function map, and depend on the training set (though for a given data distribution (i.e. mnist, cifar), it doesn't fluctuate much with the sample of particular training set; same with the true generalization error)</p>
            </exp>
        </B1>
        <B1>
          <span>What can we conclude?</span>
          <exp>
          <p>As far as we know, <b>the bounds we obtain are much tighter than other bounds</b> on the generalization error of neural networks, obtained up to the point of publication</p>
          <p>The bounds capture the behaviour of the true error. They increase with increasing label-corruption, and are larger for fahsion-mnist than mnist, and significantly larger for CIFAR10 than any of these two.</p>
          </exp>
        </B1>
        <B1>
          <span>What's the inset?</span>
          <exp>Inset shows the marginal likelihood of the data as computed by the Gaussian process approximation (in natural log scale), versus the label corruption. <b>It gives us a way of estimating in bits, how much more complex CIFAR10 is than MNIST for the neural network!</b>. <small>We also observe the huge range of orders of magnitude that is spanned by the probability of different functions</small></exp>
        </B1>
        <B1>
          <span>Any more details?</span>
          <exp>The empirical errors are averaged over 8 initializations. The Gaussian process parameters were $\sigma_w = 1.0$, $\sigma_b = 1.0$ and the network was a 4-layer CNN with no pooling.</exp>
        </B1>

      </exp>
    </B1>
    <B2>Interesting, and how did you determine that?</B2>
    <B1>
      <p>To explore this question:</p>
      <p>
      <ul>
        <li>We use the <a target="_blank" href="http://guillefix.me/cosmos/static/PAC-Bayes.html"><b>PAC-Bayesian framework</b></a> to translate probabilistic biases into generalization guarantees</li>
        <li>We make the assumption that the algorithm optimizing the parameters is unbiased, to isolate the effect of the parameter-function map. More precisely, we assume that the optimization algorithm samples the zero-error region close to uniformly (<i><b>Assumption 1</b></i>).</li>
      </ul>
      </p>
    </B1>
    <B2>Can you provide more details on your method to obtain PAC-Bayes bounds?</B2>

  {/*methods*/}
    <B1 style={{"fontSize":"0.9em"}}>
      <i><b>Corollary 1</b> (of Langford and Seeger's version of the <b>PAC-Bayesian theorem</b> (Langford et al.)) {"For any distribution $P$ on any function space and"} <u>realizable</u> {"distribution $\\mathcal{D}$ on a space of instances we have, for $0< \\delta \\leq 1 $, that with probability at least $1-\\delta$ over the choice of sample $S$ of $m$ instances"}</i>
      {"$$-\\ln{\\left(1-\\epsilon(Q^*)\\right)} \\leq \\frac{\\ln{\\frac{1}{P(U)}} + \\ln{\\left(\\frac{2m}{\\delta}\\right)}}{m-1}$$"}
      {"where $\\epsilon(Q^*)$ is the expected generalization error under distribution over functions $Q^*(c)=\\frac{P(c)}{\\sum_{c\\in U} P(c)}$, $U$ is the set of functions in $\\mathcal{H}$ consistent with the sample $S$, and where $P(U)=\\sum_{c\\in U} P(c)$"}
      <exp>
      <p>
        It's quite tricky to give an intuitive explanation of PAC-Bayes (though I wanna try in a future blog post or something, or in my <a target="_blank" href="http://guillefix.me/cosmos/static/Introduction%2520to%2520supervised%2520learning%2520theory.html">Intro to supervised learning theory</a>).
      </p>
      <p>Here is a short attempt. You know people talk about VC dimension/capacity/expressivity? The idea of those measures is that if you have many different functions that your algorithm can output, the it may overfit, and not generalize. Conversely, if it has few functions it's considering, and it is still able to fit the training data with one, then one can be confident, that it will generalize well outside the training data.</p>
      <p>You can think of a probabilistic prior over functions $P(f)$ as a "smoothed" version of limiting the set of functions (<i>hypothesis class</i> in jargon), where one instead makes the algorithm prefer some functions much much more than others, but it doesn't <i>completely</i> rule the others out. PAC-Bayes gives guarantees on the generalization error for algorithms with such prior.</p>
      <B1>
      <span>But why can we be confident of generalization, when the hypothesis class is small?</span>
      <exp>
      <p>You have to keep asking why, don't you? I like curious people like you ^^</p>
      <p>The main argument is found in the proof of bounds in basic Probably Approximately Correct (PAC) theory</p>
      <p>Imagine a single function in your hypothesis class that has an actual generalization error which is high, meaning that on a random input, it is likely to disagree with the ground truth function, assumed fixed. Call $p$ the probability that it classifies correctly upon a random input ($1-p$ is probability that it missclassifies).</p>
      <p>It is very unlikely that that function has a small classification error (let alone $0$ error) on a reasonably sized training set, say of size $m=1000$. Just think of every input sample you do as flipping a coin with a low probability $p$ of head (now you'll see how important the i.i.d. assumption in supervised learning theory is!). Now think of how inlekily it is that you get all heads, in $1000$ samples! Very unlikely. Exponentially so, in fact, $p^m$</p>
      <p>But, what if the algorithm is considering among a largeeee set of functions, say $H$ of them. Well, what we really care about is if there exists one among those functions that has a large generalization error $p$, and a $0$ traning error. The existence of one such function is enough to <i>not be able to guarantee</i> generalization, if all we know about the algorithm is that it picks a function with $0$ training error. Who are you to say that it won't pick the bad one if it exists?</p>
      <p>It's tricky in general to work out the probability that there exist one more or more such functions. It depends on the set of functions, and it's the thing that Vapnik and Chervonenkis worked so hard to understand.</p>
      <p>But we can easily upper bound it, using the so-called union bound. Intuitively, if each individual function of error $1-p$ (or higher) has a probability $p^m$ (or smaller) of having $0$ training error. Then {"\{the probability that there exists "}<i>at least one</i>{" function on a set of $H$ such functions that has $0$ training error\} "}is at most $Hp^m$. Makes intuitive sense, if you have {"$2^{1000}$"} functions with low probability of correct classification $p$, you may not be so suprised if one just happened to fit the training set, even if each one individually is very unlikely</p>
      <p>So if we require that the probability of this bad thing to happen to be low, say at most $\delta$, then we can rearrange, {"$Hp^m< \\delta$"}. Well, it's easier if we call the probability of error $\epsilon$, so {"$p=1-\\epsilon < e^{-\\epsilon}$"}, and then it's enough to have {"$He^{-m\\epsilon}< \\delta$"}, which rearranges to {"$\\epsilon > \\frac{\\log{H}+\\log{\\frac{1}{\\delta$}}}{m}$"}</p>
      <p>huh? that looks like a lower bound to me. Actually, we need to be careful with our logical statement. We said that if {"$\\epsilon > \\frac{\\log{H}+\\log{\\frac{1}{\\delta$}}}{m}$"}, then {"{ {the probability of one function with $0$ training error among the functions that have true error $\\epsilon$ or higher} is smaller than $\\delta$}"}. So we actually gave the name "$\epsilon$" to the <i>upper bound on the true error</i> not to the actual true error. So the above is a lower bound, on the upper bound we want :PP. We want the tightest (smallest) upper bound. So let's take {"$\\frac{\\log{H}+\\log{\\frac{1}{\\delta$}}}{m}$"}. The true error is smaller than that with probability $1-\delta$ </p>
      <p>I know that is <u>a lot</u> to take in. But the point is that, there you have it, we can give a guarantee (holding with high probability, if we make delta very small), on the generalization error, which is smaller, the smallest the set of functions the algorithm considers.</p>
      </exp>
      </B1>
      </exp>
    </B1>
    <B2>Ah I see. So the bound depends on the data via $P(U)$, which is nothing but the <a target="_blank" href="https://www.wikiwand.com/en/Marginal_likelihood">marginal likelihood</a> of the labels on the data, given by the prior $P(f)$. But how do you calculate $P(U)$ for neural networks, isn't that intractable?</B2>
    <br/>
    <B2 user={<a href="#jlee2017">J Lee et al.</a>}>
    <div>Yes. However, $P(f)$ for deep fully connected neural networks approaches a Gaussian process as the width of the layers approaches infinity.</div>
    <exp>
    <pre style={{fontSize:"0.8em",overflow:"scroll"}}>{`
    What this means is that
      for {a Network
              with infinitely many
              hidden neurons per layers}
        { the vector of real-valued outputs
          obtained by
              {evaluating the Network on
                {a fixed array of inputs}}
        }
        upon
            {randomly sampling
                parameters of the Network i.i.d.}
        is
            {distributed with
              a multivariate Gaussian distribution.}
    `
  }</pre>
    </exp>
    </B2>
    <B2 user={<span><a href="#agarrigaalonso2019">A Garriga-Alonso et al.</a>, <a href="#rnovak2019">R Novak et al.</a></span>}>also for convolutional networks, as the number of filters goes to infinity!</B2>
    <B2 user={<a href="#gyang2019">G Yang</a>}>
      <div>actually most modern neural net architectures do too, in certain scaling limits!</div>
      <exp>More precisely, They show the convergence of random neural networks to Gaussian processes for architectures such as recurrent neural networks, convolutional neural networks, residual networks, attention, and any combination thereof, with or without batch normalization. They also show a bunch of other results building on lots of cool work studying the mean-field limit of neural networks.</exp>
      </B2>
    <B2 user={<a href="#aggmathews2018">AGG Mathews et al.</a>}>and it seems the networks don't need to be that wide for the approximation to be good <small className="speech-bubble1-special" style={{fontSize:"0.8em", "padding":"0.2em 0.5em"}}>(we independently checked this too)</small></B2>
    <B1>
      <div>Thanks everyone! The <b>Gaussian process approximation</b> is what allows us to compute $P(U)$ for realistically-sized NNs. However, the marginal likelihood for a Gaussian process with Bernoulli likelihood <small>(for binary classification, the setting of PAC-Bayes)</small> is still intractable, and so we explored some approximation techniques: Variational, Laplace, expectation-propagation (EP), and found EP to work best for our purposes.</div>
      <exp>See details in our <a target="_blank" href="https://arxiv.org/pdf/1805.08522.pdf#page=7">paper</a></exp>
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
    <B1 >
      <img id="advSGD_Bayes_img" src="SGD_prob_EPapprox_no_single_sample_vs_advsgd_many_84.0_7_40_2_150000_10000_118_no_replace_1.0_10.0_10.0.png" alt="advSGD vs GP probabilities"/>
      <exp>Average probability of finding a function for a variant of SGD (advSGD in this case; see Appendix A), versus average probability of finding a function when using the Gaussian process approximation to a 2 layer fully connected network. This is done for a randomly chosen, but fixed, target Boolean function of Lempel-Ziv complexity 84.0. See Appendix D for details. The Gaussian process parameters are $\sigma_w = 10.0$, and $\sigma_b = 10.0$. For advSGD, we have removed functions which only appeared once in the whole sample, to avoid finite-size effects</exp>
      {/*<span style={{"position":"relative", "top":"11em","left":"32em"}}>advSGD probs</span>*/}
      {/*<span style={{"display":"inline-block","position":"relative", "top":"5em","left":"18.7em","transform":"rotate(-90deg)"}}>GP probs</span>*/}
    </B1>
    <B1>
      <p>We conjecture that it is for many common DNN optimization algorithms <small>(note that for exact Bayesian sampling it is true, by definition)</small>, and show some empirical evidence supporting this .</p>
      <exp>
        <p>An intuitive reason to believe that the bias in the parameter-function map shown in this work will play an important role in the algorithm's dynamics is the following</p>
        <p>We have basically shown that the region of parameter space producing some function is literally orders of magnitude (quadrillions and other things that don't have names, other than "zillions") larger than the region of parameter space producing some other functions.</p>
        <p>One would have to believe the algorithm is equally extremely biased in parameter space in some other way to completely wash out this effect</p>
        <p>We think this sounds unlikely, although don't have a formal proof yet.</p>
      </exp>
    </B1>
    <br/>
    <B2>Future work?</B2>
    <B1 id="future-work1">There are problems regarding the validity of Assumption 1, the EP or other approximations to $P(U)$, as well as the tightness of PAC-Bayes itself.</B1>
    <B1>Furthermore, one can dig deeper to try to better understand the origin of the bias, and characterize it. In particular, there is the very important question of <b>why is the bias helpful for <i>real-world</i> tasks?</b></B1>
    <B1 className="speech-bubble1-pink" style={{"backgroundColor":"#edc7d1"}}>
    <div>
      We work under the standard assumption of supervised learning theory, that the test set is sampled i.i.d. from the same distribution as the training set. This impies a couple of important <b>limitations of our work:</b>
        <ul>
          <li>Our bound is not applicable in many real-world situations where this assumption doesn't hold. See <a target="_blank" href="https://arxiv.org/abs/1902.10811">Do ImageNet Classifiers Generalize to ImageNet? </a> for an example work showing that often this assumption is not totally valid (in other cases, it's <i>really</i> not valid)</li>
          <li>In the situations where it applies, we think our bound offers important insight into the origin of the generalization performance of neural networks. However, if the objective is purely to predict generalization performance, other approaches like using a test set work better than our current bounds (see <a target="_blank" href="https://icml.cc/Conferences/2005/proceedings/papers/052_Comparison_KaeaeriaeinenLangford.pdf">A Comparison of Tight Generalization Error Bounds</a> from 2005 for a nice overview.)</li>
        </ul>
      </div>
    </B1>
    {/*<B1>Furthermore, one can dig deeper to try to better understand the origin of the bias, and characterize it. In particular, there is the very important question of <b>why is the bias helpful for <i>real-world</i> tasks?</b></B1>*/}

    {/*refs*/}
    <B2 style={{"fontSize":"0.8em"}}>
      <p>
        <b>
        Starring:
        </b>
      </p>
      <p>
      <a id="zhang2017a" href="https://openreview.net/forum?id=Sy8gdB9xx" target="_blank">Zhang et al (2017a). Understanding deep learning requires rethinking generalization.  Published in ICLR 2017</a>
      </p>
      <p>
      <a id="wu2017" href="https://arxiv.org/abs/1706.10239" target="_blank">Wu et al. Towards understanding generalization of deep learning: Perspective of loss landscapes. arXiv preprint arXiv:1706.10239, 2017.</a>
      </p>
      <p>
      <a id="jlee2017" href="https://arxiv.org/abs/1711.00165" target="_blank">J Lee et al. Deep neural networks as gaussian processes. arXiv preprint arXiv:1711.00165, 2017.</a>
      </p>
      <p>
      <a id="agarrigaalonso2019" href="https://openreview.net/forum?id=Bklfsi0cKm" target="_blank">A Garriga-Alonso et al.  Deep convolutional networks as shallow Gaussian processes.  Published in ICLR 2019</a>
      </p>
      <p>
      <a id="rnovak2019" href="https://openreview.net/forum?id=B1g30j0qF7" target="_blank">R Novak et al. Bayesian Deep Convolutional Networks with Many Channels are Gaussian Processes.  Published in ICLR 2019</a>
      </p>
      <p>
      <a id="aggmathews2018" href="https://openreview.net/forum?id=H1-nGgWC-" target="_blank">AGG Mathews et al. Gaussian Process Behaviour in Wide Deep Neural Networks. Published in ICLR 2018</a>
      </p>
      <p>
      <a id="dingle2018" href="https://www.nature.com/articles/s41467-018-03101-6" target="_blank">Dingle et al. Input–output maps are strongly biased towards simple outputs. Nature communications, 9(1):761, 2018.</a>
      </p>
      <p>
      <a id="dsoudry2018" href="https://openreview.net/forum?id=r1q7n9gAb" target="_blank">D Soudry et al. The implicit bias of gradient descent on separable data. Published in ICLR 2018</a>
      </p>
      <p>
      <a id="zhang2017b" href="https://dspace.mit.edu/handle/1721.1/107841" target="_blank">Zhang et al. (2017b) Musings on deep learning: Properties of sgd. CBMM Memos 04/2017.</a>
      </p>
      <p>
      <a id="zhang2018" href="https://arxiv.org/abs/1803.01927" target="_blank">Zhang et al. (2018) Energy–entropy competition and the effectiveness of stochastic gradient descent in machine learning. Molecular Physics, pp. 1–10, 2018.</a>
      </p>
      <p>
      <a id="langford2001" href="http://hunch.net/~jl/projects/prediction_bounds/averaging/averaging_tech.pdf" target="_blank">Langford et al. Bounds for averaging classifiers. 2001.</a>
      </p>
      <p>
      <a id="gyang2019" href="https://arxiv.org/abs/1902.04760" target="_blank">G Yang. Scaling Limits of Wide Neural Networks with Weight Sharing: Gaussian Process Behavior, Gradient Independence, and Neural Tangent Kernel Derivation. arXiv preprint arXiv:1902.04760, 2019</a>
      </p>
    </B2>
  </div>

  </div>

</div>
    );
  }
}

export default App;
