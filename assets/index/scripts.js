const audioPlayer = document.getElementById('audioPlayer');
const startButton = document.getElementById('start');
audioPlayer.load();






function audiotest(){
	rnum = Math.floor(Math.random() * 3);
	audioPlayer.src = "./assets/index/sounds/"+rnum+".mp3";
	startButton.style.display = "block"
    audioPlayer.load();
	//audioPlayer.volume = 0.5;
    audioPlayer.play();
}
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
	document.body.style.animationPlayState = "running";
});