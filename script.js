// mockapi.ntig.dev/students/2000
// mockapi.ntig.dev/courses/3000

// only console log fetch
fetch('https://mockapi.ntig.dev/students/2000')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching student data:', error));

fetch('https://mockapi.ntig.dev/courses/3000')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching student data:', error));

// fetch and display data in the DOM
const studentContainer = document.getElementById('student-info');
const courseContainer = document.getElementById('course-info');
fetch('https://mockapi.ntig.dev/students/2000')
    .then(response => response.json())
    .then(data => {
        studentContainer.innerHTML = `
            <h2>Student Information</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Birthdate:</strong> ${data.birthdate}</p>
        `;
    })
    .catch(error => console.error('Error fetching student data:', error));

fetch('https://mockapi.ntig.dev/courses/3000')
    .then(response => response.json())
    .then(data => {
        courseContainer.innerHTML = `
            <h2>Course Information</h2>
            <p><strong>Name:</strong> ${data.name}</p>
        `;
    })
    .catch(error => console.error('Error fetching course data:', error));