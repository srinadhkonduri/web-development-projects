var rectangle = document.querySelector("#centre");

rectangle.addEventListener("mousemove",function(details){
    var rectangleLocation = rectangle.getBoundingClientRect();
    var insiderec = details.clientX - rectangleLocation.left;
    if(insiderec<rectangleLocation.width/2){
        var redcolor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insiderec);
        gsap.to(rectangle,{
            backgroundColor : `rgb(${redcolor},0,0)`
        });
    } else {
        var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insiderec);
        gsap.to(rectangle,{
            backgroundColor : `rgb(0,0,${bluecolor})`
        });
    }
})

rectangle.addEventListener("mouseleave",function(){
    gsap.to(rectangle,{
        backgroundColor : `white`
    });
})