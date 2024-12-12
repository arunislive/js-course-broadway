//find => returns first matching item based on condition

// const scores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


// const newScores = score.find((item)=>{


//     if (item>10){
//         return item;
//     }
// });

// console.log(newScores);

//? push,pop, map, filter, find

    // const nations =["nepal", "india", "china"];


//?push
    // nations.push("thailand");
    // console.log(nations);

//?pop
    // nations.pop();
    // console.log(nations);

//? map

    const numbers = [12,23,34,46,65,71,65,45,34,32]

//     // const newList = numbers.map((item,index,self)=>{

//     //     return item - 10;

//     // });
//     // console.log(newList);

    // const newLists = numbers.map((item)=>{

    //     if(item === 46){
    //         return item-46;
    //     }
    //     else{
    //         return item;
    //     }

    // });
    // console.log(newLists);

    // const studentData = [
    //     {
    //       name: "A",
    //       score: 85,
    //     },
    //     {
    //       name: "B",
    //       score: 91,
    //     },
    //     {
    //       name: "C",
    //       score: 75,
    //     },
    //   ];

    //   const newData = studentData.map((item)=>{

    //     let newScore = item.score + 5;

    //     let newItem = {...item, score:newScore };
    //     return newItem;

    //   });

    //   console.log(newData);
    


    //? filter
    //? filter checks every thing in object / array

    //? print scores greater than 80 only

    const studentData = [
        {
          name: "A",
          score: 85,
        },
        {
          name: "B",
          score: 91,
        },
        {
          name: "C",
          score: 75,
        },
      ];

    //   const newStudentData = studentData.filter((item)=>{

    //     if(item.score >= 80){
    //         return item;
    //     }

    //   });

    //   console.log(newStudentData);

    //? find
    //? find le chai first matching condition matra check garerw return garxa
    //? find chai jastai email checking ma use hunxa


    // const newStudentData = studentData.find((item)=>{

    //     if(item.score >= 80){
    //         return item;
    //     }

    //   });

    //   console.log(newStudentData);

    //? sort

    //? sort => dictionary order ma sort garera rakhxa

    // const nameList = [
    //     "Nepal",
    //     "India",
    //     "China",
    //     "Bhutan",
    //     "America",
    //     "Zimbabwe",
    //     "Australia",
    //     "Argentina",
    //   ];


    //   nameList.sort();
    //   console.log(nameList);


    //? sort for numeric array

    // const nums =[ 1,12,23,4,1,2,134,2534,6,5,75,67,56,46,45,34,53,11111,34,5,111];

    // normal sort le dictionary order ma sort garera rakhxa so 1 aauxa tespaxi one paxi aaune feri 12 tespaxi 1111

    // we need to use call back function for numeric sorting

    // a-b => ascending order sort
    // b-a => descending order sort

    // nums.sort((a,b)=>{
    //     return a-b;  //ascending sort
    //     // return b-a;  // descending sort
    // });

    // console.log(nums);

// const newWords =["arun", "ram", "shyam", "destruction", "javascript"];

// const newArrays = newWords.filter((item,index,self)=>{

//     if(item.length<=4){
//         return item;
//     }

// });

//     console.log(newArrays);

// let values = [10, 25, 35, 5];
//? calculate total value by multiplying each other

// const product =  values.reduce((Product, item,index,self)=>{

//     Product = Product * item;
//     return Product;

// } ,1);

// console.log(product);