//Task 1

let bookOne = "The Art of War";

const bookTwo ="To Kill a Mocking";

if(bookOne === bookTwo){
  console.log(true);
} else{
  console.log(false);
}
 

// Task 2

const book1 = {
  title: "How to lie with statistic",
  price: 10000
}
const book2 = {
  title: "Bumi Manusia",
  price: 20000
}
//a
console.log(Math.max(book1.price, book2.price));
//b
const averagePrice = (book1.price + book2.price) / 2
console.log(averagePrice);
//c
let bookValue = averagePrice > 500000 ? "Expensive" : "Cheap";
console.log(bookValue)


// logic
/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 *
 */
function max_of_two(a, b) {
  return a > b ? a : b;
}

console.log(max_of_two(10, 5));
console.log(max_of_two(45, 66));

