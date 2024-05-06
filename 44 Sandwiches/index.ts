//Question 44
function makeSandwich(...items :string[]){ 
    console.log("\nMaking a sandwich using the following items \n ");
    
    items.forEach(singleitem=> console.log(singleitem)); {
       
        console.log("\nEnjoy the Sandwich!!")
    }
}

//Calling function three times with 3 arguments

makeSandwich("chicken" , "Cheesse" , "Cucumber" , "Egg");
makeSandwich("Egg" , "Mayo");
makeSandwich("Butter" , "Garlic" , "Cheese" , "Chicken" , "Sauce");

