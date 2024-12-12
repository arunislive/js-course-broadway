//? Destructure
// const laptop1 = {

//     name : "macbook pro",
//     ram : 48,
//     processor : "m3",
//     model : "2023",
//     dimensions : {
    
//         size : 13.3,
//         weight : 1.7,
    
//     },
//     };
    
//     // destructure garna lai left ko key lai right ma ani right ko kura nothing and last ma add object name
    
//     const {
    
//     name,
//     ram ,
//     processor,
//     model,
//     dimensions : {
//         size ,
//         weight,
//     },
//     } = laptop1;



const firstName =  "Arun";

const object1 = {
    firstName : "object",
    lastName : "javascript",
}

// const{ firstName, lastName} = object1; // this shows error when destructuring because there is another firstName variable in code

const{firstName:fname, lastName } = object1; // this is renaming of firstName to fname or renaming the field // this works perfectly fine

console.log(`${fname} ${firstName}`);
