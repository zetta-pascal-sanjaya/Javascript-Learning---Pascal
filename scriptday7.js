const book1 = {
  title: "How to lie with statistic",
  price: 10000,
  isLegalIndonesia: false 
}
const book2 = {
  title: "Bumi Manusia",
  price: 80000,
  isLegalIndonesia: true
}
const book3 = {
  title: "Bumi Manusia2",
  price: 137000,
  isLegalIndonesia: true
}

let amountOfBookPurchased = 0 

// check availability after purchase
function CheckAvailability(stock){
  const isAvailableForMorePurchase = stock === 0 
    ? `After the purchasing book is out of stock. No more book can be purchase amount of stock : ${stock}` 
    : `Available for more purchase remaining stock: ${stock}`;

    return isAvailableForMorePurchase
}

function CalculatePrice(book,discount,stock,bookPurchased){

  for(let counter = 0; counter <  bookPurchased; counter++){

    // catch for when out of stock
    if(stock === 0){
      break
    }

    amountOfBookPurchased++
    stock--
  }

  const totalPrice = amountOfBookPurchased * book.price
  const discountPercentage = discount/100;
  const discountAmount = totalPrice * discountPercentage;
  const priceAfterDiscount = totalPrice - discountAmount;

  const priceInfo = {
    totalPrice,discountAmount,priceAfterDiscount,stock
  };

  return priceInfo;
}


function CalculateTax(tax,priceAfterDiscount){
  const taxPercentage = tax/100;
  const taxAmount = priceAfterDiscount * taxPercentage
  const priceAfterTax = priceAfterDiscount + taxAmount;

  const taxInfo = {taxAmount,priceAfterTax};
  return taxInfo;
}
// list of dueDates
function DueDatesList(duration,monthyPayment){
  const options = {
  weekday: 'long',
  year: 'numeric', 
  month: 'numeric', 
  day: 'numeric', 
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Jakarta',
  timeZoneName: 'short'
  }
  
  const startingDate= new Date();
  const dueDates = []

  for(let counter = 1; counter <= duration; counter++){
    startingDate.setMonth(startingDate.getMonth() + 1);
    const formatedDate = startingDate.toLocaleDateString('id-ID',options);
    dueDates.push({ formatedDate , monthyPayment })
  }

  return dueDates;
}




function PurchaseBook(book, discount, tax,stock,bookPurchased,duration){

// catch to make sure the amount of book is not zero
  if(bookPurchased <= 0){
    console.log(`The amount of purchase cannot be ${bookPurchased} `)
  }

// price  
 const priceInfo = CalculatePrice(book,discount,stock,bookPurchased)
// availbility after purchase
 const availbilityInfo = CheckAvailability(priceInfo.stock)
// tax
const taxInfo = CalculateTax(tax,priceInfo.priceAfterDiscount)
// list of due dates
const monthyPayment = taxInfo.priceAfterTax / duration
const dueDates =  DueDatesList(duration,monthyPayment)



  const purchaseInfo = {
    bookTitle : book.title,
    bookPrice : book.price,
    isBookLegal: book.isLegalIndonesia,
    purchaseMessage : availbilityInfo,
    subTotal : priceInfo.totalPrice, 
    discountAmount: priceInfo.discountAmount,
    priceAfterDiscount: priceInfo.priceAfterDiscount,
    taxAmount: taxInfo.taxAmount,
    priceAfterTax: taxInfo.priceAfterTax,
    durationInMonths: duration, 
    creditPeriod: dueDates,
  }

  return purchaseInfo
}




  console.log(PurchaseBook(book2,10,10,10,10,6))


  // Day 7 Logic

  /**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
  let canditate = null;
  let counter = 0;

  for(let num of nums){
    if(counter === 0){
      canditate = num;
    }

    counter += (num === canditate) ? 1 : -1;
  }

  return canditate;
}


console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
console.log(majorityElement([3, 2, 2])); // Output: 2