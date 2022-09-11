<script src="static/script.js"></script>
<h1>Challenge 5 - Hash</h1>

<h3>SHA1 Message Encryption</h3>

<form action="/encrypt" method="get">
  <label for="decoded">Text to hash:</label><br>
  <input type="text" id="hash" name="hash"><br><br>
  <input type="submit" value="Send">
</form>

<script src='static/script.js'></script>
<script src='static/decode.js'></script>

<label for="decoded">Result:</label><br>
<p>{{data}}</p>
