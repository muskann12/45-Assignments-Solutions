//Question 14

let Guest_list :string [] = [ "Hani","Noor","Zainab"];
for (let i=0; i<Guest_list.length; i++){
    console.log("Assalam o Alikum" + " " +  Guest_list[i]  +' We are inviting you on dinner at my place');
}


// QUESTION 15

let Not_Coming :string = "Noor";
let New_Guest :string = "Ahmed";


console.log(Not_Coming + " "  + "Can not attend the dinner.");
 Guest_list[1] = New_Guest;
 for (let i=0; i<Guest_list.length;  i++){
console.log( "Assalam O Alikum" + " " + Guest_list[i] + " we invited you to the dinner at my place")
 }
 //QUESTION 16
 console.log('Good news!! we found big table so we are inviting more peoples')

 Guest_list.unshift('ayesha nisar');
 Guest_list.splice(2 , 0 , "haadi");
 Guest_list.push("hadiya");
 
 for (let i=0; i<Guest_list.length;  i++){
    console.log( "Assalam O Alikum" + " " + Guest_list[i] + " we invited you to the dinner at my place")
 }



  
 