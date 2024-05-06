//Question 24
//variables
var vegetable = "potato";
var uppercasePotato = "POTATO";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "orange", "kiwi"];
//test 1 (eual not equal)
console.log("is potato is equal to potato");
console.log(vegetable == vegetable);
console.log("\nis potato not equal o potatao");
console.log(vegetable != vegetable);
//test 2 (using lowercase)
console.log("\nis POTATO is equal to potato");
console.log(uppercasePotato.toLowerCase() == vegetable);
console.log("\nis POTATO is not equal to potato");
console.log(uppercasePotato.toLocaleLowerCase() != vegetable);
//Test 3 (numerical test)
console.log("\n is 10 is equal to 20");
console.log(ten == twenty);
console.log("\nis 10 is not equal to 20");
console.log(ten != twenty);
console.log("\nis 10 greater then 0?");
console.log(ten > 0);
console.log("\nis 20 less then 10?");
console.log(twenty < ten);
console.log("\nis 10 greater then or equal to 2?");
console.log(ten >= 2);
console.log("\nis 20 less then or greater then 10?");
console.log(twenty <= ten);
// Test 4 using and & or
//using &&
console.log("\n20 is not equal to 10 and 20 is greater then 10 ");
console.log(twenty != ten && twenty > ten);
console.log("\n20 is not equal to 10 and 20 is greater then 40 ");
console.log(twenty != ten && twenty > 40);
// Test 5 using or
//using ||
console.log("\n 20 is greater ten 30 than 30 OR 20 is equal to 20");
console.log(twenty > 30 || 20 == 20);
console.log("\n 20 is greater ten 30 than 30 OR 20 is not equal to 20");
console.log(twenty > 30 || 20 != 20);
//Test 6 arrays
console.log("\n is orange include in fruits array");
console.log(fruits.includes("orange"));
console.log("\n is orange not  include in fruits array");
console.log(!fruits.includes("orange"));
