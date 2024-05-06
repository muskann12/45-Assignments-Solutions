//name of countries
let countries: string [] = ["Brazil" , "Canada" , "Denmark" , "Argentina"];
console.log("Original Order" , countries);

//Alphabetical order
console.log("Alphabetical order" , [...countries].sort());

console.log("still in original order" , countries);

//Reverse order
console.log("Reverse order" , [...countries].reverse());

console.log("still in original order" , countries);

//original order changed
console.log("original array reversed" , countries.reverse());

//Again reversed
console.log("again reversed to original order" , countries.reverse());

//Orginal in Alphabatical order
console.log("sorted i alphabatical order" , countries.sort());

//Again reversed the original order
console.log("again reversed to original order" , countries.reverse());

