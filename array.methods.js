// let studentList = ["Prithvi", "diom", "diwas"];

// ? push => adds element to the end of array
// studentList.push("Arun");
// console.log(studentList);

//? we can push multiple elements

// studentList.push("ram", "shyam");

// console.log(studentList);

//? pop => removes last item from array

// studentList.pop();  //? .pop(); removes last item from array which in this case is diwas so prints only prithvi and diom
// console.log(studentList);

//? unshift => adds element to the start of array

// let studentList = ["Prithvi", "diom", "diwas"];

//studentList.unshift("arun", "ram", "shyam");  //? unshift(); adds item to the start of array

// studentList.unshift("Manish");
// console.log(studentList);



//? shift => removes element to the start of array

// let studentList = ["Prithvi", "diom", "diwas"];

//studentList.shift();  //? shift(); adds item to the start of array

// studentList.shift();
// console.log(studentList);


//? map
//? original array and returned array has same length or size


// const oldScores = [15,25,35,45,55];
// scores.map((item, index, self)=>{

//     // console.log(item,index,self); //? prints item then index then self
//     console.log(item);


// });



//? for returning in new array

// const newScores = oldScores.map((item , index, self) => {


//     return item + 10;

// });



// const oldScores = [15,25,35,45,55];
// const newScores = oldScores.map((item,index,self) => item + 10   //? same function but one liner and clean code

// );

// console.log(newScores);


// const studentNames = ["Arun", "Prithvi", "diwas" , "diom"];

// const studentNamesUpperCase = studentNames.map((item,index,self)=>{
//     let newName = item.toUpperCase();
//     return newName;
// });

// console.log(studentNamesUpperCase);

// // get an array with even scores
// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];

// const newScoreList = scoreList.filter((item,index,self)=>{

//     if(item%2 === 0){
//         return item;
//     }

// });

// console.log(newScoreList);

