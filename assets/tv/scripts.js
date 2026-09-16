let audioPlayer = document.getElementById('audioPlayer');
let slideIndex = 1;
let slides = document.getElementsByClassName("videoslide");
let slidecont = []
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
	//window.location.href = "index.html";
}

function leave(){
	window.location.href = "index.html"
}


function clicksfx(){
    audioPlayer.load();
	audioPlayer.volume = 0.5;
    audioPlayer.play();
}