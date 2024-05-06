let usernames = ["muskan" , "noor" , "admin", "ayesha" , "nisar"]

//using foreach loop on array
usernames.forEach(oneuser =>{
    if( oneuser === "admin"){
        console.log(`hello ${oneuser}, would you like to see status report?`)
    
    }
    else  {
        console.log(`hello ${oneuser}, thank you for logging in again`)
    }
})