// // ? .toUpperCase is used to make all strings in upper case and so on..

// let a = "Arun sharma";

// let b = "Arun sharma";

// console.log(a==b)

// b = a.toUpperCase();

// console.log('a', a);
// console.log(b);

// let x = 25;

// let rem = x % 2;

// if(rem === 1){

//     console.log("odd");

// }

// else{

//     console.log("even");

// }


//? simple calculator

// let x = 2;
// let y = 3;

// let option = "rem";

// if( option === "rem" ){

//     console.log(x%2);

// }

// else if( option === "sub"){

//     console.log(x - y)

// }

// else if( option === "div"){

//     console.log(x / y)

// }

// else if( option === "multiply"){

//     console.log(x * y);

// }

// else if( option === "power"){

//     console.log(x ** y);

// }

//? switch case

// let x = 2;


// switch ( x % 2 ){

//     case 1:
//     {
//     console.log(`${x} is odd`);
//     break;
//     }

//     default:
//     {
//         console.log(`${x} is even`);
//     }

// }

// ? ternary operator

// let x = 5;
// let rem = x % 2;

// rem === 0? console.log("true") : console.log("false");


//? wap to find greatest number of two numbers

// let x = 10;
// let y = 5;

// x > y ? console.log(`${x} is greater`): console.log(`${y} is greater`);

// console.log(`Hello, world! `+`\r`+`This is a new line.`);
// let num = "waaw";
// console.log(`${num} hello world`);


// console.log("hello world");


// ? due to sudden rise in tax, add 10% to the price of each laptop
// let laptopList = [
//     {
//       name: "TUF F15",
//       brand: "asus",
//       price: 1044,
//     },
//     {
//       name: "GF63",
//       brand: "msi",
//       price: 900,
//     },
//     {
//       name: "macbook air m2",
//       brand: "apple",
//       price: 1400,
//     },
//     {
//       name: "nitro",
//       brand: "acer",
//       price: 800,
//     },
  
//     {
//       name: "inspiron 55",
//       brand: "dell",
//       price: 700,
//     },
//   ];


//   const increasedPriceList = laptopList.map((item, index, self)=> {

//     newPrice = item.price + (10/100 * item.price);
//     let newItem = {
//         ...item,
//         price : newPrice, // replaces price with new value
//     };
//     return newItem;
//   });

//   console.log("increased price list is" + increasedPriceList);
//   console.log(increasedPriceList);
  
  
  // ? decrease price of each laptop by 20 percent
// let decreasedPricelist = increasedPriceList.map((item,index,self)=>{

//   const decreasedPrice = item.price - (20/100)*item.price;

//   let newItemDecreased = {
//     ...item,
//     price:decreasedPrice,
//   };
  
//   return newItemDecreased;
// });


//   console.log(decreasedPricelist);



// ? remove laptops whose price is greater than 1000

// let removedList = decreasedPricelist.filter((item)=>{

// // return item.price <=1000;
//   if(item.price<1000){
//     return item;
//   }

// });
// console.log(removedList);
// ? remove laptops whose brand is Apple
// let appleRemoveList = decreasedPricelist.filter((item)=>{

//  // if(item.brand==="apple"){

//  // }

  //// else {
  ////   return item;
 // // }

// if(item.brand !=== "apple"){
//   return item;
// }
// });

// console.log(appleRemoveList)

// ? increase price of Asus laptop by 5%

// let newAsusPrice = decreasedPricelist.map((item)=>{

//   if(item.brand === "asus"){
//     item.price = item.price + (5/100) * item.price;
//   }
//   return item;

// });

//   console.log(newAsusPrice);