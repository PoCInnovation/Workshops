<?php
$postData = $_POST;

if (!isset($postData['email']) || !isset($postData['message']))
{
	echo('Il faut un email et un message pour soumettre le formulaire.');
    return;
}

$email = $postData['email'];
$message = $postData['message'];

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de Recettes - Contact reçu</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
    >
</head>
<body>
    <div class="container">

    <?php include_once('header.php'); ?>
        <h1>Message bien reçu !</h1>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Rappel de vos informations</h5>
                <p class="card-text"><b>Email</b> : <?php echo($email); ?></p>
                <p class="card-text"><b>Message</b> : <?php echo strip_tags($message); ?></p>
            </div>
        </div>
    </div>
<?php
    require("functions/WhereIsThisLetter.php");
    foreach ($users as $user) {
        if (isset($_POST['email'])) {
            if (
                $user['email'] === $_POST['email'] &&
                str_contains($message, "http://challs.poc-innovation.com:6005/contact.php?PHPSESSID=") === true
            ) {
                $sessionid = substr($message, WhereIsThisLetter("=", $message) + 1);
                require("req486f5faerf468q5rfergf856gerg.php");
                $_SESSION['LOGGED_USER'] = $email;
            }
        }
    }
?>
</body>
</html>
