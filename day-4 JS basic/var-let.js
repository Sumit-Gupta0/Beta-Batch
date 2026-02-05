// Declaration of var and let 


// In var variable can change whenever the changes in values
var a = 5;
var a = 10;
console.log(a)

// In let only one time variable can declare and the value of b is does not change
let b = 5;
// let b = 10;            //Because 'b' is declared 
console.log(a)   


//  Hoisting Difference

console.log(x)
var x = 4;            // the value of 'x' is undefined.


// console.log(y)
// let y = 8;            // the value of 'y' is not declared before calling it.



// Scoping  of var and let

function car(){
    var model = "BMW";
    console.log(model); 

    if(true){
        var model = "Maruti"       //     here var is redeclare the variable 
        console.log(model);
    }
    
    console.log(model)
}
car()


function car(){
    let model = "BMW";
    console.log(model); 

    if(true){
        let model = "Maruti"       //    here let 'model' is issue for a block code after   
        console.log(model);        //.   end of code the value of model is same what we will asign first.
    }
    
    console.log(model)
}
car()