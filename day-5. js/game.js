const inputField = document.getElementById("inputField")
const btn = document.getElementById("btn")
const win = document.getElementById("win")
const loose = document.getElementById("loose")
const comGuess = document.getElementById("comGuess")


const num = Math.floor(Math.random()*10)

// console.log(Math.random()*10)

function fetchInputValue() {
    const data = inputField.value
    const intVal = parseInt(data)

}

function compare() {
    if (num==inputField.value) {
        win.style.color="green";
        loose.style.display="none"
    }
    else{
        loose.style.color="red"
        win.style.display="none"

    }
}

btn.addEventListener('click',()=>{
    comGuess.innerHTML=num;
    compare()

})