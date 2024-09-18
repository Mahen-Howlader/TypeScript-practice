 import {Vondami} from './Clasess/Players.js'
// // // let playerName = "Masrafi";
// // // console.log(playerName);
// // // // playerName = 45;
// // // // console.log(playerName)

// // // const arr = [23, 34, 45, 56];
// // // // arr.push("mahin")

// // // const person = {
// // //     name: "mahin Howlader",
// // //     age: 34,
// // //     isCaptin: true
// // // };

// // // person.age = 70;
// // // // person.country = "bd"



// // // let a: string[] = [];
// // // a.push("mahin");

// // // let aa: (number | string)[] = [];
// // // aa.push(43)
// // // aa.push("mahin");



// // // // object ?

// // // let o: object;
// // // o = {
// // //     name: "hasan",
// // //     age: 34,
// // // }


// // let c: {
// //     name: string,
// //     age: 34,
// //     adult: boolean,
// // };

// // c = {
// //     name: "Mahin",
// //     age: 34,
// //     adult: true
// // }


// // daynamic type any type 
// let a : any[] = [];
// a.push("mahin");
// a.push(34);


// let objectType : {
//     name : any,
//     age : any
// };

// objectType = {
//     name : "mahin",
//     age : 34
// }


// // function type 

// function myfunc (a : string , b : string, c?:string){
//     console.log("hello")
// };

// myfunc("mahin", "hasan")


// // type aliases 

// type numString = number | string;
// type objects = {name: "mahin", age : 34};


// const userDetails = (id : numString , user : objects) => {
//     console.log(`User id is ${id} , name is ${user?.name}`);
// };



// let functionSing: (a: string, b: number) => number | string;

// functionSing = (a: string, b: number) => {
//     // console.log("mahin howlader");
//     // console.log(a,b)
//     return a
// };
// console.log(functionSing("mahin", 34))



// // class constractor 
// class Players {
//     name: string;
//     age: number;
//     country: string;

//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

//     play() {
//         console.log(`${this.name} from ${this.country} is playing`);
//     }
// }


// const masrafi = new Players("mashrafi", 40, "Bangladesh");
// const sakib = new Players("Sakib", 50, "Bangladesh");


// const Playerss: Players[] = [];

// Playerss.push(masrafi);
// Playerss.push(sakib);





const antor = new Vondami("mashrafi", 40, "Bangladesh");
const pagol = new Vondami("pagol", 50, "Bangladesh");


console.log(antor,pagol)