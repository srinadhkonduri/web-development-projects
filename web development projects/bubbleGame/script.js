var timer=60;
var score =0;
var clutter ="";
var hitrn = 0;

function scoreval() {
    score += 10;
    document.querySelector("#scorehit").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").innerHTML = hitrn;
}
function makeBubble() {

for(i=1;i<=84;i++){
    var random =Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random}</div>`
}
document.querySelector("#panelbtm").innerHTML = clutter;
}
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<gameoverh1></h1>`;
        }
    },1000);
}

document.querySelector("#panelbtm")
.addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent)
    if(clickedNum === hitrn){
        scoreval();
        makeBubble();
        getNewHit();
    }
    
})
getNewHit();
runtimer();
makeBubble();