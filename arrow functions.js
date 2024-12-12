//? arrow functions is just one liner for simple function to return value


// ? simple function
// const addNumbers = (num1,num2) =>{

// const sum = num1+num2;
// return(sum);
// }

// const result = addNumbers(12,13);
// console.log(result);


// ? arrow function
// const addNumbers = (num1,num2) => num1+num2;
    
//     const result = addNumbers(12,13);
//     console.log(result);




//? odd or even using arrow function and ternary operator

// const checkOddEven = (num) => (num%2 === 0) ? "even" : "odd";

// const result = checkOddEven(25);
// console.log(result);

//? in simple way

// const  checkOddEven = (num) =>{

// const remainder = num % 2;

// if( num % 2 === 0){
//     return("even");
// }
// else{
//     return("odd");
// }

// }

// let result = checkOddEven(24);
// console.log(result);

// ? for precision or precise answer there is .tofixed()



//? WAF to calculate factorial of a number using arrow function

// let factorial = 1;
// const getFactorial = (num)=> {

//     if(num === 0){
//         return 1;
//     }
//     else{

//         for(let i=1; i <= num; i++){

//             factorial *= i; //x = x * i >> x *= i

//         }

//         return factorial;

//     }

// }

// let result = getFactorial(5);
// console.log(result);


//? WAF that accepts first name and last name as arguements and returns full name

// ?normal code
// const getFullName = (firstname,lastname) => {

//     let fullName =  `${firstname} ${lastname}`;

//     return fullName;
// };

// const result = getFullName("Arun", "Khanal");
// console.log(result);

//?alternative code
// const getFullName = (firstname,lastname) => `${firstname} ${lastname}`;

// const result = getFullName("Arun", "Khanal");
// console.log(result);