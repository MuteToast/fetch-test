// mockapi.ntig.dev/students/2000
// mockapi.ntig.dev/courses/3000

const studentContainer = document.getElementById("student-info");
const courseContainer = document.getElementById("course-info");

fetch('https://mockapi.ntig.dev/students/2000')
    .then(response => response.json())
    .then(data => {
        console.log("Student data:", data);
        studentContainer.innerHTML = "<h2>Student Information</h2>";
        data.forEach(student => {
            studentContainer.innerHTML += `
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Birthdate:</strong> ${student.birthdate}</p>
                <hr>
            `;
        });
    })
    .catch(error => console.error(error));

fetch('https://mockapi.ntig.dev/courses/3000')
    .then(response => response.json())
    .then(data => {
        console.log("Course data:", data);
        courseContainer.innerHTML = "<h2>Course Information</h2>";
        data.forEach(course => {
            courseContainer.innerHTML += `
                <p><strong>Name:</strong> ${course.name}</p>
                <hr>
            `;
        });
    })
    .catch(error => console.error(error));