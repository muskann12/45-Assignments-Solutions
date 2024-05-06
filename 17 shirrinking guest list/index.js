//Question 17
var guest = ["muskan", "noor"];
//console.log("due to limited space, only two people are invited ");
//removing guest
while (guest.length > 2) {
    var removedguest = guest.pop();
    console.log('sorry', removedguest, "you are no longer invited to the dinner");
}
for (var i = 0; i < guest.length; i++) {
    console.log("Assalam o Alikum" + " " + guest[i] + ' you are still invited to the dinner');
}
console.log("final list", guest);
