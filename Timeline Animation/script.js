const menu = document.querySelector(".nav i")
const cross = document.querySelector(".full i")

var tl = gsap.timeline()

tl.to(".full", {
    right: 0,
    duration: 0.3
})
tl.from(".full h5",{
    x:100,
    duration: 0.4,
    stagger: 0.2,
    opacity: 0
})
tl.from(".full i",{
    opacity: 0
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})