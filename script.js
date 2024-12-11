// 1. Function to calculate power (a^b)
function power(a, b) {
    return Math.pow(a, b);
}
document.write("<h2>1. Power Function</h2>");
document.write("<p style='font-size: 18px;'>Result: " + power(2, 3) + "</p>");

// 2. Function to determine if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
document.write("<h2>2. Leap Year Check</h2>");
document.write("<p style='font-size: 18px;'>Is 2024 a Leap Year? " + isLeapYear(2024) + "</p>");

// 3. Function to calculate the area of a triangle
function calculateAreaOfTriangle(a, b, c) {
    function calculateSemiPerimeter(a, b, c) {
        return (a + b + c) / 2;
    }
    let S = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
document.write("<h2>3. Area of a Triangle</h2>");
document.write("<p style='font-size: 18px;'>Area: " + calculateAreaOfTriangle(3, 4, 5) + "</p>");

// 4. Functions to calculate average and percentage
function average(marks) {
    return marks.reduce((a, b) => a + b, 0) / marks.length;
}

function percentage(marks, totalMarksPerSubject) {
    let totalObtained = marks.reduce((a, b) => a + b, 0);
    return (totalObtained / (marks.length * totalMarksPerSubject)) * 100;
}

function mainFunction(marks, totalMarksPerSubject) {
    let avg = average(marks);
    let perc = percentage(marks, totalMarksPerSubject);
    document.write("<h2>4. Average and Percentage</h2>");
    document.write("<p style='font-size: 18px;'>Average: " + avg + "</p>");
    document.write("<p style='font-size: 18px;'>Percentage: " + perc + "%</p>");
}
mainFunction([85, 90, 80], 100);

// 5. Custom indexOf function
function customIndexOf(string, character) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }
    return -1;
}
document.write("<h2>5. Custom IndexOf</h2>");
document.write("<p style='font-size: 18px;'>Position of 'e' in 'hello': " + customIndexOf("hello", "e") + "</p>");

// 6. Function to delete all vowels from a sentence
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}
document.write("<h2>6. Remove Vowels</h2>");
document.write("<p style='font-size: 18px;'>Result: " + removeVowels("This is a test sentence") + "</p>");

// 7. Function to count occurrences of two vowels in succession
function countSuccessiveVowels(text) {
    let count = 0;
    for (let i = 0; i < text.length - 1; i++) {
        if (/[aeiouAEIOU]/.test(text[i]) && /[aeiouAEIOU]/.test(text[i + 1])) {
            count++;
        }
    }
    return count;
}
document.write("<h2>7. Count Successive Vowels</h2>");
document.write("<p style='font-size: 18px;'>Occurrences of successive vowels: " + countSuccessiveVowels("This is a beautiful piece of text") + "</p>");

// 8. Functions to convert distance
function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}
let distanceKm = 5;
document.write("<h2>8. Distance Conversion</h2>");
document.write("<p style='font-size: 18px;'>Distance in Meters: " + toMeters(distanceKm) + "</p>");
document.write("<p style='font-size: 18px;'>Distance in Feet: " + toFeet(distanceKm) + "</p>");
document.write("<p style='font-size: 18px;'>Distance in Inches: " + toInches(distanceKm) + "</p>");
document.write("<p style='font-size: 18px;'>Distance in Centimeters: " + toCentimeters(distanceKm) + "</p>");

// 9. Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.0;
    if (hoursWorked > regularHours) {
        return (hoursWorked - regularHours) * overtimeRate;
    }
    return 0;
}
document.write("<h2>9. Overtime Pay</h2>");
document.write("<p style='font-size: 18px;'>Overtime Pay for 45 hours: Rs. " + calculateOvertimePay(45) + "</p>");

// 10. Function to calculate currency notes
function calculateCurrencyNotes(amount) {
    const notes = { 100: 0, 50: 0, 10: 0 };
    if (amount >= 100) {
        notes[100] = Math.floor(amount / 100);
        amount %= 100;
    }
    if (amount >= 50) {
        notes[50] = Math.floor(amount / 50);
        amount %= 50;
    }
    if (amount >= 10) {
        notes[10] = Math.floor(amount / 10);
        amount %= 10;
    }
    return notes;
}
let withdrawAmount = 570;
let notes = calculateCurrencyNotes(withdrawAmount);
document.write("<h2>10. Currency Notes</h2>");
document.write("<p style='font-size: 18px;'>Rs. 100 Notes: " + notes[100] + "</p>");
document.write("<p style='font-size: 18px;'>Rs. 50 Notes: " + notes[50] + "</p>");
document.write("<p style='font-size: 18px;'>Rs. 10 Notes: " + notes[10] + "</p>");
