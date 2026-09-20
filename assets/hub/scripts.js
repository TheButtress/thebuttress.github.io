let audioPlayer = document.getElementById('audioPlayer');
let audioPlayer2 = document.getElementById('audioPlayer2');
let audioPlayer3 = document.getElementById('audioPlayer3');
let audioPlayer4 = document.getElementById('audioPlayer4');
let audioPlayer5 = document.getElementById('audioPlayer5');

audioPlayer2.load();
let root = document.querySelector(':root');
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
	document.body.style.animationPlayState = "running";
	audioPlayer2.volume = 0.5;
    audioPlayer2.play();
});
function yellowpaint(){
	root.style.setProperty('--paint', "sepia(1) hue-rotate(13deg) saturate(8) drop-shadow(0px 0px 20px white)");
    audioPlayer.load();
	audioPlayer.volume = 0.5;
    audioPlayer.play();
}
function courage(){
	rnum = Math.floor(Math.random() * 2);
	if (rnum == 0){
		audioPlayer3.load();
	audioPlayer3.volume = 0.5;
    audioPlayer3.play();
	}else{
		audioPlayer4.load();
	audioPlayer4.volume = 0.5;
    audioPlayer4.play();
	}
}
function squeak(){
    audioPlayer5.load();
	audioPlayer5.volume = 0.5;
    audioPlayer5.play();
}
