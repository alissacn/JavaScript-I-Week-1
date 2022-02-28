function bornyear(age) {
    return 2022 - age;
}

function ageAndname(name, age) {
    const year = bornyear(age);
    return "My names is " + name + " and I was born in " + year;
}

console.log(ageAndname("Alissa", 29));



