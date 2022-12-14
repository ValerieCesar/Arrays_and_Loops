////////////////////////
//Where is Waldo
////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);
// Change "Neff" to "No One"
const swap = whereIsWaldo[1];
swap.splice(2, 1, "No one");
console.log(whereIsWaldo);
// Access and console.log "Waldo"
console.log(whereIsWaldo[2] [1] [1]);