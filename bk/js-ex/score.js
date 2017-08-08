
var p1b=document.querySelector("#p1");
var p2b=document.getElementById("p2");
var reset=document.querySelector("#reset");
var p1ds=document.querySelector("#p1ds");
var p2ds=document.querySelector("#p2ds");

// Ao invez de usar uma id, selecionar "p" e com "espaço" selecionar "span"
var WinScoreDisplay=document.querySelector("p span");
var numInput=document.querySelector("input");
 
var p1score=0;
var p2score=0;

var gameOver=false;
var WinScore=5;



p1b.addEventListener("click", function(){
	if(!gameOver){
	p1score++;

	if(p1score === WinScore){
		p1ds.classList.add("winner");
		gameOver=true;
		}

	p1ds.textContent= p1score;

	}
});

p2b.addEventListener("click", function(){
	if(!gameOver){
	p2score++;

	if(p2score === WinScore){
		p2ds.classList.add("winner");
		gameOver=true;
		}

	p2ds.textContent= p2score;

	}
});

function resetf(){
	p1score=0;
	p2score=0;
 	p1ds.textContent= p1score;
 	p2ds.textContent= p2score;
 	p1ds.classList.remove("winner");
 	p2ds.classList.remove("winner");

	gameOver=false;
}

reset.addEventListener("click", function(){
	// console.log("reset pressed")
	resetf();
	 
});

// Ao invez de click change ...
numInput.addEventListener("change", function(){
	// pra usar o valor do input, usar numInput.value
	WinScoreDisplay.textContent=this.value;
	WinScore=Number(this.value);
	resetf();
 
})