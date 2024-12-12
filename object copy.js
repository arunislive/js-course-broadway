//? when copying object using assignment operator the assignment operator copies the address or reference of the given object
//? so there are 2 ways to copy object without copying reference
/**
 * one is (...) which is spread operator and other one is
 * structuredClone() o
 *
 */

//? we need to give priority to the spread operator for older proejcts of node js from version 17 then use structuredClone()

// const laptop1 = {

// name : "macbook pro",
// ram : 48,
// processor : "m3",
// model : "2023",
// dimensions : {

//     size : 13.3,
//     weight : 1.7,

// },

// };

// // if i use = assignment operator here the value in both objects will change

// // const laptop2 = {...laptop1};   //spread operator or shallow copy{...} this doesnt copy nested object



// const laptop2 = structuredClone(laptop1);  // structuredClone or deep copy structuredClone(); this copies nested objects too
// laptop2["dimensions"].weight = 1.5;
// laptop2["name"] = "macbook air";
// console.log(laptop2);

// console.log(laptop1);   // nothing changed using structuredClone



