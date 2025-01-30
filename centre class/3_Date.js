// JavaScript Date Checks and Functions

console.log("== JavaScript Date Checks and Functions ==");

// Get current date and time
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// 1. Check if a date is valid
let validDate = new Date("2024-11-13");
let invalidDate = new Date("invalid-date");
console.log("Is '2024-11-13' a valid date?:", !isNaN(validDate));
console.log("Is 'invalid-date' a valid date?:", !isNaN(invalidDate));

// 2. Check if a date is in the future
let futureDate = new Date("2025-01-01");
console.log("Is '2025-01-01' in the future?:", futureDate > currentDate);

// 3. Check if a date is in the past
let pastDate = new Date("2023-01-01");
console.log("Is '2023-01-01' in the past?:", pastDate < currentDate);

// 4. Check if a date is today
let todayDate = new Date();
let isToday = (todayDate.toDateString() === currentDate.toDateString());
console.log("Is today the current date?:", isToday);

// 5. Check if a date is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
let year = 2024;
console.log(`${year} is a leap year?:`, isLeapYear(year));

// 6. Get the day of the week (0-6, where 0 is Sunday)
console.log("Day of the week (0-6):", currentDate.getDay());  // Sunday = 0, Monday = 1, etc.

// 7. Get the name of the day
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Day name:", dayNames[currentDate.getDay()]);

// 8. Get the current month (0-11)
console.log("Current month (0-11):", currentDate.getMonth());  // January = 0, February = 1, etc.

// 9. Get the full name of the month
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Full month name:", monthNames[currentDate.getMonth()]);

// 10. Get the current year
console.log("Current year:", currentDate.getFullYear());

// 11. Get the current date (1-31)
console.log("Current day of the month:", currentDate.getDate());

// 12. Get the current hour (0-23)
console.log("Current hour:", currentDate.getHours());

// 13. Get the current minutes (0-59)
console.log("Current minutes:", currentDate.getMinutes());

// 14. Get the current seconds (0-59)
console.log("Current seconds:", currentDate.getSeconds());

// 15. Check if a date is a weekend (Saturday or Sunday)
let isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
console.log("Is today a weekend?:", isWeekend);

// 16. Compare two dates
let date1 = new Date("2024-11-01");
let date2 = new Date("2024-11-15");
console.log("Is '2024-11-01' earlier than '2024-11-15'?:", date1 < date2);

// 17. Add days to a date
function addDaysToDate(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
let newDate = addDaysToDate(currentDate, 10);
console.log("Current date + 10 days:", newDate);

// 18. Format date as YYYY-MM-DD
function formatDateToISO(date) {
    return date.toISOString().split('T')[0];
}
console.log("Formatted date (YYYY-MM-DD):", formatDateToISO(currentDate));

// 19. Check if a date is the first day of the month
let isFirstDay = currentDate.getDate() === 1;
console.log("Is today the first day of the month?:", isFirstDay);

// 20. Get the number of days in the current month
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
let daysInCurrentMonth = getDaysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear());
console.log("Days in current month:", daysInCurrentMonth);

console.log("== End of JavaScript Date Checks and Functions ==");
