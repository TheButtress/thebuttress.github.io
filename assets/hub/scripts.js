let audioPlayer = document.getElementById('audioPlayer');
let root = document.querySelector(':root');

function yellowpaint(){
	root.style.setProperty('--paint', "sepia(1) hue-rotate(13deg) saturate(8) drop-shadow(0px 0px 20px white)");
    audioPlayer.load();
	audioPlayer.volume = 0.5;
    audioPlayer.play();
}
