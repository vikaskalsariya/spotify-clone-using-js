var songArrey = [
    { songName: "Justin Bieber - Peaches ft. Daniel Caesar, Giveon", Image: "images/1.jpg", songFile: 'songs/1.mp3', id: 1 },
    { songName: "Alan Walker x salem ilese - Fake A Smile", Image: "images/2.jpg", songFile: 'songs/2.mp3', id: 2 },
    { songName: "Ride It", Image: "images/3.jpeg", songFile: 'songs/3.mp3', id: 3 },
    { songName: "Laal bindi (slowedreverb) - Akull - lofi_vibes", Image: "images/4.jpg", songFile: 'songs/4.mp3', id: 4 },
    { songName: "Bella Ciao", Image: "images/5.jpeg", songFile: 'songs/5.mp3', id: 5 },
    { songName: "Katy Perry - Harleys In Hawaii (Official)", Image: "images/6.jpg", songFile: 'songs/6.mp3', id: 6 },
    { songName: "The Weeknd - Starboy (Audio) ft. Daft Punk", Image: "images/7.jpg", songFile: 'songs/7.mp3', id: 7 },
    { songName: "Clean Bandit - Rockabye", Image: "images/8.jpeg", songFile: 'songs/8.mp3', id: 8 },
    { songName: "sia this is acting", Image: "images/9.jpeg", songFile: 'songs/9.mp3', id: 9 },
    { songName: "No Lie remix", Image: "images/10.jpeg", songFile: 'songs/10.mp3', id: 10 },
];
var songAlbome = document.getElementById('songAlbome');
var audioElement = new Audio("songs/1.mp3")
var songId=1;
// -------------------------------------------------------------------------------------------------------------------
function viewSongs() {
    var innerData = ``;
    songArrey.map((v, i) => {
        innerData += `<div class="song d-flex align-center justify-between">`
        innerData += `    <img src="${v.Image}" alt="" />`
        innerData += `        <h4>${v.songName}</h4>`
        innerData += `        <div>`
        innerData += `            <span>2:05</span>`//${new Audio(v.songFile).duration}
        innerData += `            <i class="playButton ri-play-fill" id="${i + 1}"></i>`
        innerData += `        </div>`
        innerData += `</div>`
    })
    songAlbome.innerHTML = innerData;
}
viewSongs()
// -------------------------------------------------------------------------------------------------------------------
var playButton = Array.from(document.querySelectorAll('.playButton'));
function playPauseButton() {
    playButton.map((v, i) => {
        v.addEventListener('click', (e) => {
            mosterPlay.classList.add('ri-pause-fill')
            mosterPlay.classList.remove('ri-play-circle-line')
            djLines.style.opacity = '1'
            playButton.map((vv, ii) => {
                if (vv.classList[1] == "ri-pause-line") {
                    vv.classList.add('ri-play-fill')
                    vv.classList.remove('ri-pause-line')
                    audioElement.pause()
                };
            });
            if (v.classList[1] == 'ri-play-fill') {
                v.classList.remove('ri-play-fill')
                v.classList.add('ri-pause-line')
                playSong(v.id);
                songId = parseInt(v.id);

            }
            else {
                v.classList.remove('ri-pause-line')
                v.classList.add('ri-play-fill')
            }
            rangeSetting()
        })
    })
}
playPauseButton()
// -------------------------------------------------------------------------------------------------------------------
function playSong(id) {
    songArrey.map((v, i) => {
        if (v.id == id) {
            audioElement = new Audio(`${v.songFile}`);
            audioElement.play()
            document.getElementById('monsterImg').src = `${v.Image}`
            document.getElementById('mosterSonngName').innerHTML = `${v.songName}`
        };
    })
}
// -------------------------------------------------------------------------------------------------------------------
var mosterPlay = document.querySelector('.mosterPlay');
var djLines = document.querySelector('.djLines');
function mosterPlayButton()
{
    
        if (mosterPlay.classList[1] == 'ri-play-circle-line') {
            mosterPlay.classList.remove('ri-play-circle-line')
            mosterPlay.classList.add('ri-pause-fill')
            djLines.style.opacity = '1'
            playSong(songId)
        }
        else {
            mosterPlay.classList.remove('ri-pause-fill')
            mosterPlay.classList.add('ri-play-circle-line')
            djLines.style.opacity = '0'
            audioElement.pause()
            // ----------------------------------
        }
        playButton.map((vv, ii) => {
            if(vv.id == songId)
            {
                if (vv.classList[1] == "ri-pause-line") {
                    vv.classList.add('ri-play-fill')
                    vv.classList.remove('ri-pause-line')
                    audioElement.pause()
                }
                else 
                {
                    vv.classList.remove('ri-play-fill')
                    vv.classList.add('ri-pause-line')
                }
            }
        });
    rangeSetting()
}
// -------------------------------------------------------------------------------------------------------------------
function nextSong()
{
    if(songId < songArrey.length)
    {
        songId+=1;
    }
    else 
    {
        songId=1;
    }
    playButton.map((v, i) => {
        if(v.id == songId)
        {
            playButton.map((vv, ii) => {
                if (vv.classList[1] == "ri-pause-line") {
                    vv.classList.add('ri-play-fill')
                    vv.classList.remove('ri-pause-line')
                    audioElement.pause()
                };
            });
                v.classList.remove('ri-play-fill')
                v.classList.add('ri-pause-line')
        }
    })
// -----------------------------------------
    audioElement.pause()
    playSong(songId)
    mosterPlay.classList.add('ri-pause-fill')
    mosterPlay.classList.remove('ri-play-circle-line')
    rangeSetting()
}
// -------------------------------------------------------------------------------------------------------------------
function prevSong()
{
    if(songId > 1)
    {
        songId-=1;
    }
    else 
    {
        songId=songArrey.length;
    }
    playButton.map((v, i) => {
        if(v.id == songId)
        {
            playButton.map((vv, ii) => {
                if (vv.classList[1] == "ri-pause-line") {
                    vv.classList.add('ri-play-fill')
                    vv.classList.remove('ri-pause-line')
                    audioElement.pause()
                };
            });
            v.classList.remove('ri-play-fill')
            v.classList.add('ri-pause-line')
        }
    })
// -----------------------------------------
    audioElement.pause()
    songArrey.map((v, i) => {
        if (v.id == songId) {
            audioElement = new Audio(`${v.songFile}`);
            document.getElementById('monsterImg').src = `${v.Image}`
            document.getElementById('mosterSonngName').innerHTML = `${v.songName}`
            audioElement.play()
        };
    })
    mosterPlay.classList.add('ri-pause-fill')
    mosterPlay.classList.remove('ri-play-circle-line')
    rangeSetting()
}
// -------------------------------------------------------------------------------------------------------------------
function rangeSetting()
{
    var cTime = document.getElementById('cTime');
    var dTime = document.getElementById('dTime');
    audioElement.addEventListener('timeupdate' , ()=>{
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        progressBar.value = progress;
        cTime.innerHTML = (audioElement.currentTime/60).toFixed(2);
        dTime.innerHTML = ((audioElement.duration)/60).toFixed(2);

        if(audioElement.currentTime == audioElement.duration)
        {
            nextSong()
        }


    })
    progressBar.addEventListener('change' , ()=>{
        audioElement.currentTime = progressBar.value * audioElement.duration / 100;
    })
}