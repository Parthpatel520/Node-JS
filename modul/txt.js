// // export.add=function(a,b){
// //     return a+b;
// // }

// const a = {
//   name: 'parth123',
//   age: 20,
//   sayHello:function(){
//       return this.name+" "+this.age
//   }
// }
// const b = {
//   name: 'parth',
//   age: 18,
//   sayHello:function(){
//       return this.name+" "+this.age
//   }
// }


// const arr=[10,20,30,40]


// module.exports = a; // method 1

// module.exports ={ // method -2
//   first:a,
//   second:b,
// }

// module.exports={ //method-3
//   a,b,arr,
// }

exports.add = (p,q) => p+q;

exports.subtract = function(p,q){
    return p-q;
}