// Function to display the active section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.classList.remove("active");
    });

    // Remove active class from all sidebar links
    const links = document.querySelectorAll(".sidebar ul li");
    links.forEach((link) => {
        link.classList.remove("active");
    });

    // Show the selected section and highlight the corresponding link
    document.getElementById(sectionId).classList.add("active");
    document.querySelector(`.sidebar ul li[onclick="showSection('${sectionId}')"]`).classList.add("active");
}

// Dynamic search for student details
function searchStudent() {
    const searchInput = document.getElementById("studentSearchBar").value.toLowerCase();
    const studentDetails = document.getElementById("studentDetails");

    // Dummy student data
    const students = [
        { name: "Alice Johnson", id: "S001", grade: "A" },
        { name: "Bob Smith", id: "S002", grade: "B+" },
        { name: "Charlie Brown", id: "S003", grade: "A-" },
    ];

    // Filter students based on search input
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchInput)
    );

    // Display results
    if (filteredStudents.length > 0) {
        studentDetails.innerHTML = filteredStudents
            .map(
                (student) =>
                    `<div class="student-card">
                        <p><strong>Name:</strong> ${student.name}</p>
                        <p><strong>ID:</strong> ${student.id}</p>
                        <p><strong>Grade:</strong> ${student.grade}</p>
                    </div>`
            )
            .join("");
    } else {
        studentDetails.innerHTML = "<p>No students found.</p>";
    }
}

// Function to load attendance sheet based on selected class
function loadAttendanceSheet() {
    const classSelect = document.getElementById("classSelect");
    const selectedClass = classSelect.value;
    const attendanceSheet = document.getElementById("attendanceSheet");

    // Show the attendance sheet if a class is selected
    if (selectedClass) {
        attendanceSheet.style.display = "block";
        generateAttendanceRows(selectedClass);
    } else {
        attendanceSheet.style.display = "none";
    }
}

