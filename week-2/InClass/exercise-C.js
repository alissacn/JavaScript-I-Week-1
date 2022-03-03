
function numberChecker(num) {
  if (num > 20) { //checks if a number is greater than 20.
    return `${num} is greater than 20`; //returns this message if the number is greater than 20.
  } else if (num === 20) { //checks if a number is equal than 20.
    return `${num} is equal to 20`; //returns this message if the number is equal than 20.
  } else if (num < 20) { //checks if a number is less than 20.
    return `${num} is less than 20`; //returns this message if the number is less than 20.
  } else {
    return `${num} isn't even a number :(`; //If it´s not a number, prints the message "isn't even a number"
  }
}