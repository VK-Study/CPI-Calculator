// Define the number of credits for each semester
var creditsPerSemester = [20, 22, 22, 22, 19, 21, 18]; // Example: 20 credits per semester for 5 semesters

// Function to create input fields for a new semester
function createSemesterInput() {
    var semesterInput = document.createElement('div');
    var semesterIndex = document.querySelectorAll('.semesterEntry').length + 1; // Calculate the semester index
    semesterInput.classList.add('semesterEntry');
    semesterInput.innerHTML = '<label for="semesterCGPA">Enter Semester CGPA for Semester ' + semesterIndex + ':</label>' +
        '<input type="number" class="semesterCGPA" step="0.01">' +
        '<p class="semesterCredits">Credits: ' + creditsPerSemester[semesterIndex - 1] + '</p>' +
        '<button class="deleteSemesterBtn">Delete Semester</button>';
    return semesterInput;
}

// Function to add a new semester input
function addSemesterInput() {
    var inputFields = document.getElementById('inputFields');
    inputFields.appendChild(createSemesterInput());
}

// Function to remove a semester input
function removeSemesterInput(button) {
    var semesterEntry = button.parentElement;
    semesterEntry.remove();
}

// Event listener for adding a new semester input
document.getElementById('addSemesterBtn').addEventListener('click', addSemesterInput);

// Event listener for deleting a semester input
document.getElementById('inputFields').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('deleteSemesterBtn')) {
        removeSemesterInput(event.target);
    }
});

// Function to calculate overall CPI
function calculateOverallCPI() {
    var semesterInputs = document.querySelectorAll('.semesterCGPA');
    var totalSGPACredits = 0;
    var totalCredits = 0;

    // Calculate total SGPA Credits and total Credits
    for (var i = 0; i < semesterInputs.length; i++) {
        var semesterCGPA = parseFloat(semesterInputs[i].value);
        var semesterCredits = creditsPerSemester[i]; // Get predefined credits for this semester
        if (!isNaN(semesterCGPA)) {
            totalSGPACredits += semesterCGPA * semesterCredits;
            totalCredits += semesterCredits;
        }
    }

    // Calculate overall CPI
    var overallCPI = totalSGPACredits / totalCredits;
    return overallCPI;
}

// Event listener for calculating overall CPI
document.getElementById('calculateBtn').addEventListener('click', function() {
    var overallCPI = calculateOverallCPI();
    if (isNaN(overallCPI)) {
        document.getElementById('result').innerHTML = "Please enter valid CGPA for each semester.";
    } else {
        document.getElementById('result').innerHTML = "Your Overall CPI is: " + overallCPI.toFixed(2);
    }
});
