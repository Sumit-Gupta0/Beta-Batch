// const answer = document.querySelector(".answer")
// const btns = document.querySelectorAll(".btn") //class


// function showAns() {
//     console.log("Clicked")
//     if (btns.children.answer.style.display == "none") {
//         btns.children.answer.style.display = "block"
//     }
//     else {
//         btns.children.answer.style.display = "none"
//     }
// }

// btns.forEach(btnn => {
//     btnn.addEventListener('click', () => {
//         btnn.classList.toggle('showAns')
//         showAns()
//         gsap.to(btnn, {
//             rotate: 45,
//             duration: 0.3,
//             delay: 0,
//             repeat:1,
//             ease: "power2.out",
//             transformPerspective: 1000,
//         })
//     });

// });



// btns.addEventListener('click',showAns)

let faq = document.querySelectorAll(".faq")
let answer = document.querySelector(".answer")
let btn = document.querySelector(".btn")

faq.forEach(btn => {
    btn.addEventListener('click', () => {

        // console.log(btn.children.answer.showAns)
        // btn.children.answer.style.display = answer.style.display === "none" ? "flex" : "none";
        // showAns()

        console.log(btn.classList)
        console.log(answer.classList.toggle('showAns'))
        if (btn.children.answer.style.display == "none") {
            btn.children.answer.style.display = "block"
        }
        else {
            btn.children.answer.style.display = "none"
        }

         gsap.to("#btn", {
            rotate: 45,
            duration: 0.3,
            delay: 0,
            repeat:1,
            ease: "power2.out",
            transformPerspective: 1000,
        })
    })
})