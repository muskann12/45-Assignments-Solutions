//Qyestion 33
//array
let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,];

//using for loop
for(let oneNumber of number){
    let ordinal :string;
    
    if(oneNumber === 1){
        ordinal = "st"
        
    }
    else if (oneNumber === 2){
        ordinal = "nd"
    }
    else if (oneNumber === 3){
        ordinal = "rd"
    }
   else{
    ordinal = "th"
   }
   console.log(`${oneNumber}${ordinal}`);
}