const title = document.querySelector('#title') //selector
const artist = document.querySelector('#artist') //selector
const music = document.querySelector('audio') // tag

// duration elementler
const currentTimeEl = document.getElementById('current-time')
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
        music.play() 
        //bizim yaratdigimiz deil, audio kitabxanasinin verdiyi imkandir

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

    // parametrli funksiyalar
    /* function total(a=0, b=0){
        return a + b
    }*/
    function loadSong(song){
        title.textContent = song.displayName
        artist.textContent = song.artist
        music.src =`../music/${song.name}.mp3` 
    }
    // initial value = 0
    let songIndex = 0

    function prevSong(){
        // decrement --
        // songIndex = songIndex - 1
        songIndex --
        if(songIndex < 0){
            songIndex = songs.length - 1
        }
        loadSong(songs[songIndex])
        playSong()
    }

    function nextSong(){
        songIndex ++
        if(songIndex>songs.length-1){
            songIndex = 0
        }
        loadSong(songs[songIndex])
      
    }
    loadSong(songs[songIndex])

    // Update progress
    function updateProgressBar(e) {  // e - event
        if(isPlaying) {
            // object destructuring
            const {duration, currentTime} = e.srcElement
            const progressPercent = (currentTime/duration)*100
            progress.style.width = `${progressPercent}%`

            // calculate for duration
            const durationMinutes = Math.floor(duration/60)
            let durationSeconds = Math.floor(duration%60)

            if(durationSeconds<10){
                durationSeconds = `0${durationSeconds}`
            }
            if(durationSeconds){
                durationEl.textContent = `${durationMinutes}:${durationSeconds}`
            }
            // calculate for current time
            const currentMinutes = Math.floor(currentTime/60)
            let currentSeconds = Math.floor(currentTime%60)

            if(currentSeconds < 10){
                currentSeconds = `0${currentSeconds}`

            }
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
        }
    }   

    // eventListener
    prevBtn.addEventListener(`click`, prevSong)
    nextBtn.addEventListener('click', nextSong)
    music.addEventListener('timeupdate', updateProgressBar)