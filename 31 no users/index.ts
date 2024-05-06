let usernames = ["Muskan" , "Noor" , "Admin" , "Ayesha" , "Nisar"] 
usernames = []

if ( usernames.length === 0){
    console.log("we need to find some users!")
}
else{
usernames.forEach(oneuser =>{
        if( oneuser === "Admin"){
            console.log(`hello ${oneuser}, would you like to see status report?`)
        
        }
        else  {
            console.log(`hello ${oneuser}, thank you for logging in again`)
        }
    })
}