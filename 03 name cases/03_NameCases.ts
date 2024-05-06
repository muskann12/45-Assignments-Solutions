let PersonName = "Muskan Nisar";
//Lowercase

console.log ("Lowercase:", PersonName. toLowerCase());


//Uppercase
console.log ("uppercase:", PersonName. toUpperCase());

//titlecase
console.log ("titlecase:", PersonName.replace(/\b\w/g,c=> c.toUpperCase()));