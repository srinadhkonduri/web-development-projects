const throttleFunction=(func, delay)=>{
let prev = 0;
return (...args) => {
let now = new Date().getTime();
console.log(now-prev, delay);
if(now - prev> delay){
prev = now;
return func(...args); 
            }
        }   
    }
document.querySelector("#centre").addEventListener("mousemove",throttleFunction((dets)=>{

    // creating div 
var div = document.createElement("div")
div.classList.add("imagediv");
div.style.left = dets.clientX + 'px';
div.style.top = dets.clientY + 'px';

    // creating elements in html using java script with the help of 
    // create element tag
var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80")
        div.appendChild(img);

        gsap.to(img,{
            y:"0%",
            delay : .6,
            duration: .5
            
        });
        // create a div in js with help of append child
        document.body.appendChild(div);
        setTimeout(function(){
            div.remove();
        },2000)
    },400)
    );