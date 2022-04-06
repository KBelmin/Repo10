var myPet = {
    species: "macak",
    name: "cicko",
    legs: 4,
    friends: ["Belmin", "Mama"]
};
function myFunction (myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };