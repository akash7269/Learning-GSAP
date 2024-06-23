

// gsap.from(".page1 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })
// gsap.from(".page2 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger:{
//         trigger:".page2 .box",
//         scroller: "body",
//         markers: true,
//         start:"top 60%",
//         end: "top 30%",
//         scrub:2
//     }
// })

gsap.to(".page2 h1", {
    transform: "translateX(-110%)",
    scrollTrigger:{
        trigger: "page2",
        scroller: "body",
        start: "top 0%",
        end: "top -190%",
        scrub: 1,
        pin: true
    }
})