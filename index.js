const efficiency = document.querySelector("#efficiency-scale")
const time = document.querySelector("#time-scale")
const xAxis = document.querySelector("#x-axis")
const yAxis = document.querySelector("#y-axis path")
// const eline = document.querySelector("#eline1 path")

let tl = gsap.timeline()


window.addEventListener("load", function () {
   animationInit()
})




function animationInit() {
   tl.from(xAxis, {duration: 1, drawSVG: 0, ease: "power1"})
   tl.from(yAxis, {duration: 1, drawSVG: 0, ease: "power1"})
   tl.from([efficiency, time], {duration: 3, autoAlpha: 0, stagger: 0.5})
}
GSDevTools.create();
