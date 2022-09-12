<link href='/static/style.css' rel='stylesheet' type='text/css'>
<script src="static/script.js"></script>

<head>
    <meta charset="UTF-8">
    <title>PoC - Intro</title>
</head>

<div class="form__group field">
    <center><img src="static/nsa.png", style="width: 25%; padding: 5%"><center>
    <input type="text" name="payload" id="payload" placeholder="Search criminal...">
    <button onclick="sendRequest(document.getElementById('payload'))">GO</button>
</div>