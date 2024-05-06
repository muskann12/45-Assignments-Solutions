var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//name of countries
var countries = ["Brazil", "Canada", "Denmark", "Argentina"];
console.log("Original Order", countries);
//Alphabetical order
console.log("Alphabetical order", __spreadArray([], countries, true).sort());
console.log("still in original order", countries);
//Reverse order
console.log("Reverse order", __spreadArray([], countries, true).reverse());
console.log("still in original order", countries);
//original order changed
console.log("original array reversed", countries.reverse());
//Again reversed
console.log("again reversed to original order", countries.reverse());
//Orginal in Alphabatical order
console.log("sorted i alphabatical order", countries.sort());
//Again reversed the original order
console.log("again reversed to original order", countries.reverse());
