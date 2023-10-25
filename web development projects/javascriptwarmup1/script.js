window.addEventListener("mousemove",function(details){
    var rect = this.document.querySelector("#rect");
    var xval = gsap.utils.mapRange(0,this.window.innerWidth,100+rect.getBoundingClientRect().width/2,
    this.window.innerWidth - 300+rect.getBoundingClientRect().width/2,
    details.clientX
    );
    gsap.to('#rect',{
        left:details.clientX + 'px',
    });
})