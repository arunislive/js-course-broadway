//? looping

// -> looping = iteration

// for ( initialization ; condition ; formula) or for (initial_value; condition; increment_decrement)

// ? wap to show in numbers between 30 to 100 which one is odd and which one is even using for loop
// ? in each iteration, sample output "1 is odd", "2 is even"

// let i;
// for (i = 30 ; i <= 100 ; i++){

// let rem = i % 2;

//  if( rem === 0){
//     console.log(`${i} is even`);

//  }
//  else{
//     console.log(`${i} is odd`);
//  }

// }

//? wap to print sum of numbers from 1 to 10let i;
// let sum = 0;
// for (i = 0 ; i <= 10 ; i++){

//     sum = sum + i;

// }
// console.log(sum);

//? WAP to find factorial numbers of 5 from for loop
// let i;
// let fact = 1;
// for (i = 1 ; i <= 5 ; i++){

//     fact = fact * i;

// }
// console.log(fact);

// ? while loop

//syntax

// initial value

// while(condition){
//  some code
//  formula
//}

//? example of while loop

// let i = 1;
// while(i<=10){
//     console.log("hello", i , "times");
//     i++;
// }

// let i = 20;
// while (i >= 10) {
//     console.log("hello", i, "times");
//     i--;
// }

//? WAP to print even numbers from 1 to 50

// let i = 1;
// let rem = 0;
// while(i <= 50){
//     rem = i % 2;
//     if(rem===0)
//     {
//     console.log("even numbers are only"+  i);
//     }

//     i++;
// }

//? WAP to check if the number is prime or composite

// let i = 2;
// let n = 11;
// let count;
// let remainder;

// for(i=2; i<=n; i++){

//     remainder = n % i;

//     if(remainder === 0){

//         count++;

//     }
//     if(count === 2){

//         console.log("prime");

//     }