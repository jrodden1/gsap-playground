const xAxis = document.querySelector("#x-axis")
const yAxis = document.querySelector("#y-axis path")
const efficiency = document.querySelector("#efficiency-scale")
const time = document.querySelector("#time-scale")
const eline = document.querySelector("#eline1 path")
const whatWillHappenTxt = document.querySelector("#what-will-happen")
const wwht = document.querySelectorAll(".wwht")


const changeProcessTxt = document.querySelector("#change-process")
const changeLine = document.querySelector("#change-line")
const goUp = document.querySelector("#go-up")
const goDown = document.querySelector("#go-down")

// let splitWWHT = new SplitText("#what-will-happen", {type: "words"})
// Apparently the Split Text plugin doesn't work with SVG text elements 
let tl = gsap.timeline()


window.addEventListener("load", function () {
   animationInit()
})


function animationInit() {
   tl.from(xAxis, {duration: 1, drawSVG: 0, ease: "power1"})
   tl.from(yAxis, {duration: 1, drawSVG: 0, ease: "power1"})
   tl.from([efficiency, time], {duration: 2, autoAlpha: 0, stagger: 0.5})
   tl.from(eline, {duration: 1, drawSVG: 0}, "-=1.5")
   tl.from(wwht, {duration: 1, autoAlpha: 0, stagger: 1})

}
GSDevTools.create();
/* 
Notes:
* currently the Process Change Line text and actual Line, and the Go Up and Go Down buttons are hidden.  These still need animated. 
* I should be able to do the pivot from the transformOrigin of the line and make a callback attached to the svg button components that will make the line go up or down. 
*/