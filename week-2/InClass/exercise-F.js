function usernameChecker(username, usertype) {
    if (username.length  == 5 >= 10) {
        return `Username valid`;
      } else if (username == username.toUpperCase() && usertype  == "admin" || "manager") {
          return `Username valid`;
      } else {
        return `Username invalid`;
      } 
}
    
 console.log(usernameChecker("Anannnnnnnnnnnmmmmmmmmmmmm", "user"))