<?php

include('db.php');
include('stdent management system/Main login.html');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['signIn'])) {

        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();

            if (password_verify($password, $users['password'])) {
                header("Location: ../stdent management system/Main login.html");
            } else {
                echo "Invalid password!";
            }
        } else {
            echo "No user found with this email!";
        }
    }
}

$conn->close();
?>
