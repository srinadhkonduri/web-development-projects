let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currrentTime;
}

function playpause() {
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    } else{
        song.play();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}