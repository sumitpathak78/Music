let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let volSvg=document.querySelector("#vol-svg")
let songRange=document.querySelector("#song-duration")
let musicAnim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")

let index=0;
let playingSong=false;
let track=document.createElement("audio")
let songs=[
    {
        name:"12 Saal",
        path:"songs/12 Saal.mp3",
        image:"image/sumit_pathak.webp",
        singer:"sumit pathak"
    },
    {
        name:"Afusic - pal pal",
        path:"songs/Afusic - Pal Pal.mp3",
        image:"image/OIP.jpg",
        singer:"sumit pathak"
    },
    {
        name:"BACHALO JI",
        path:"songs/BACHALO.mp3",
        image:"image/OIP (1).jpg",
        singer:"sumit pathak"
    },
    {
        name:"BILLA SONIPAT ALA",
        path:"songs/BILLA SONIPAT ALA _ 2.mp3",
        image:"image/OIP (2).jpg",
        singer:"sumit pathak"
    },
    {
        name:"Diamond",
        path:"songs/Diamond.mp3",
        image:"image/OIP (3).jpg",
        singer:"sumit pathak"
    },
    {
        name:"Ei miedo",
        path:"songs/El Miedo.mp3",
        image:"image/OIP (4).jpg",
        singer:"sumit pathak"
    },
    {
        name:"Ishq Tera",
        path:"songs/Ishq Tera.mp3",
        image:"image/sumit_pathak.webp",
        singer:"sumit pathak"
    },
    {
        name:"Kaash bilal saeed bloodline",
        path:"songs/Kaash Bilal Saeed Bloodline.mp3",
        image:"image/OIP (2).jpg",
        singer:"sumit pathak"
    },
    {
        name:"Moon rise",
        path:"songs/Moon Rise.mp3",
        image:"image/sumit_pathak.webp",
        singer:"sumit pathak"
    },
    {
        name:"saiyaara (1980)",
        path:"songs/Saiyaara (1980).mp3",
        image:"image/th.jpg",
        singer:"sumit pathak"
    },
    
]

function loadTrack(index){
    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    songSinger.innerHTML=songs[index].singer;
    songImage.style=`background-image: url("${songs[index].image}");`

    songRange.value=0;

    volume();
    duration()


    // setInterval(()=>{
    //     songRange.max=track.duration
    //     songRange.value=track.currentTime
    // },1000)
    // track.loop=true
    // track.load()

    if (window.updateDurationInterval) {
        clearInterval(window.updateDurationInterval);
    }

    window.updateDurationInterval = setInterval(() => {
        songRange.max = track.duration || 0;
        songRange.value = track.currentTime;
    }, 1000);

    track.loop = true;
    track.load();

}
loadTrack(index);

function playPause(){
    if (playingSong == false){
        playSong()
        
    }
    else{
        pauseSong()
       
    }
}

function playSong(){
    track.play();
    playingSong = true;
    playPauseImg.src="image/play.png"
    musicAnim.style.display="block"
    
    

}
function pauseSong(){
    track.pause();
    playingSong = false;
    playPauseImg.src="image/stop.png"
     musicAnim.style.display="none"
    

}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }
    else{
        index=0;
        loadTrack(index)
        playSong()
    }
}

function previousSong(){
    if(index > 0 ){
        index--;
        loadTrack(index)
        playSong()
    }
    else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}

function volume(){
    track.volume=volumeRange.value/100
    if(volumeRange.value==0){
        volSvg.src="image/mute.png"
    }
    else{
        volSvg.src="image/volume.png"
    }
}

function duration(){
    track.currentTime=songRange.value
}

playlistImg.addEventListener("click",() =>{
    playlist.classList.toggle("playlist-active")
    if(playlist.classList.contains("playlist-active")){
        playlistImg.src = "image/cross.png"
    }
    else{
        playlistImg.src="image/playlist.webp"
    }
})

playlistSong.forEach((song,index) =>{
    song.addEventListener('click',() =>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
        playlistImg.src="image/playlist.webp"
    })
})