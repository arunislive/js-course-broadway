//? object => key value pair

// primitive
// string
// number
// boolean
// null
// undefined

//? example

// let student1 = {
//     firstName : "Arun",
//     lastName : "Khanal",
//     college : "broadway",
//     age : 17,
//     permanentAddress : "kathmandu",
//     temporaryAddress : "kathmandu",
//     isMarried : false,
//     isGraduated : null,
//     height : ` 5' 8" ` ,
//     weight : undefined,
// }

//? CRUD Operation

// C => Create/add
// R => Read/Retrieve
// U => Update
// D => Delete

// const courseDetails = {
//     name : "MERN",
//     duration : 90,
//     type : "Full Stack",
//     numberOfStudents : 16,
// }

//? Read Operations
//? either dot operator or square operator

//console.log(courseDetails.name);
//console.log(courseDetails["name"])

// console.log(typeof courseDetails["type"]); //checking the type

//? Delete Operations => removes keyvalue or specified property of object
//? either dot operator or square operator

// delete courseDetails.type;
// delete courseDetails["type"];
// console.log(courseDetails);


//? Upsert => update or insert => update is prioritized first

//? update operations

// courseDetails.name = "django";
// console.log(courseDetails);

//? add operations or insert operations
// courseDetails.internship="not guaranteed";

// console.log(courseDetails);


const laptopDetails = {
    name: "GF75",
    brand: "MSI",
    ram: 16,
    ssd: 512,
    display: "15.3",
    graphics: "NVIDIA GeForce RTX 3060",
    battery: "51 Whr",
    processor: "i7 10750H",
  };
  
  // ? display laptop name with battery capacity

//   console.log(`${laptopDetails.name} has ${laptopDetails.ram}gb memory`);



  // ?change ram size to 18 gigs

//    laptopDetails.ram = 18;
//    console.log(laptopDetails.ram);

  // ?add another property called  memoryFrequency with 3200MHz value

//   laptopDetails.memoryFrequency = "3200 MHz"
//   console.log(laptopDetails);

  // ? add another property called weight whose value is 3kg

//   laptopDetails.weight = "3kg";
//   console.log(laptopDetails);

  // ? update ssd size by 300 GB

//   laptopDetails.ssd += 300;
//   console.log(laptopDetails);

  //? delete processor property

//   delete laptopDetails.processor;
//   console.log(laptopDetails);

/**  
 * 2.Create an object named myHouseDetails and add following properties
numberOfRooms
numberOfMembers
colorOfHouse
builtYear
numberOfStorey

A.Delete numberOfMembers property
B.Update numberOfRooms by new value
C.Add a  new property called estimatedPriceOfHouse
D.Print out all properties on the console like “I have a green coloured house
with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”
*/


    // const myHouseDetails={
    // numberOfRooms : 15,
    // numberOfMembers: 25,
    // colorOfHouse: "fledgrau",
    // builtYear: 2073,
    // numberOfStorey:5,
    // }

    // console.log(myHouseDetails);

    // delete myHouseDetails.numberOfMembers;   //answer of A
    // console.log(myHouseDetails);

    // myHouseDetails.numberOfRooms = 21;       //answer of B
    // console.log(myHouseDetails);

    // myHouseDetails.estimatedPriceOfHouse = "4cr";    //answer of C

    // console.log(
    //     `i have a ${myHouseDetails.colorOfHouse} colored house with ${myHouseDetails.numberOfRooms} rooms where there are ${myHouseDetails.numberOfMembers} prople living. the house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} BS with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}`
    //     );

    // const studentDetails = {

    //     firstName : "Arun",
    //     middleName : "",
    //     lastName : "khanal",
    //     age : 17,
    //     college : "new summit college",
    //     address: {
    //         permanent : "kathmandu",
    //         temporary : "bhaktapur",
    //     },
    // };

    // console.log(studentDetails.firstName);
    // console.log(studentDetails.address.permanent);
    // console.log(studentDetails["address"].temporary);




//5. hospital Details
// add field => name,location,patientCapacity, numberOfBed, numberOfBlock,
// numberOfDoctor,numberOfNurse
// delete numberOfBed and numberOfNurse
// update numberOfBlock
// add new field named numberOfAmbulance
// copy the object to new variable named newHospitalDetails
// print out results like "There is a hospital named ABC with...."

