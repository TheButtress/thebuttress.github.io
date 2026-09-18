let clickPlayer = document.getElementById('clickPlayer');
let slideIndex = 1;
let slides = document.getElementsByClassName("audioslide");
let tapespool = document.getElementById('tapespool');
let slidecont = []
let currentslide 
let song
for (j = 0; j < slides.length; j++){
	slidecont.push(slides[j].innerHTML)
}
let songtime = 0
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
	currentslide = slides[slideIndex-1]
	song = currentslide.getElementsByTagName("audio")[0]
	song.load();
	tapespool.style.animation = ""
}


function playaudio(){
	songtime = song.duration
	console.log(songtime)
	clicksfx();
	song.volume = 0.1;
    song.play();
	tapespool.style.animation = "tapeplay " + songtime + "s "+ "linear "+"forwards "
}

function pauseaudio(){
	clicksfx();
	tapespool.style.animationPlayState="paused"
    song.pause();
}

function audiopopup(){
	navigator.mediaDevices.getUserMedia({ audio: true })
	.then(function(stream) {
	console.log('You let me use your mic!')
	})
	.catch(function(err) {
	console.log('No mic for you!')
	});

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
    clickPlayer.load();
	clickPlayer.volume = 0.5;
    clickPlayer.play();
}