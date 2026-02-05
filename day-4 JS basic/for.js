// Print 10 numbers

for (let i = 0; i <= 10; i++) {
    console.log(i);

}

// Print even numbers

for (let i = 2; i <= 20; i += 2) {
    console.log(i)
}

// Print odd numbers

for (let i = 1; i <= 20; i += 2){
    console.log(i)
}

// Addition of first 10 no.

let sum=0;
for (let i = 0; i <= 10; i++){
    sum += i;
}
console.log("Sum = ",sum)

// factorial of any number

n = 5;
fact = 1;

for(let i = 1; i <= n; i++){
    fact *= i;
}
console.log("Factoorial = ", fact);

// Prime numbers

let a = 13;
let count = 0;

for (let i = 1; i <= a; i++){
    if(a%1==0 && a%a==0){
        console.log("Number is prime")
        count += 1;
    }
    else{
        console.log("Number is not prime")
    }
}