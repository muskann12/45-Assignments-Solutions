//Question 44
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich using the following items \n ");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    {
        console.log("\nEnjoy the Sandwich!!");
    }
}
//Calling function three times with 3 arguments
makeSandwich("chicken", "Cheesse", "Cucumber", "Egg");
makeSandwich("Egg", "Mayo");
makeSandwich("Butter", "Garlic", "Cheese", "Chicken", "Sauce");
