//Write a function which takes your students array as an input. 
//In the function, use a for loop to iterate over the array and print the name of each student to the console.

let names = ["Student1", "Student2", "Student3"];

function StudentsArray(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students);
    }
}

console.log(StudentsArray(names));
