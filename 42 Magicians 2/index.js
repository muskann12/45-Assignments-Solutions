//Question 42
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Harry Potter", "Mad", "idk"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
show_magicians(great_magicians);
