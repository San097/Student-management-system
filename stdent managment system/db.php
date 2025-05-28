<?php
$host = 'localhost';
$db = 'admin_dashboard';
$user = 'root';
$pass = '';

// Establish database connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
