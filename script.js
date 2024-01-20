let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctricon = document.getElementById("ctricon");

song.onloadedmetadata = function() {
    progress.max = song.duration; // corrected line
    progress.value = song.currentTime;
}

function playPause() {
    if(ctricon.classList.contains("fa-pause")) {
        song.pause();
        ctricon.classList.remove("fa-pause");
        ctricon.classList.add("fa-play");
    } else {
        song.play();
        ctricon.classList.add("fa-pause");
        ctricon.classList.remove("fa-play");
    }
}