setTimeout(() => console.log("I am timeOut "), 0);
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("i am resolve"));

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise inside setTimeout");
  });
}, 0);

setImmediate(() => {
  console.log("setimmediate");
});

Promise.resolve().then(() => {
  console.log("promise 1");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("console log 2");




function test() {
  let count = 0;
  return function () {
    return count++;
  };
}
let x = test();
console.log(x());
console.log(x());



console.log("Try programiz.pro");


let x2 = [];

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}



function someFunc(a,...b){
  //You code goes here
  console.log(a)
  console.log(b)
  console.log(c)
  return;
  }
  
  someFunc(1,2,3,4)