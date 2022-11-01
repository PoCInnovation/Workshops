<?php

session_start();

$_SESSION['chgusr1'];
$_SESSION['chgusr2'];
$_SESSION['chgmdp1'];
$_SESSION['chgmdp2'];

if ($_SESSION['hack'] == 1) {
    $_SESSION['mdp1'] = $_SESSION['newpass'];
    print_r($_SESSION['mdp1']);
    $_SESSION['chgmdp1'] = 1;
    $_SESSION['newpass'] = "";
    $_SESSION['hack'] = "0";
    header('Location: contact.php');
}

if (!empty($_SESSION['newuser']) and ($_SESSION['username'] == "admin")) {
    $user1 = $_SESSION['newuser'];
    $_SESSION['username'] = $_SESSION['newuser'];
    $_SESSION['chgusr1'] = 1;
    $locate = "Location: redirect.php?username=";
    $var = $locate . $_SESSION['newuser'];
    $_SESSION['newuser'] = "";
    header($var);
} else if (!empty($_SESSION['newuser']) and ($_SESSION['username'] != "admin")) {
    $_SESSION['user2'] = $_SESSION['newuser'];
    $_SESSION['chgusr2'] = 1;
    $_SESSION['username'] = $_SESSION['newuser'];
    $locate = "Location: redirect.php?username=";
    $var = $locate . $_SESSION['newuser'];
    $_SESSION['newuser'] = "";
    header($var);
}
if (!empty($_SESSION['newpass']) and ($_SESSION['username'] == "admin")) {
    $mdp1 = $_SESSION['newpass'];
    $_SESSION['chgmdp1'] = 1;
    $locate = "Location: redirect.php?password=";
    $var = $locate . $_SESSION['newpass'];
    $_SESSION['newpass'] = "";
    header($var);
} else if (!empty($_SESSION['newpass']) and ($_SESSION['username'] != "admin")) {
    $_SESSION['mdp2'] = $_SESSION['newpass'];
    $_SESSION['chgmdp2'] = 1;
    $locate = "Location: redirect.php?password=";
    $var = $locate . $_SESSION['newpass'];
    $_SESSION['newpass'] = "";
    header($var);
}

if ($_SESSION['chgusr1'] != 1) {
    $user1 = "admin";
} else {
    $user1 = $_SESSION['user1'];
}
if ($_SESSION['chgusr2'] != 1) {
    $user2 = "guest";
} else {
    $user2 = $_SESSION['user2'];
}
if ($_SESSION['chgmdp1'] != 1) {
    $mdp1 = "ghjiroeohgor3522F23fgre";
} else {
    $mdp1 = $_SESSION['mdp1'];
}
if ($_SESSION['chgmdp2'] != 1) {
    $mdp2 = "azert1234";
} else {
    $mdp2 = $_SESSION['mdp2'];
}

$users = [
    [
        'username' => $user1,
        'email' => 'admin@thecafe.com',
        'password' => $mdp1,
        'notes' => 'This is the flag PoC{CRLFisN0tc0mpl1c4t3d}'
    ],
    [
        'username' => $user2,
        'email' => 'guest@thecafe.com',
        'password' => $mdp2,
        'notes' => 'This is a note'
    ]
];

?>