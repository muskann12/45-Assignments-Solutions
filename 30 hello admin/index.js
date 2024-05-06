var usernames = ["muskan", "noor", "admin", "ayesha", "nisar"];
//using foreach loop on array
usernames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello ".concat(oneuser, ", would you like to see status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
