//QUESTION 43

function show_magicians(magicians :string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
     return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Harry Potter" , "Mad" , "idk"];

//Making a copy of original array through .slice()

let copy_magician_names = magicians_names.slice()

//Modifying the copies array

 let copy_great_magicians =make_great(copy_magician_names);

//showing both arrays original and copy
//original
console.log("original\n");
show_magicians(magicians_names);

//copy
console.log("\ncopy\n");
show_magicians(copy_great_magicians);



