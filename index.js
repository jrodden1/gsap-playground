const xAxis = document.querySelector("#x-axis")
const yAxis = document.querySelector("#y-axis path")
const efficiency = document.querySelector("#efficiency-scale")
const time = document.querySelector("#time-scale")
const eline = document.querySelector("#eline1 path")
const whatWillHappenTxt = document.querySelector("#what-will-happen")
const changeProcessTxt = document.querySelector("#change-process")
const changeLine = document.querySelector("#change-line")
const goUp = document.querySelector("#go-up")
const goDown = document.querySelector("#go-down")

let tl = gsap.timeline()


window.addEventListener("load", function () {
   animationInit()
})




function animationInit() {
   tl.from(xAxis, {duration: 1, drawSVG: 0, ease: "power1"})
   tl.from(yAxis, {duration: 1, drawSVG: 0, ease: "power1"})
   tl.from([efficiency, time], {duration: 3, autoAlpha: 0, stagger: 0.5})
   tl.from(eline, {duration: 1, drawSVG: 0})
}
GSDevTools.create();
