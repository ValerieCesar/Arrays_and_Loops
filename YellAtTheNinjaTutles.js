////////////////////////
//Yell at the Ninja Turtles
////////////////////////
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const splinter = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
for (let turtle of splinter) {
    turtle = turtle.toUpperCase();
    console.log(turtle)
}