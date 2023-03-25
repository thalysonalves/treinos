let musics = [
    {title:'Você', artist:'Tim Maia', src:'musics/voce.mp3', img:'images/timmaia.jpg'},
    {title:'Cadeira de Rodas', artist:'Fernando Mendes', src:'musics/cadeiraderodas.mp3', img:'images/fernandomendes.jpg'},
    {title:'Sem Medo de Ser Feliz', artist:'Zezé Di Carmargo e Luciano', src:'musics/semmedodeserfeliz.mp3', img:'images/zezedicamargo_luciano.jpg'}
];

document.querySelector('.button-pause').style.display = 'none';

let music = document.querySelector('audio');
let indexMusic = 0;

let durationMusic = document.querySelector('.end');
let image = document.querySelector('img');
let nameMusic = document.querySelector('.descrition h2');
let nameArtist = document.querySelector('.descrition i');

changeMusic(indexMusic);

// Eventos
document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', loadCrossBar);

document.querySelector('.previous').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 2;
    }
    changeMusic(indexMusic);
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 2){
        indexMusic = 0;
    }
    changeMusic(indexMusic);
});

// Funções
function changeMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nameMusic.textContent = musics[index].title;
        nameArtist.textContent = musics[index].artist;
        image.src = musics[index].img;
        durationMusic.textContent = secondsToMinutes(Math.floor(music.duration));
    });
}

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.button-pause').style.display = 'none';
    document.querySelector('.button-play').style.display = 'block';
}

function loadCrossBar(){
    let crossBar = document.querySelector('progress');
    crossBar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let elapsedTime = document.querySelector('.inicio');
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(seconds){
    let campMinutes = Math.floor(seconds / 60);
    let campoSeconds = seconds % 60;
    if (campoSeconds < 10){
        campoSeconds = '0' + campoSegundos;
    }

    return campMinutes+':'+campoSegundos;
}