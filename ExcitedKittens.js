////////////////////////
//Excited Kitten
////////////////////////
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
const cat = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for (i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or 
// "...why does the red dot always get away..." at random.
  if(i % 2 === 0) {
let random = cat[Math.floor(Math.random() * cat.length)];
console.log(random);
    }
}