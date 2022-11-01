<?php
ini_set("session.use_trans_sid",true);
if (isset($_REQUEST['PHPSESSID'])) {
    if ($_REQUEST['PHPSESSID'])
    {
        session_id($_REQUEST['PHPSESSID']);
    }
}
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de Recettes - Page d'accueil</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
    >
</head>
<body class="d-flex flex-column min-vh-100">
    <div class="container">

    <!-- Navigation -->
    <?php include_once('header.php'); ?>

    <!-- Inclusion du formulaire de connexion -->
    <?php include_once('login.php'); ?>
        <h1>Site de Recettes !</h1>

        <!-- Si l'utilisateur existe, on affiche les recettes -->
        <div>
            Ce site est en pleine construction et est sous la direction de Lenny Vongphouthone
        </div>
        <div>Pour signalez un problème, veuillez envoyer un mail dans la rubrique "Contact" à l'une des personnes de notre équipe technique :</div>
        <div>Antony Jin : antonyJin@Cuisto.fr</div>
        <div>Tony Da Rodda: ToniDaRodda@Cuisto.fr</div>
        <div>Lenny Vongphouthone: lennyVongphouthone@Cuisto.fr</div>
    </div>

    <?php include_once('footer.php'); ?>
<?php
    if(array_key_exists('logout_user', $_POST)) {
        logout_user();
    }
    function logout_user() {
        session_unset();
        session_destroy();
        session_start();
        header("Refresh:0");
    }
?>
    <form method="post">
        <input type="submit" name="logout_user"
                class="button" value="Logout" />
    </form>
</body>
</html>