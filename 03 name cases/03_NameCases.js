var PersonName = "Muskan Nisar";
//Lowercase
console.log("Lowercase:", PersonName.toLowerCase());
//Uppercase
console.log("uppercase:", PersonName.toUpperCase());
//titlecase
console.log("titlecase:", PersonName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
