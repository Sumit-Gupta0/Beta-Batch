const btn = document.getElementById("btn")
const head = document.getElementById("head")

let num = 0;
btn.addEventListener('click', () => {
    num++;
    head.innerHTML = num;
})