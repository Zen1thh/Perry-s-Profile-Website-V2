<?php

$hostName = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "portfolio";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName); // Corrected the function name to mysqli_connect

if (!$conn) {
    die("Something went wrong!"); // Added a semicolon at the end of the line
}
