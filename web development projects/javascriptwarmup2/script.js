var arr =[
    {dp:"https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg",
    story:"https://images.lifestyleasia.com/wp-content/uploads/sites/2/2023/08/02175404/Untitled-design-2023-01-11T080649.335-1600x900.jpg"
    },
    {dp:"https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg",story:"https://wallpapers.com/images/featured/jimin-0xg0uung6wwze4vd.jpg"},
    {dp:"https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg",story:"https://hips.hearstapps.com/hmg-prod/images/jimin-of-boy-band-bts-aka-bangtan-boys-is-seen-upon-arrival-news-photo-1568220406.jpg?crop=0.667xw:1.00xh;0.241xw,0&resize=1200:*"}
]
var stories = document.querySelector("#storiyan")

var clutter =""
arr.forEach(function(elem,index) {
    clutter += `<div class="story">
    <img  id = "${index}"  src="${elem.dp}" alt="">
</div>`
})

stories.innerHTML = clutter;
stories.addEventListener("click",function(details) {
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[details.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display ="none"
    },3000)
})