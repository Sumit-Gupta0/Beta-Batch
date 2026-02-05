// var follow the concept of hoisting
// There are two type of version - old and new
// Variables & constant
// variables is a block of storage

//.  
let age = 32

console.log(age)
if (age >= 18) {
    console.log("You are eligible for vote");
}
else {
    console.log("You are not eligible for vote");
}

// For

// let a=5
// let n=1
// for (let i = 2; i<=n; i++) {
//     if (n%i==0) {
//         console.log("It is a prime number");
//     } else {
//         console.log("It is not a prime number");
//     }
// }

let fact = 6
let x=1

for (let i = 1; i<=fact; i++) {
    x*=i;
    
}
console.log(fact);
