<?php
  include("variables.php");
  $nb = 0;
  session_start();
  if (!isset($_SESSION['username'])) {
    header('Location: connection.php');
  }
  if (!empty($_POST['username']) && !empty($_POST['password'])) {
    $error = "WARNING ! You can only change one parameter per time !";
  } else {
    if (!empty($_POST['username'])) {
      foreach ($users as $user) {
        if ($_SESSION['username'] === $user['username']) {
          $_SESSION['newuser'] = $_POST['username'];
          header("Location: variables.php");
        }
      }
    }
    if (!empty($_POST['password'])) {
      foreach ($users as $user) {
        if ($_SESSION['username'] === $user['username']) {
          $_SESSION['newpass'] = $_POST['password'];
          header("Location: variables.php");
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
    <div class="w3-col s3">
      <a class="w3-button w3-block w3-black">PANEL USER</a>
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

<?php
  if (isset($error)) {
    echo('<br>');
    echo("<center><p id='error'>".$error."<p></center>");
  }
?>
<!-- About Container -->
<form method="post" action="" name="modify_info ">
  <div class="w3-container" id="about">
    <div class="w3-content" style="max-width:700px">
      <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">User panel</span></h5>
      <p>Username : <?php echo($_SESSION['username']);?></p>
      <p>Change Username</p>
      <input type='text' id='username' name='username'/>
    </br>
    </br>
      <p>Change Password</p>
      <input type='text' id='password' name='password' />
    </br>
  </br>
  <p>Notes :</p>
  <?php
    foreach ($users as $user) {
      if ($user['username'] === $_SESSION['username']) {
        echo("<p>" . $user['notes'] . "</p>");
      }
    }
  ?>
  <input type='submit' id='changemdp' value='Modify'></submit>
    </div>
  </div>
</form>

<!-- End page content -->
</div>

<!-- Footer -->
<footer class="w3-center w3-light-grey w3-padding-48 w3-large">
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
</footer>

</body>
</html>