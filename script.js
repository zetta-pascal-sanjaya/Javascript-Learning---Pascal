// //Task 1

// let bookOne = "The Art of War";

// const bookTwo ="To Kill a Mocking";

// if(bookOne === bookTwo){
//   console.log(true);
// } else{
//   console.log(false);
// }
 

// // Task 2

const book1 = {
  title: "How to lie with statistic",
  price: 10000,
  isLegalIndonesia: false 
}
const book2 = {
  title: "Bumi Manusia",
  price: 100,
  isLegalIndonesia: true
}
// //a
// console.log(Math.max(book1.price, book2.price));
// //b
// const averagePrice = (book1.price + book2.price) / 2
// console.log(averagePrice);
// //c
// let bookValue = averagePrice > 500000 ? "Expensive" : "Cheap";
// console.log(bookValue)


// // logic
// /**
//  *
//  * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
//  *
//  */
// function max_of_two(a, b) {
//   return a > b ? a : b;
// }

// console.log(max_of_two(10, 5));
// console.log(max_of_two(45, 66));


//day 4

function purchaseBook(book, discount, tax){
  const discountPercentage = discount/100;

  const priceAfterDiscount = book.price - (book.price * discountPercentage);

  const taxPercentage = tax/100;
  const priceAfterTax = priceAfterDiscount + (book.price * taxPercentage);

  const purchaseInfo = {
    bookTitle : book.title,
    bookPrice : book.price,
    isBookLegal: book.isLegalIndonesia,
    discountInPercent: discount,
    priceAfterDiscount: priceAfterDiscount,
    taxInPercent: tax,
    priceAfterTax: priceAfterTax
  }

  return purchaseInfo
}

console.log(purchaseBook(book2, 10,5))


/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
  if(n < 2 ){
    return false;
  }
  if(n % 2 === 0){
    return false
  }
  if(n === 2){
    return true;
  }

  for(let factor = 3; factor * factor <= n; factor+=2){
    if(n % factor === 0){
      return false;
    }
  }
  return true;

}

console.log(isPrime(10));
console.log(isPrime(43));