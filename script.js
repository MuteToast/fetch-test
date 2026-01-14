// mockapi.ntig.dev/students/2000
// mockapi.ntig.dev/courses/3000

fetch('https://mockapi.ntig.dev/students/2000')
    .then(response => response.json())
    .then(studentData => {
        console.log('Student Data:', studentData);
        return fetch(`https://mockapi.ntig.dev/courses/${studentData.courseId}`);
    })
    .then(response => response.json())
    .then(courseData => {
        console.log('Course Data:', courseData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });