// const every = (myarray)  => myarray <30;
// array=[1,23,33,4,1,2]
// console.log(array.every(every));

// console.log(array.fill(0,3,5))

// const name=["div", "divya", "di","divzzzz"]
// const result = name.filter((word)=>word.length<=3)
// console.log(result);

// const res = name.find((word)=>word.length<=3)
// console.log(res);

// const res1 = name.findIndex((word)=>word.length<=3)
// console.log(res1 , "res1:");

// const res2 = name.findLast((word)=>word.length<=3)
// console.log(res2);

// array2=[1,22,3,4,[2,0]]
// console.log(array2.flat())

// const array3 = [1,2,3,4,5]
// const res4= array3.flatMap((num) => (num === 2 ? [2, 2] : 1));
// console.log(res4);

// // foreach  returns value
// // include returs true false
// // every returns true false
// //some returns true false
// //lastindex of returns same name's last name index

// const ele = ["1", "one", "first"];
// console.log(ele.join());

// const array1 = ["a", "b", "c"];
// const iterator = array1.keys();
// for (const key of iterator) {
//   console.log(key);
// }

// const map = [7, 8, 9, 10, 11, 12, 13];
// const re = map.map((num)=>num*2);
// console.log(re);

// console.log(map.pop())   //last element
// console.log(map.push()) //length total

// reduce right return concat value from right side
// shift remove 1st element

// console.log(map.slice(2, 4));
// console.log(map.slice());

// for (const key of map){
//     console.log(key);
// }

// function try(cb){

//     cb();
// }

// try(function(){
//     console.log("print");
// });



// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   helo() {
//     console.log(`hiiii ${this.name}`);
//   }

//   getage() {
//     return this.age;
//   }
// }
// const me = new person("divya" , 21)
// console.log(me.getage())
// me.helo();


// function x(){
//     let x = 10
//     function y(){
//       console.log(x)
//     }
//     y()

//   }
//   x()

//   function add(){
// 	var x = 10
// 	let y = 20
// 	const z = 30

//     // console.log(x,y,z)
// }add();

// console.log(x,y,z)

// print() // "Hello World"

// function print(){
// 	console.log("Hello World")
// }

// 11111111
// function a(a,b) {
//     console.log(a+b);
// }a(2,3);

// 222222222222
// let b = (a,b)=> a+b;
// console.log(b(2,3))

// 3333333333333333
// let c= function (a,b) {
//     console.log(a+b);
// }
// c(2,3);

// 44444444444444
// var d= Function('num1','num2','return num1+num2');
// var res0 = d(2,3)
// console.log(res0);

// console.log(parseInt("107", 2));

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
//   console.log(n)
// console.log(x)
// }


// console.log(square(5)); 

// function square(n) {
//   return n * n;
// }

// ( function name() {
    
// })();

// function outside() {
//     const x = 5;
//     function inside(x) {
//       return x * 2;
//     }
//     return inside;
//   }
  
//   console.log(outside(3)());
  

// function Person() {
//     this.age = 0;
  
//     setTimeout(() => {
//       this.age++; 
//     }, 1000);
//   }
  
//   const p = new Person();
// console.log(p)  

// const str = "feePIIIII fi fo fum";
// const re = /\w+\s/g;

// console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
// console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
// console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
// console.log(re.exec(str)); // null
// let myArray = ["a", "b", "e", "d", "e"];
// myArray2 = myArray.sort(); // [ "b", "c", "d"]
// console.log(myArray2)

// const a = ["a", "b", "c", "d", "a", "b"];
// console.log(a.lastIndexOf("b")); // 5

// console.log(a.lastIndexOf("b",4)); // 1
// console.log(a.lastIndexOf("x")); // -1

//  const a= [1, "a", 2, "a", 3,"d"]
//  console.log(a.filter((item)=>typeof item === "number"))


//Hoisting
// greet()
console.log(greet())


function greet() {
    console.log(greet)/4
    // var greet = 1
}


