"use strict";
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
let functionSing;
functionSing = (a, b) => {
    // console.log("mahin howlader");
    // console.log(a,b)
    return a;
};
console.log(functionSing("mahin", 34));
// class constractor 
class Players {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const masrafi = new Players("mashrafi", 40, "Bangladesh");
const sakib = new Players("Sakib", 50, "Bangladesh");
const Playerss = [];
Playerss.push(masrafi);
Playerss.push(sakib);
console.log(Playerss);
