const title = document.querySelector('#title') //selector
const artist = document.querySelector('#artist') //selector
const music = document.querySelector('audio') // tag

// duration elementler
const currentTimeEl = document.getElementById('current=time')
const durationEl = document.getElementById('duration')
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')

// control buttonlarin secilmesi
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')


// fake database
const songs = [
    {
        name: 'sarkazm',
        displayName: 'M-1',
        artist: 'A-1',
    },
    {
        name: 'taboo',
        displayName: 'M-2',
        artist: 'A-2',

    },
    {
        name: 'teciliyardim',
        displayName: 'M-3',
        artist: 'A-3',

    }, {
        name: 'vuryuregim',
        displayName: 'M-4',
        artist: 'A-4',
    }]

    let isPlaying = false

    // Play
    // parametrsiz funksiyalar
    function playSong() {
        isPlaying = true
        playBtn.classList.replace('fa-play', 'fa-pause')
        playBtn.setAttribute('title', 'Pause')
        music.play() //bizim yaratdigimiz deil, audio kitabxanasinin verdiyi imkandir

    }

    // Pause 
    function pauseSong(){
        isPlaying = false
        playBtn.classList.replace('fa-pause', 'fa-play')
        playBtn.setAttribute('title', 'Play')
        music.pause() //bizim yaratdigimiz deil, audio kitabxanasinin verdiyi imkandir
    }

    // Play or Pause Event Listener
    /*
    Ternary operator (if else qiza yazilishi-yalniz if ve else(2 setir yazilanda bunu istifade etmek olar))
    */
    playBtn.addEventListener('click',()=>(isPlaying?pauseSong() : playSong()))



