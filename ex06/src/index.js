var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}
function myFunction (par1, par2) {
    lion.roar = par2;
    return lion;
}
console.log(myFunction("roar", "roar-roar"));