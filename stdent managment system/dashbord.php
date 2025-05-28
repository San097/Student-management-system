<?php
include 'db.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="adminstyle.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Admin Dashboard</h1>
            <nav class="nav">
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#students">Students</a></li>
                    <li><a href="#teachers">Teachers</a></li>
                    <li><a href="fee.php">Fee collection</a></li>
                    <li><a href="setting.php">Settings</a></li>
                </ul>
            </nav>
        </header>

        <main class="main-content">
            <section id="dashboard" class="section">
                <h2>Overview</h2>
                <div class="dashboard-stats">
                    <div class="stat">
                        <h3>Total Students</h3>
                        <p id="total-students">
                            <?php
                            $result = $conn->query("SELECT COUNT(*) AS total FROM students");
                            $row = $result->fetch_assoc();
                            echo $row['total'];
                            ?>
                        </p>
                    </div>
                    <div class="stat">
                        <h3>Total Teachers</h3>
                        <p id="total-teachers">
                            <?php
                            $result = $conn->query("SELECT COUNT(*) AS total FROM teachers");
                            $row = $result->fetch_assoc();
                            echo $row['total'];
                            ?>
                        </p>
                    </div>
                    <div class="stat">
                        <h3>Total Admins</h3>
                        <p id="total-admins">
                            <?php
                            $result = $conn->query("SELECT COUNT(*) AS total FROM admins");
                            $row = $result->fetch_assoc();
                            echo $row['total'];
                            ?>
                        </p>
                    </div>
                </div>
            </section>

            <section id="students" class="section">
                <h2>Students Management</h2>
                <button class="btn" onclick="location.href='student.php'">Add Student</button>
                <button class="btn" onclick="location.href='view_students.php'">View All Students</button>
            </section>

            <section id="teachers" class="section">
                <h2>Teachers Management</h2>
                <button class="btn" onclick="location.href='teacher.php'">Add Teacher</button>
                <button class="btn" onclick="location.href='view_teachers.php'">View All Teachers</button>
            </section>

            <section id="admins" class="section">
                <h2>Admin Management</h2>
                <button class="btn" onclick="location.href='add_admin.php'">Add Admin</button>
                <button class="btn" onclick="location.href='view_admins.php'">View All Admins</button>
            </section>
        </main>

        <footer class="footer">
            <p>&copy; 2024 Advanced Student Management System</p>
        </footer>
    </div>
</body>
</html>
