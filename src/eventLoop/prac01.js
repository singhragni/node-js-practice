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
