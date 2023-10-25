var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
    bulb.style.backgroundColor = "green"
    console.log("bulb is on");
    flag = 1;
    } else {
    bulb.style.backgroundColor = "orange"
    console.log("bulb is off");
    flag = 0;
    }
})