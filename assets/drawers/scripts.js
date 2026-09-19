let drawdoor = document.getElementById("door")
let doorstate = 0
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
	document.body.style.animationPlayState = "running";
});
function dooropen(){
	drawPlayer.load();
	drawPlayer.volume = 0.5;
    drawPlayer.play();
	if (doorstate == 0){drawdoor.style.transform = "translateY(80%)";doorstate = 1}
	else{drawdoor.style.transform = "";doorstate = 0}
	
}

let drawPlayer = document.getElementById('drawPlayer');
drawPlayer.load();
let paperPlayer = document.getElementById('paperPlayer');
paperPlayer.load();

let cs = []
let imagecont = document.getElementById("imgcont")
let captioncont = document.getElementById("captioncont")
let artistcont = document.getElementById("artistcont")
let slidecont = document.getElementById("slidecont")
let sarrowcont = document.getElementById("sidebuttoncont")

function hideimg(){
	papernoise()
	slidecont.style.display = "none";
}


function limitcheck(pg){
	let ss = []
	ss[0] = cs[0]+pg[0]
	ss[1] = cs[1]+pg[1]
	switch (ss[0]){
		case -1:
			ss[0] = (slidematrix.length -1);
			ss[1] = 0;
			break;
		case slidematrix.length:
			ss[0] = 0;
			ss[1] = 0;
	};
	switch(ss[1]){
		case -1:
			ss[1] = (slidematrix[cs[0]][1].length -1);
			break;
		case slidematrix[cs[0]][1].length:
			ss[1] = 0;
			break;		
	};
	if (Math.abs(pg[0]) == 1){
		ss[1] = 0;
	};
	console.log(ss)
	currentslide(ss)
}





function currentslide(ss){
	cs = ss
	papernoise()
	slidecont.style.display = "block";
	//console.log(ss)
	artistset(ss);
	captionset(ss);
	imageset(ss);
	arrowcheck(ss)
	
}
function arrowcheck(ss){
	if (slidematrix[ss[0]][1].length == 1){
		sarrowcont.style.display = "none";
	}else{
		sarrowcont.style.display = "block";
	}
}
function artistset(ss){
	artistcont.innerHTML = slidematrix[ss[0]][0]
	//console.log(slidematrix[ss[0]][0])
}
function captionset(ss){
	captioncont.innerHTML = slidematrix[ss[0]][1][ss[1]][1]
	//console.log(slidematrix[ss[0]][1][ss[1]][1])
}function imageset(ss){
	imagecont.innerHTML = slidematrix[ss[0]][1][ss[1]][0]
	//console.log(slidematrix[ss[0]][1][ss[1]][0])
}


let slidematrix = [
	["Autistic Monkee",[["<img class='dispimg' src='./assets/drawers/images/AutisticMonkee/0.webp'</img>",""]]],





	["Danootje",[["<img class='dispimg' src='./assets/drawers/images/Daanootje/0.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Daanootje/1.webp'</img>",""]]],







	["Desi Art",[["<img class='dispimg' src='./assets/drawers/images/DesiArt/0.webp'</img>",""]]],








	["Devops",[["<img class='dispimg' src='./assets/drawers/images/Devops/0.webp'</img>",""]]],







	["Garghoulie Army",[["<img class='dispimg' src='./assets/drawers/images/gargouliearmyD/0.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/gargouliearmyD/1.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/gargouliearmyD/2.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/gargouliearmyD/3.webp'</img>",""]]],


	["Gibberish03",[["<img class='dispimg' src='./assets/drawers/images/Gibberish03/0.webp'</img>",""]]],




	["GlarnBoudin, Commisioned from Phoenix-Fightmaster",[["<img class='dispimg' src='./assets/drawers/images/GlarnBoudin/0.webp'</img>",""]]],


	["Kapotalius",[["<img class='dispimg' src='./assets/drawers/images/Kapotalius/0.webp'</img>",""]]],
	["Leucorrupt",[["<img class='dispimg' src='./assets/drawers/images/Leucorrupt/0.webp'</img>",""]]],
	["Liv [54BPM]",[["<img class='dispimg' src='./assets/drawers/images/Liv54BPM/0.webp'</img>",""]]],




	["Madwick",[["<img class='dispimg' src='./assets/drawers/images/Madwick/0.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Madwick/1.webp'</img>",""]]],



	["MrCoffeeCobra",[["<img class='dispimg' src='./assets/drawers/images/MrCoffeeCobra/0.webp'</img>",""]]],
	["Pure Energy",[["<img class='dispimg' src='./assets/drawers/images/Pure Energy/0.webp'</img>",""]]],

	["Scayris",[["<img class='dispimg' src='./assets/drawers/images/Scayris/0.webp'</img>",""]]],




	["Sunde3w",[["<img class='dispimg' src='./assets/drawers/images/Sund3w/0.webp'</img>",""]]],


	["Superspinch & Lopol",[["<img class='dispimg' src='./assets/drawers/images/SuperspinchLopol/0.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/SuperspinchLopol/1.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/SuperspinchLopol/2.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/SuperspinchLopol/3.webp'</img>",""]]],




	["Vo1d",[["<img class='dispimg' src='./assets/drawers/images/Vo1d/0.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Vo1d/1.webp'</img>",""]]],









	["Yomi, Commisioned from nogame_kun",[["<img class='dispimg' src='./assets/drawers/images/Yomiartartistnogamekun/0.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Yomiartartistnogamekun/1.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Yomiartartistnogamekun/2.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Yomiartartistnogamekun/3.webp'</img>",""]]],

	["Sol",[["<img class='dispimg' src='./assets/drawers/images/Sol/0.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/1.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/2.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/3.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/4.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/5.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/6.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/7.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/8.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/9.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/10.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/11.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/12.webp'</img>",""],["<img class='dispimg' src='./assets/drawers/images/Sol/13.webp'</img>",""]]]


	
]







function papernoise(){
	paperPlayer.load();
	paperPlayer.volume = 0.5;
    paperPlayer.play();
}
