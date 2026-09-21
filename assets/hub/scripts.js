let audioPlayer = document.getElementById('audioPlayer');
let audioPlayer2 = document.getElementById('audioPlayer2');
let audioPlayer3 = document.getElementById('audioPlayer3');
let audioPlayer4 = document.getElementById('audioPlayer4');
let audioPlayer5 = document.getElementById('audioPlayer5');
let audioPlayer6 = document.getElementById('audioPlayer6');
let audioPlayer7 = document.getElementById('audioPlayer7');
let squeaker = document.getElementById('squeak');
let squeaker2 = document.getElementById('squeak2');
scount = 0
squeakeffect = Math.floor(Math.random() * 2);
squeaktimer = Math.floor(Math.random() * 15) + 10;


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
	squeaker.style.backgroundImage = "url(./assets/hub/images/squeaker1.webp)";
    audioPlayer5.load();
	audioPlayer5.volume = 0.4;
    audioPlayer5.play();
	setTimeout(unsqueak, 300)
}

function unsqueak(){
	if (scount > squeaktimer){
		audioPlayer5.pause()
		if (squeakeffect == 1){
		audioPlayer7.load();
		audioPlayer7.volume = 0.4;
    	audioPlayer7.play();
		squeaker.style.display = "none";
		squeaker2.style.display = "block";
		}else{
			audioPlayer6.load();
		audioPlayer6.volume = 0.4;
    	audioPlayer6.play();
		squeaker.style.display = "none";
		}
	}else{
		squeaker.style.backgroundImage = "url(./assets/hub/images/squeaker.webp)";
	}
	scount ++;
}
