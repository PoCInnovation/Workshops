<?php

if (isset($_REQUEST['TON CODE'])) {
    if ($_REQUEST['TON CODE'])
    {
        $mdp = $_REQUEST['TON CODE'];
    }
}
$mdp = 'cfhueirzhfuez324254éhfiurehf';

$users = [
    [
        'full_name' => 'Lenny Vongphouthone',
        'email' => 'lennyVongphouthone@Cuisto.fr',
        'age' => 18,
        'password' => $mdp
    ]
];

$recipes = [
    [
        'title' => 'Cassoulet',
        'recipe' => 'Un plat en Or',
        'author' => 'lenny.vongphouthone@example.com',
        'is_enabled' => true,
    ],
];

if(isset($_GET['limit']) && is_numeric($_GET['limit'])) {
    $limit = (int) $_GET['limit'];
} else {
    $limit = 100;
}
