// 1)CALCULATOR  USING ARROW FUNCTION & USE EXPORT & MODULE
const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const div = (a,b) => a / b;

// 2)AREA OF CIRCLE
const circle = (r) => 3.14 * r * r;

// 3)AREA OF RECTANGLE 
const rectangle = (w,h) => w * h;

// 4)AREA OF TRIANGLE
const triangle = (b,h) => b * h / 2;

// 5)SIMPLE INTEREST
const sint = (p,r,n) =>  p * r * n / 100;

// 6)COMPOUND INTEREST
const coint = (p,i,n) => ((p*(1+i)^n)-p);


module.exports = {
    add,sub,mul,div, circle,rectangle,triangle,sint,coint
}