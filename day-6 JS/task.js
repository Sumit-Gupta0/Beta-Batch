
// let ar = ['1','2','4','6','8','10','12']
// ar.splice(2,0,'12')

// console.log(ar)



// Slice method without using predefine slice 

// let arr = ['1','2','3','4','5','6']
// let new_arr = []

// function new_slice(start,end){
//     // let idx = 0;
//     for (let idx = start; idx < end; idx++) {
//         new_arr.push(arr[idx]);
//     }

//     return new_arr;
// }

// let final_arr = new_slice(2,5)

// console.log(final_arr)

// let arrr = ['1','2','4','6','8','10','12']
// arrr.push('45','65','67')
// console.log(arrr)



// Slice method without using predefine slice 

let arr = ['1','2','4','6','8','10','12']
// let add_arr = ['3','5','7','9']

function new_splice(start,end,pot,arr){
    let put = [];
    let new_arr = [];

    for (let idx = start; idx < end; idx++){
        let part_1 = arr.slice(arr[0],start)
        let part_2 = arr.slice(start,arr[arr.length()])
        put = put.push(pot)

        new_arr = new_arr.concat(part_1)
        new_arr = new_arr.concat(put)
        new_arr = new_arr.concat(part_2)
       
    }

    return new_arr
}

let final_arr = new_splice(2,0,'3','5','7')

console.log(final_arr)