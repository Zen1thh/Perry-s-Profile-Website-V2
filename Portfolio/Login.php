<?php
    session_start();
    include "database.php"; 
    if (isset($_POST["login"])) {
        $email = $_POST["email"];
        $password = $_POST["password"];

        // Check if email or password is empty
        if (empty($email) || empty($password)) {
            echo "<div id='error-message' class='alert alert-danger'>Please enter a valid email and password!</div>";
        } else {
            $sql = "SELECT * FROM users WHERE email = '$email'"; 
            $result = mysqli_query($conn, $sql);
            $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
            if ($user) {
                if (password_verify($password, $user["password"])) {
                    header("Location: /Portfolio/WEBPROG PORTFOLIO/index.php");
                    die();
                } else {
                    echo "<div id='error-message' class='alert alert-danger'>Password does not match!</div>";
                }
            } else {
                echo "<div id='error-message' class='alert alert-danger'>Email does not match!</div>";
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="Login.css">
    <style>
        .alert.alert-danger {
            background-color: #A53F3F; /* Red alert background color */
            color: #fff; /* Red alert text color */
            padding: 0px;
            border: 5px solid transparent;
            border-radius: 0px;
            text-align: center;
            font-size: 20px;
            font-weight: 50px;
            font-family: 'Source Sans Pro', sans-serif;
            
        }

        .alert.alert-danger strong {
            font-weight: bold;
            

        }

        .alert.alert-danger a {
            color: #721c24; /* Red alert link color */
        }

        .alert.alert-danger a:hover {
            color: #491217; /* Red alert link hover color */
        }

        /* Optionally, you can add animation for the alert */
        @keyframes fadeInOut {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }

        .alert.alert-danger.animated {
            animation: fadeInOut 5s ease-in-out;
        }
    </style>
    <script src="Login.js" defer></script>
</head>
<body>
    <canvas id="canvas" width="100%" height="100%"></canvas>
    <div class="container">
        <form id="loginForm" class="box" method="POST">
        <h5>Sign in to your account.</h5>
            <input type="text" name="email" placeholder="Email" autocomplete="off">
            <i class="typcn typcn-eye" id="eye"></i>
            <input type="password" name="password" placeholder="Password" id="pwd" autocomplete="off">
            <input type="submit" value="Sign in" class="btn1" name="login">
        </form>
        <a href="/PORTFOLIO/registration.php" class="dnthave">Don’t have an account? Sign up</a>
    </div>
</body>
</html>
