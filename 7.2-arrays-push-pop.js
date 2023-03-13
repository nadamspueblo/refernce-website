/* 
  Warm-up
  1. Create a global variable called favFoods and assign it to be an array strings that are your top three favorite foods.
  2. Use console.log() to print out each element to the console individually
*/
var favFoods = ["Pizza", "Burgers", "Ice cream"];
console.log(favFoods[0]);
console.log(favFoods[1]);
console.log(favFoods[2]);
console.log(typeof(favFoods));



// Length property examples
console.log(favFoods.length);
console.log(favFoods[3]); 


// .push() examples
var newLength = favFoods.push("Sushi");
console.log(favFoods);

// .pop() examples
var lastItem = favFoods.pop();
console.log(lastItem);
console.log(favFoods);


function problem1(){

}