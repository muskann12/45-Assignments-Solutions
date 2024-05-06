//Question 37
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript!"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
make_shirt();
//calling a function now with medium size and default message!
make_shirt("Medium");
//and now with small size and also print message
make_shirt("small", "I Love JavaScript");
