//Question 32
//current user
var current_users = ["muskan", "noor", "ahmed", "Ayesha", "Nisar"];
//new users 
var new_users = ["Hani", "Zainab", "Noor", "Ahmed", "Muskan"];
//loop through new users 
new_users.forEach(function (new_one_user) {
    //making conditions for usernames already exist and save in our_condition variable 
    var our_condition = current_users.some(function (curent_one_user) { return curent_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    //print different messages using if-else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is availabe"));
    }
});
