const rock = document.getElementById("#rock")
const seissor = document.getElementById("#seissor")
const paper = document.getElementById("#paper")
const btn = document.getElementById("#btn")
const guess = document.getElementById("#guess")
const win = document.getElementById("#win")
const loose = document.getElementById("#loose")


const str = ['Rock', 'Paper', 'Seissor']
const chooseStr = str[Math.floor(Math.random() * 3)];

function getResult(){
    if (rock,paper,seissor===chooseStr) {
        return "It's a tie !!"
    }
    if (rock===chooseStr && chooseStr===str[''] ||) {
        
    }
}


// function compare() {
//     if (str[idx] == inputField.value) {
//         win.style.color = "green";
//         loose.style.display = "none"
//     } else {
//         loose.style.color = "red"
//         win.style.display = "none"
//     }
// }

btn.addEventListener('click', () => {
    guess.innerHTML = result
    compare()
})
