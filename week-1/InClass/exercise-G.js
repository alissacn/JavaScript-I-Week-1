const numberofstudents = 25;
const numberofmentors = 15;
const totalofpeople = 35;

function percent(percentOfPeople) {
    return Math.round(percentOfPeople * 100 / totalofpeople);
}

console.log("The percentage of students is " + percent(numberofstudents) + "%.");
console.log("The percentage of mentors is " + percent(numberofmentors) + "%.");




