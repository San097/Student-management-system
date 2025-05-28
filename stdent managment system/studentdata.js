// Show Active Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Mark Assignments as Done
function markAsDone(button) {
    button.innerText = "Completed!";
    button.disabled = true;
    button.style.backgroundColor = "#555";
}

// Marks Chart Data
const marksData = {
    labels: ['Math', 'Science', 'History', 'English', 'Biology'],
    datasets: [{
        label: 'Marks',
        data: [90, 85, 78, 88, 92], // Add dynamic data as needed
        backgroundColor: ['#6a11cb', '#2575fc', '#34e89e', '#ff6a88', '#fbb03b'],
        borderColor: '#333',
        borderWidth: 1
    }]
};

// Render Marks Chart
const ctx = document.getElementById('marksChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: marksData,
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    },
});
