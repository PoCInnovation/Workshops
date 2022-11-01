<?php
	include("./variables.php");
	session_start();
	if(isset($_SESSION['username'])){
		unset($_SESSION['username']);
        session_start();
        header('Location: index.php');
	}

	if (isset($_POST['reset'])) {
		session_unset();
		session_destroy();
	}

    if (isset($_POST['username']) && isset($_POST['password'])) {
        foreach ($users as $user) {
            if ($user['username'] === $_POST['username'] &&
                $user['password'] === $_POST['password']
            ) {
                $_SESSION['username'] = $user['username'];
                header('Location: index.php');
            } else {
                $erreur = "Les données sont incorrectes";
            }
        }
	}

?>

<!DOCTYPE html>

<html>

	<head>
		<meta charset="utf-8" />
		<title>Login page</title>
		<link rel = "stylesheet" href = "css/co.css"/>
	</head>
	<body>
		<form method="post" action="connection.php">
		<div>
		<h1>Login</h1>
			<table>
				<tr>
					<td>
						<label for="username">Username :</label>
					</td>
					<td>
						<input type="text" placeholder="Username" id="username" name="username" />
					</td>
				</tr>
				<tr>
					<td>
						<label for="mdp">Password :</label>
					</td>
					<td>
						<input type="password" placeholder="Password" id="password" name="password" />
					</td>
				</tr>
			</table>
			</form>
			<?php
					if(isset($erreur)){
					echo"<p class='erreur'>$erreur</p>";
				}
				?>
			<p><input type="submit" value="Connect" name="entrer" id="connect"/></p>
			<p><input type="submit" value="Reset chall" name="reset" id="reset"/></p>
			</br>
			<p><a id="accueil" href="index.php" title="accueil">Back to index</a></p>
		</div>
	</body>

</html>