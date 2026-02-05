var tl = gsap.timeline()

tl.from("nav",{
    y:-40,
    opacity:0,
    duration:1,
    delay:1,
})
tl.from(".nav-logo",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0,  
})

tl.from("li",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0,
})

tl.from(".nav-btn",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0,
})

tl.from(".nav-start-btn",{
    x:80,
    opacity:0,
    duration:0.2,
    delay:0,
})

gsap.from(".user-img img",{
    scale:0.2,
    borderRadius:"90%",
    duration:4,
    
})

gsap.from("input",{
    y:-200,
    opacity:0,
    duration:3,
    delay:0,
})