var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");

var flag = 0;
addFriend.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML = "friends"
    istatus.style.color = "blue"
    flag = 1;
    } else {
    istatus.innerHTML = "strangers"
    istatus.style.color = "red"
    flag = 0;
    }
})