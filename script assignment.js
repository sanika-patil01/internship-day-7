// ===== Conditional Statements =====

// Inputs
let studentName = "Sanika";
let marks = 82;
let attendance = 78;
let department = "CS";

console.log("Student Name:", studentName);
console.log("Marks:", marks);
console.log("Attendance:", attendance + "%");

// Pass or Fail using if-else
if (marks >= 35) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

// Grade using if-else if ladder
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 35) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// Department using switch
switch (department) {
    case "CS":
        console.log("Department: Computer Science");
        break;
    case "IT":
        console.log("Department: Information Technology");
        break;
    case "CE":
        console.log("Department: Computer Engineering");
        break;
    case "ME":
        console.log("Department: Mechanical Engineering");
        break;
    default:
        console.log("Invalid Department");
}

// Attendance Eligibility using Ternary Operator
let eligibility = (attendance >= 75)
    ? "Eligible for Exam"
    : "Not Eligible for Exam";

console.log("Attendance Status:", eligibility);


// ===== Looping Statements =====

// For Loop: Print 1 to 20
console.log("\nFor Loop (1 to 20)");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// While Loop: Even numbers 2 to 20
console.log("\nWhile Loop (Even Numbers)");
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}

// Do-While Loop: 10 to 1 Reverse
console.log("\nDo-While Loop (10 to 1)");
let count = 10;
do {
    console.log(count);
    count--;
} while (count >= 1);


// ===== Break Statement =====

console.log("\nBreak Example");
for (let i = 1; i <= 20; i++) {
    if (i === 15) {
        break;
    }
    console.log(i);
}


// ===== Continue Statement =====

console.log("\nContinue Example");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}