let audioPlayer = document.getElementById('audioPlayer');
let slideIndex = 1;
let slides = document.getElementsByClassName("videoslide");
let slidecont = []
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
	document.body.style.animationPlayState = "running";
});
for (j = 0; j < slides.length; j++){
	slidecont.push(slides[j].innerHTML)
}
showSlides(slideIndex);
//console.log(slidecont)


function plusSlides(n) {
	clicksfx()
	showSlides(slideIndex += n);
}


function showSlides(n) {
	let i;
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		slides[i].innerHTML = ""
	}
	slides[slideIndex-1].innerHTML = slidecont[slideIndex-1]
	slides[slideIndex-1].style.display = "flex";
}
function power(){
	clicksfx();
	setTimeout(leave, 700 );
	//window.location.href = "hub.html";
}

function leave(){
	window.location.href = "hub.html"
}


function clicksfx(){
    audioPlayer.load();
	audioPlayer.volume = 0.5;
    audioPlayer.play();
}