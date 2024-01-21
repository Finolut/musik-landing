let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon"); // Fixed ID name
let rotatingImage = document.getElementById("rotatingImage");
let songTitle = document.getElementById("song-title");
let artist = document.getElementById("artist");

let playlist = [
    { title: "Haruka", artist: "yaosobi", src: "audio/Y2meta.app - YOASOBI「ハルカ」.mp3", img: "img/cover.jpg" },
    { title: "Daylight", artist: "Taylor Swift", src: "audio/Y2meta.app - Taylor Swift - Daylight.mp3", img: "img/cover2.jpg" },
    // Add more songs to the playlist as needed
];

let currentSongIndex = 0;

function initializePlayer() {
    song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
        updateSongInfo();
    }

    song.ontimeupdate = function () {
        progress.value = song.currentTime;
    }

    progress.oninput = function () {
        song.currentTime = progress.value;
    }

    loadSong();
}

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
        rotatingImage.classList.add('rotate'); // Add the rotate class
    } else {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
        rotatingImage.classList.remove('rotate'); // Remove the rotate class
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong();
}

function loadSong() {
    song.src = playlist[currentSongIndex].src;
    rotatingImage.src = playlist[currentSongIndex].img; // Update the image source
    song.load();
    playPause(); // Auto-play the loaded song
    updateSongInfo();

    // Set a timeout to automatically switch to the next song after the current one finishes
    setTimeout(() => {
        nextSong();
    }, (song.duration - song.currentTime) * 1000); // Convert duration and currentTime to milliseconds
}

function updateSongInfo() {
    songTitle.textContent = playlist[currentSongIndex].title;
    artist.textContent = playlist[currentSongIndex].artist;
}

window.addEventListener('DOMContentLoaded', function () {
    initializePlayer();

    var playButton = document.querySelector('.controls div:nth-child(2)');
    playButton.addEventListener('click', playPause);

    var nextButton = document.querySelector('.controls div:nth-child(3)');
    nextButton.addEventListener('click', nextSong);

    var prevButton = document.querySelector('.controls div:nth-child(1)');
    prevButton.addEventListener('click', previousSong);
});
