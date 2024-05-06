//Question 37
function make_shirt (size :string = "Large", printMessage :string = "I love TypeScript!"){
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
}

make_shirt();

//calling a function now with medium size and default message!

make_shirt("Medium")

//and now with small size and also print message
make_shirt("small", "I Love JavaScript" );
