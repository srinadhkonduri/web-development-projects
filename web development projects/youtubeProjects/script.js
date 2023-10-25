// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function videocon() {
    var videocon= document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-80,
        top:dets.y-80
    })
})
}
videocon();
function loadingAnimation() {
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        Delay:0.5,
        duration:0.8,
        stagger:0.3
    })
}
loadingAnimation();
function videoAnimation(){
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:1,
        Delay:1.5,
        duration:0.3
    })
}
videoAnimation();