var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var startDate = new Date(currentYear, 0, 1); // Start of the year
var endDate = new Date(currentYear, 11, 31); // End of the year
var totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
var daysPassed = (currentDate - startDate) / (1000 * 60 * 60 * 24);
var completionPercentage = (daysPassed / totalDays) * 100;

var dynamicContent = document.getElementById('dynamic-content');
dynamicContent.textContent = "Today is " + currentDate.toDateString() + " and " + currentYear + " is " + completionPercentage.toFixed(2) + "% completed";

var progressFill = document.getElementById('progressFill');
progressFill.style.width = completionPercentage.toFixed(2) + '%';
