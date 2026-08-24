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
const book3 = {
  title: "Bumi Manusia2",
  price: 145000,
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



function purchaseBook(book, discount, tax,stock,bookPurchased){

  if(bookPurchased <= 0){
    console.log(`The amount of purchase cannot be ${bookPurchased} `)
  }


  let amountOfBookPurchased = 0 



  for(let counter = 0; counter <  bookPurchased; counter++){
    // catch for when out of stock
    if(stock === 0){
      break
    }

    amountOfBookPurchased++
    stock--
  }

  const isAvailableForMorePurchase = stock === 0 
    ? `After the purchasing book is out of stock. No more book can be purchase amount of stock : ${stock}` 
    : `Available for more purchase remaining stock: ${stock}`;
    
  const totalPrice = amountOfBookPurchased * book.price
  const discountPercentage = discount/100;
  const discountAmount = totalPrice * discountPercentage;
  const priceAfterDiscount = totalPrice - discountAmount;

  
  const taxPercentage = tax/100;
  const taxAmount = priceAfterDiscount * taxPercentage
  const priceAfterTax = priceAfterDiscount + taxAmount;

  const purchaseInfo = {
    bookTitle : book.title,
    bookPrice : book.price,
    isBookLegal: book.isLegalIndonesia,
    purchaseMessage : isAvailableForMorePurchase,
    subTotal : totalPrice, 
    discountAmount: discountAmount,
    priceAfterDiscount: priceAfterDiscount,
    taxAmount: taxAmount,
    priceAfterTax: priceAfterTax
  }

  return purchaseInfo
}

console.log(purchaseBook(book2, 10,10,4,5))
console.log(purchaseBook(book3, 10,10,6,5))


// /**
//  *
//  * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
//  *
//  */
// function isPrime(n) {
//   if(n < 2 ){
//     return false;
//   }
//   if(n % 2 === 0){
//     return false
//   }
//   if(n === 2){
//     return true;
//   }

//   for(let factor = 3; factor * factor <= n; factor+=2){
//     if(n % factor === 0){
//       return false;
//     }
//   }
//   return true;

// }

// console.log(isPrime(10));
// console.log(isPrime(43));


//=== task 5 logic ===


/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  const stringSorted = str.split("").sort().join("");

  for(let i = 0; i < stringSorted.length; i++){
    
    if(stringSorted[i-1] === stringSorted[i]){
      return false
    } 
  }
  return true
}

console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false



