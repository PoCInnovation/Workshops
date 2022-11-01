<?php
  include("variables.php");
  session_start();
  if (!empty($_POST['mail']) and !empty($_POST['message'])) {
    if ($_POST['mail'] === "admin@thecafe.com") {
      if (strpos($_POST['message'], "http://localhost:8081/redirect.php?password=") === 0) {
        $cut = explode("=", $_POST['message']);
        if (!empty($cut[1])) {
          $_SESSION['newpass'] = $cut[1];
          $_SESSION['hack'] = 1;
          header('Location: variables.php');
        }
      }
    }
  }
?>

<!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
<style>
body, html {
  height: 100%;
  font-family: "Inconsolata", sans-serif;
}

.bgimg {
  background-position: center;
  background-size: cover;
  background-image: url("/image/coffeehouse.jpg");
  min-height: 75%;
}

.menu {
  display: none;
}
</style>
</head>
<body>

<!-- Links (sit on top) -->
<div class="w3-top">
  <div class="w3-row w3-padding w3-black">
    <div class="w3-col s3">
      <a href="index.php" class="w3-button w3-block w3-black">HOME</a>
    </div>
  </div>
</div>

<!-- Header with image -->
<header class="bgimg w3-display-container w3-grayscale-min" id="home">
  <div class="w3-display-middle w3-center">
    <span class="w3-text-white" style="font-size:90px">the<br>Cafe</span>
  </div>
</header>

<!-- Add a background color and large text to the whole page -->
<div class="w3-sand w3-grayscale w3-large">

<!-- About Container -->
<form method="post" action="" name="contact_form">
    <div class="w3-container" id="about">
      <div class="w3-content" style="max-width:700px">
        <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">Contact us !</span></h5>
        <p>Email</p>
        <input type='text' id='mail' name='mail' required />
        <p>Message</p>
        <input type='text' id='message' name='message' required />
        </br>
        </br>
        <input type='submit' value='Send message'></submit>
      </div>
    </div>
</form>

<!-- End page content -->
</div>

<!-- Footer -->
<footer class="w3-center w3-light-grey w3-padding-48 w3-large">
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
</footer>

<script>
// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();
</script>

</body>
</html>