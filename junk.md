<table>
<tr>
  <th>Idea for the origin of the bias</th>
  <th>Issues</th>
</tr>
<tr>
  <td>Limited expressivity</td>
  <td>Neural networks can fit randomly labelled data</td>
</tr>
<tr>
  <td>SGD</td>
  <td>GD and many other optimization algorithms also show non-trivial generalization</td>
</tr>
</table>


  Our idea: <b>The parameter-function map is the <i>main</i> origin of the bias</b>
  <small>expressivity and the optimization algorithm can also play a role, but we claim that in most practical deep learning regimes, they only result in small relative changes to the generalization performance. These small changes, however, can be very important in many applications.</small>
