////////////////////////
//Methods, Revisited
////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic"));
// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort();
console.log(favMovies);
//"The array has been sorted into alphabetical order, and is perminently changed"
// Use the method pop
favMovies.pop();
console.log(favMovies);
// push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);
// Reverse the array
favMovies.reverse();
console.log(favMovies);
// Use the shiftmethod
favMovies.shift();
console.log(favMovies);
// unshift- what does it return?
favMovies.unshift("Jumanji");
console.log(favMovies);
// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 
//Thought question: did this permanently alter our array?
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(15, 1, "Avatar");
console.log(favMovies);
"Splice is a mutating method, so it does alter the array"
// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather
// than counting it and hard coding it) - Thought question: did this permanently alter our array?
console.log(favMovies.indexOf('Black Panther'));
favMovies.slice(9);
"Slice does not modify the original array"
// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// console.log your final results
const cut = favMovies.slice(9);
console.log(cut);
"Slice cut the movie list in half starting from the start point given all the way to the end of the array"
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, 
//what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Fast and Furious"));
console.log(favMovies.indexOf("Jaws"));
"Because an array is being created, and arrays are mutable, the const array can be changed"