// Function to generate attendance rows dynamically based on the selected class
function generateAttendanceRows(selectedClass) {
    const attendanceTableBody = document.getElementById("attendanceTableBody");

    // Dummy data for students in each class
    const studentsInClass = {
        classA: [
            { name: "A SAINI", usn: "3VC22CD001" },
            { name: "A VISHNU PRIYA", usn: "3VC22CD002" },
            { name: "ABDUL KHADER", usn: "3VC22CD003" },
            { name: "ANKAR", usn: "3VC22CD004" },
            { name: "ATIYA FIRDOUS", usn: "3VC22CD005" },
            { name: "B CHIRANJEEVI REDDY", usn: "3VC22CD006" },
            { name: "BANDI MANOJ KUMAR", usn: "3VC22CD007" },
            { name: "D THANUJA", usn: "3VC22CD008" },
            { name: "DEEKSHITHA V", usn: "3VC22CD009" },
            { name: "G HARSHITHA", usn: "3VC22CD010" },
            { name: "G PRASHANTH", usn: "3VC22CD011" },
            { name: "GAGAN KUMAR", usn: "3VC22CD012" },
            { name: "GANDLA VYSHNAVI", usn: "3VC22CD013" },
            { name: "GOUTHAMI BM", usn: "3VC22CD014" },
            { name: "H MALLIKARJUNA", usn: "3VC22CD015" },
            { name: "HARIPRASAD G", usn: "3VC22CD016" },
            { name: "HARSHITHA S", usn: "3VC22CD017" },
            { name: "HEMANTH ΝΑΙΚ Κ Β", usn: "3VC22CD018" },
            { name: "INDU PRIYA", usn: "3VC22CD019" },
            { name: "JAYASHREE", usn: "3VC22CD020" },
            { name: "K MEDHASHREE", usn: "3VC22CD021" },
            { name: "K MONICA", usn: "3VC22CD022" },
            { name: "SANTHOSH K", usn: "3VC22CD023" },
            { name: "KEERTHI R", usn: "3VC22CD024" },
            { name: "KUSUMA J", usn: "3VC22CD025" },
            { name: "MADHU REKHA", usn: "3VC22CD026" },
            { name: "M MAHIMA RANI", usn: "3VC22CD027" },
            { name: "M MALLIKARJUN", usn: "3VC22CD028" },
            { name: "M PRATHIBA", usn: "3VC22CD029" },
            { name: "MALI PATIL MEGHANA", usn: "3VC22CD030" },
            { name: "MATAM SANGAMESHWARA S V", usn: "3VC22CD031" },
            { name: "MILITARY MOHAMMAD USMAN ", usn: "3VC22CD032" },
            { name: "MOHAMMAD AMANULLA", usn: "3VC22CD033" },
            { name: "MUTTANNA AADIN", usn: "3VC22CD034" },
            { name: "NARA MOUNIKA", usn: "3VC22CD035" },
            { name: "P JAI SREE", usn: "3VC22CD036" },
            { name: "PADMINI", usn: "3VC22CD037" },
            { name: "PUPPALA PRUDHVI SAI RAJ", usn: "3VC22CD038" },
            { name: "RV SINDHU", usn: "3VC22CD039" },
            { name: "S ANJUM", usn: "3VC22CD040" },
            { name: "S DATTA DHARMA SAI", usn: "3VC22CD041" },
            { name: "S JABEENA", usn: "3VC22CD042" },
            { name: "S SAI VIVEK", usn: "3VC22CD043" },
            { name: "SAI PREETHI B", usn: "3VC22CD044" },
            { name: "SATISH V", usn: "3VC22CD045" },
            { name: "SAYYAD KHAJA SADRUDDIN", usn: "3VC22CD046" },
            { name: "SHAIK IRFAN", usn: "3VC22CD047" },
            { name: "SINDU M", usn: "3VC22CD048" },
            { name: "SINDU MS", usn: "3VC22CD049" },
            { name: "SNEHA M", usn: "3VC22CD050" },
            { name: "SUDEEP RAJOLLI", usn: "3VC22CD051" },
            { name: "SUMA G", usn: "3VC22CD052" },
            { name: "SWETHA T", usn: "3VC22CD053" },
            { name: "SYED SHADAB", usn: "3VC22CD054" },
            { name: "TM RAMESH SWAMY", usn: "3VC22CD055" },
            { name: "TARUN KUMAR", usn: "3VC22CD056" },
            { name: "TATI AKASH", usn: "3VC22CD057" },
            { name: "THANUSHA G", usn: "3VC22CD058" },
            { name: "UJWAL", usn: "3VC22CD059" },
            { name: "VENNAPUSA PUJITHA", usn: "3VC22CD060" },
            { name: "VISHAL PRAJAPATHI", usn: "3VC22CD061" },
            { name: "Y TEJASWINI", usn: "3VC22CD062" },
            { name: "UMME KULSUM", usn: "3VC22CD063" },
            { name: "SANTHOSH KUMAR", usn: "3VC22CD064" },
        ],
        classB: [
            { name: "ADITHYA PRAKASH R", usn: "C25" },
            { name: "AKSHAY KUMAR U", usn: "C26" },
            { name: "B M VYSHNAVI", usn: "C27" },
            { name: "B MANJUNATH", usn: "C28" },
            { name: "B S ESHWAR", usn: "C29" },
            { name: "DHARANI G", usn: "C30" },
            { name: "DIWAKAR BABU K", usn: "C31" },
            { name: "G GOWTHAM", usn: "C32" },
            { name: "GANIGA RAVI KIRAN", usn: "C33" },
            { name: "H V VIKAS", usn: "C34" },
            { name: "K GAYATHRI", usn: "C35" },
            { name: "K M SANDESH", usn: "C36" },
            { name: "LOKESH V", usn: "C37" },
            { name: "M AISHWARYA", usn: "C38" },
            { name: "M BHARATH KUMAR", usn: "C39" },
            { name: "MALLIKARJUN", usn: "C40" },
            { name: "MANU B N", usn: "C41" },
            { name: "MEHABOOB BASHA", usn: "C42" },
            { name: "MOHAMMED WASIM", usn: "C43" },
            { name: "MOHAN M", usn: "C44" },
            { name: "N M TRIVENI", usn: "C45" },
            { name: "NANDEESH GOUDA K G", usn: "C46" },
            { name: "NISCHITA A", usn: "C47" },
            { name: "PARVATI", usn: "C48" },
            { name: "RAKESH KALLAPPA DODAMANI", usn: "C49" },
            { name: "RAKSHITA", usn: "C50" },
            { name: "S M GUNA SEKHER REDDY", usn: "C51" },
            { name: "SAFIYA TAJ", usn: "C52" },
            { name: "SAHANA P", usn: "C53" },
            { name: "MEGHANA P", usn: "C54" },
            { name: "B AKHILA", usn: "C55" },
            { name: "TANUSHA", usn: "C56" },
            { name: "JYOTHI S M", usn: "C57" },
            { name: "SYEDA SUHAA", usn: "C58" },
            { name: "K SHANKARA", usn: "C59" }
            
        ],
        classC: [
            { name: "Eve Adams", usn: "S005" },
            { name: "Frank White", usn: "S006" },
        ],
    };

    const students = studentsInClass[selectedClass] || [];
    attendanceTableBody.innerHTML = students
        .map(
            (student) => `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.usn}</td>
                    <td><input type="radio" name="attendance-${student.usn}" value="present"> Present</td>
                    <td><input type="radio" name="attendance-${student.usn}" value="absent"> Absent</td>
                </tr>`
        )
        .join("");
}

// Function to submit attendance
function submitAttendance() {
    const message = document.getElementById("attendanceMessage");
    message.innerHTML = "Attendance successfully submitted!";
    message.style.color = "green";
}

// Dynamic Assignment Progress Chart
function renderAssignmentChart() {
    const ctx = document.getElementById("assignmentChart").getContext("2d");

    // Dummy data for assignments
    const assignmentData = {
        labels: ["Math", "Science", "History", "English", "Biology"],
        datasets: [
            {
                label: "Completed Assignments",
                data: [8, 6, 7, 9, 5],
                backgroundColor: [
                    "#4caf50",
                    "#2196f3",
                    "#ff9800",
                    "#e91e63",
                    "#9c27b0",
                ],
                borderWidth: 1,
            },
        ],
    };

    // Chart configuration
    new Chart(ctx, {
        type: "bar",
        data: assignmentData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

// Run on page load
window.onload = function () {
    // Render the assignment chart
    renderAssignmentChart();
    // Default to show the home section
    showSection("home");
};
