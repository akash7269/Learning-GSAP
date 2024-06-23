

const main = document.querySelector("#main");
const cursur = document.querySelector(".cursur");
const imageDiv = document.querySelector(".image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursur,{
        x:dets.x,
        y:dets.y,
        duration:0.5
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursur.innerHTML = "view more"
    gsap.to(cursur, {
        scale:4,
        backgroundColor: "#ffffff7a"
    })
})
imageDiv.addEventListener("mouseleave", function(){
    cursur.innerHTML = ""
    gsap.to(cursur, {
        scale:1,
        backgroundColor: "#fff"
    })
})