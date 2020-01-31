const efficiency = document.querySelector("#efficiency-scale")
const time = document.querySelector("#time-scale")
let fadeInTl = gsap.timeline()
// I'll use you later
// const eline = document.querySelector("#eline1 path")

window.addEventListener("load", function () {
   animationInit()
})




function animationInit() {
   fadeInTl.from([efficiency, time], {duration: 3, autoAlpha: 0, stagger: 0.5}, "+=2")
   
}
GSDevTools.create();
