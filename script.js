let age = 18

if(age>=18) {
    console.log("Allowed for Driving!")
}
else {
    console.log("Not Allowed for Driving!")
}

let number = 10;

if (number > 0) {
    console.log("The number is Even.");
}

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Just Another Day");
}


let temperature = 35;

let weather = (temperature > 30) ? "Hot Day" : "Cool Day";

console.log(weather);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}

 

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}