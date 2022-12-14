/////////////////////////////////////
//Bonus
/////////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe 
//   from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to 
//   Thom's accessories array.
const kristynsShoe = kristynsCloset[0];
console.log(kristynsShoe);
kristynsCloset.shift();
console.log(kristynsCloset);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset[2]);

// Modify your code to put together 3 separate outfits for Kristyn and Thom. 
// Put the output in a sentence to tell us what we'll be wearing. Mix and match!
let kOutfit = [];
let kOutfit2 = [];
let kOutfit3 = [];
kOutfit.push(kristynsCloset[2], kristynsCloset[3], kristynsCloset[4]);
console.log("You will be wearing a " + kOutfit);
kOutfit2.push(kristynsCloset[5], kristynsCloset[0], kristynsCloset[1]);
console.log("You will be wearing a " + kOutfit2);
kOutfit3.push(kristynsCloset[4], kristynsCloset[2], kristynsCloset[0]);
console.log("You will be wearing a " + kOutfit3);

let tOutfit = [];
let tOutfit2 = [];
let tOutfit3 = [];
tOutfit.push(thomsCloset[0][1], thomsCloset[2][2], thomsCloset[1][0]);
console.log("You will be wearing a " + tOutfit);
tOutfit2.push(thomsCloset[1][1], thomsCloset[2][0], thomsCloset[0][2]);
console.log("You will be wearing a " + tOutfit2);
tOutfit3.push(thomsCloset[0][3], thomsCloset[1][0], thomsCloset[2][1]);
console.log("You will be wearing a " + tOutfit3);

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
const whirr = kristynsCloset.length;
for (i = 0; i < whirr; i++) {
console.log(kristynsCloset[i] + " WHIRR: Now washing " + (kristynsCloset[i]))
}

// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);