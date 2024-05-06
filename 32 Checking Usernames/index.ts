//Question 32
// array of current user

let current_users = ["muskan" , "noor" , "ahmed" , "Ayesha" , "Nisar" ]
 // array of new users 
let new_users = ["Hani" , "Zainab" , "Noor" , "Ahmed" , "Muskan"] 

//loop through new users to check availiblity   
new_users.forEach(new_one_user =>{
    //making conditions for usernames already exist and save in our_condition variable 
    let our_condition = current_users.some(curent_one_user => curent_one_user.toLocaleLowerCase()=== new_one_user.toLocaleLowerCase())
   //print different messages using if-else statements
    if(our_condition){

        console.log(`sorry ${new_one_user} is already taken`)
    }
    else{
        console.log(`this username ${new_one_user} is availabe`)
    }
})
