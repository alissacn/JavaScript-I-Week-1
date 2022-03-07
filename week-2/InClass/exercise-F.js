/**
 * Exercise F (15 mins)
In pairs, write a function that checks a username is of an acceptable format

for a user type. The function must:

take two parameters one for the username and one for the user type
if the username starts with a capital letter and has length between 5 and 10 
characters long, it must return "Username valid"; otherwise, it must return "Username invalid"
if the user type is an admin or a manager, all usernames must return "Username valid"
 */

const ValidMessage = "Username valid!";
const InvalidMessage = "Username invalid!";

function usernameChecker(username, usertype) {
    if (usertype === "adim" || usertype === "manager") {
      return ValidMessage;
    } 
    
    else if (username.lenght >= 5 && username.lenght <= 10) {
      return ValidMessage;
    }
    
    else if (username[0] === username[0].toUpperCase()); {
      return InvalidMessage;
    } 
    return InvalidMessage; 
  }


console.log(usernameChecker("ana", "user"))






