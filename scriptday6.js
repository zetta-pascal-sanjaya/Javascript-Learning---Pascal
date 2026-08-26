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
  price: 137000,
  isLegalIndonesia: true
}



function PurchaseBook(book, discount, tax,stock,bookPurchased,duration){




  if(bookPurchased <= 0){
    console.log(`The amount of purchase cannot be ${bookPurchased} `)
  }


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
    dueDates.push(formatedDate)
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
    priceAfterTax: priceAfterTax,
    durationInMonths: duration, 
    creditPeriod: dueDates
    
  }

  return purchaseInfo
}



  // const options = {
  // weekday: 'long',
  // year: 'numeric', 
  // month: 'numeric', 
  // day: 'numeric', 
  // hour: '2-digit',
  // minute: '2-digit',
  // timeZone: 'Asia/Jakarta',
  // timeZoneName: 'short'
  // }
  
 
  // const startingDate= new Date();
  // const dates = []

  // for(let i = 1; i <= 3; i++){ 
  // startingDate.setMonth(startingDate.getMonth() + 1);
  // const formattedStartingDate = startingDate.toLocaleDateString('id-ID',options);
  // dates.push(formattedStartingDate)
  // }

  // console.log(dates)




  console.log(PurchaseBook(book2,10,10,10,5,3))



// logic test day 6

/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(ContainsDuplicate([1, 2, 3, 1])); // Output: true
console.log(ContainsDuplicate([1, 2, 3, 4])); // Output: false
console.log(ContainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function ContainsDuplicate(nums) {
    const sortedNums = nums.sort();

    for(let i = 0;  i < nums.length; i++){
      if(sortedNums[i] === sortedNums[i-1]){
        return true
      }
    }
    return false
  }

console.log(ContainsDuplicate([1, 2, 3, 1])); // Output: true
console.log(ContainsDuplicate([1, 2, 3, 4])); // Output: false
console.log(ContainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true