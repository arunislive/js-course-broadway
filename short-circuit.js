// ? short circuit is the method in which javascript chooses the shortest path possible to complete the process 
//? in given example below , for first condition in it checks wether there is one true because in or gate a true means all true
//? in second condition below, it checks for a false statement to complete task as soon as possible coz even a single false means all result in false

let c1 = true;
let c2 = true;
let c3 = false;
let c4 = true;

console.log(c1 || c2 || c3 || c4);

console.log( c1 && c2 && c3 && c4);