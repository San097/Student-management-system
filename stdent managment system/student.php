<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    $branch = $_POST['branch'];
    $semester = $_POST['semester'];
    $total_fee = $_POST['total_fee'];
    $paid_fee = $_POST['paid_fee'];

    $sql = "INSERT INTO students (name, email, course, branch, semester, total_fee, paid_fee) 
            VALUES ('$name', '$email', '$course', '$branch', $semester, $total_fee, $paid_fee)";

    if ($conn->query($sql)) {
        echo "Student added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<form method="POST">
    <label>Name:</label><input type="text" name="name" required><br>
    <label>Email:</label><input type="email" name="email" required><br>
    <label>Course:</label><input type="text" name="course" required><br>
    <label>Branch:</label><input type="text" name="branch"><br>
    <label>Semester:</label><input type="number" name="semester" required><br>
    <label>Total Fee:</label><input type="number" name="total_fee" required><br>
    <label>Paid Fee:</label><input type="number" name="paid_fee"><br>
    <button type="submit">Add Student</button>
</form>
