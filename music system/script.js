let audio = document.querySelector("audio");
let play = document.getElementById("play");
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let img = document.querySelector('img');
let songName = document.getElementById('song_name')

let isPLaying = false;

let songs = [
    {
    name : "Roopwa Salona",
    music : 'music1',
    image : 'image1',
},
{
    name : "Pagal kaile ba",
    music : 'music2',
    image : 'image2'
},
{
    name : "Senur Rang",
    music : 'music3',
    image : 'image3'
},
{
    name : "Ram Ji",
    music : 'music4',
    image : 'image4'
},
]

const playMusic = () => {
    audio.play();
    play.className = play.className.replace('fa-play', 'fa-pause')
    isPLaying = true;
}

const pauseMusic = ()=>{
    audio.pause();
    play.className = play.className.replace('fa-pause', 'fa-play')
    isPLaying = false;
}

play.addEventListener('click', () => {
    if(!isPLaying){
        playMusic();
    }else{
       pauseMusic();
    }
})

let i = 0;

prev.addEventListener("click", ()=>{
    if(i == 0) i = songs.length-1;
    else i--;
    audio.src = 'music/'+songs[i].music+'.mp3' ;
    img.src =  "music/"+songs[i].image+".jpeg";
    songName.textContent = songs[i].name;
    playMusic();
})

next.addEventListener("click", ()=>{
    if(i==songs.length-1) i= 0;
    else i++;
    audio.src = 'music/'+songs[i].music+'.mp3' ;
    img.src =  "music/"+songs[i].image+".jpeg";
    songName.innerHTML= songs[i].name;
    playMusic();
})