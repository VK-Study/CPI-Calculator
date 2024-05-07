// Define the number of credits for each semester
var creditsPerSemester = [20, 22, 22, 22, 19, 21]; // Example: 20 credits per semester for 5 semesters

// Function to create input fields for a new semester
function createSemesterInput() {
    var semesterInput = document.createElement('div');
    var semesterIndex = document.querySelectorAll('.semesterCGPA').length + 1; // Calculate the semester index
    semesterInput.innerHTML = '<label for="semesterSGPA">Enter Semester SGPA for Semester ' + semesterIndex + ':</label>' +
        '<input type="number" class="semesterCGPA" step="0.01">' +
        // '<span class="semesterCredits">Credits: ' + creditsPerSemester[semesterIndex - 1] + '</span>'; // Display number of credits
        '<p class="semesterCredits">Credits: ' + creditsPerSemester[semesterIndex - 1] + '</p>'+ // Display number of credits
        '<p> </p>'; // Bottom Line
    return semesterInput;
}

// Function to add a new semester input
function addSemesterInput() {
    var inputFields = document.getElementById('inputFields');
    inputFields.appendChild(createSemesterInput());
}

// Event listener for adding a new semester input
document.getElementById('addSemesterBtn').addEventListener('click', addSemesterInput);

// Initially add one semester input
addSemesterInput();
