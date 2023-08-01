// console.warn("parth chhatrala");
// console.error("parth patel");

const app = require("./app");
console.log(app);
console.log(app.a);
console.log(app.c());

const arr = [1, 2, 3, 4, 5, 6, 4];
arr.forEach(myFuction);
function myFuction(val) {
  console.log(val);
}

let p1 = arr.filter((item) => {
  return item === 4;
});
console.log(p1);



