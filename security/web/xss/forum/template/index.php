<link href='/static/style.css' rel='stylesheet' type='text/css'>
<script src="static/script.js"></script>

<div class="login-box">
  <h2>PoChat</h2>
  <p style="color: white;">{{data}}</p>
  <form id="msg" action="/append" method="get">
    <div class="user-box">
      <input type="text" id="content" name="content" required="">
      <label>Message</label>
    </div>
    <a href="javascript:{}" onclick="document.getElementById('msg').submit();">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Send
    </a>
  </form>
</div>
