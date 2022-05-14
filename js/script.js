
const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progressBar = document.querySelector('#progressBar');

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$play.addEventListener('click',handlePlay);
$pause.addEventListener('click',handlePause);
$backward.addEventListener('click',handleBackward);
$forward.addEventListener('click',handleForward);
// $progressBar.addEventListener('click',handleProgressBar);
$progressBar.addEventListener('input', handleProgressInput)


function handleProgressInput() {
    console.log($progressBar.value);
    $video.currentTime = $progressBar.value
}

function handleLoaded() {
    // console.log("se cargo el video satisfactoriamente y dura " + $video.duration + " segundos" )
    $progressBar.max = $video.duration; 
    
}

function handleTimeUpdate() {
    $progressBar.value = $video.currentTime;
    console.log("elvideo va en " + $video.currentTime)
    
}

function handlePlay() {
    // console.log("Hello le diste al play");
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    // console.log("Hello le diste al pause");
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function handleBackward() {
    console.log("Hello le diste al backward" , $video.currentTime);
    $video.currentTime -= 10;
    console.log("Ahora estamos en" , $video.currentTime);
}
function handleForward() {
    console.log("Hello le diste al forward" , $video.currentTime);
    $video.currentTime += 10;
    console.log("Ahora estamos en" , $video.currentTime);
}

// function handleProgressBar(){
//     alert("Cliqueaste la progress Bar bandidaso")
//     console.log("dfgdfgdfgdfg");
// }