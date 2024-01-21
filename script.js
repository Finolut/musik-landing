let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

window.addEventListener('DOMContentLoaded', function() {
    function playPause() {
        var audio = document.getElementById('song');
        var playButton = document.getElementById('ctrlicon');
        if (audio.paused) {
            audio.play();
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        } else {
            audio.pause();
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        }
    }

    var playButton = document.querySelector('.controls div:nth-child(2)');
    playButton.addEventListener('click', playPause);
});


song.ontimeupdate = function() {
    progress.value = song.currentTime;
}

window.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.controls div:nth-child(2)');
    playButton.addEventListener('click', playPause);
});

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
}