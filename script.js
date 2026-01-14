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