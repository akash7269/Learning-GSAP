const box = document.querySelector(".box");

gsap.to(".box",{
    x:600,
    duration:2,
    delay:1,
    rotate:360
})
gsap.to(".box1",{
    x:600,
    y:300,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor: "blue",
    borderRadius: "100px"
})

gsap.from("h1" ,{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger: 1
})

gsap.to(".box2", {
    x:1200,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo: true
})