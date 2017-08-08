// var button = document.querySelector("button");
// var paragraph = document.querySelector("p");
// var h1s= document.querySelector("h1");
// var lis= document.querySelectorAll("li");

// button.addEventListener("click", function()
// {
// 	console.log("Event #"); 
// 	paragraph.textContent ="Someone Cliked the Button";
// 	h1s.style.background = "orange";

	 

// }	);

// for(var i=0; i < lis.length; i++){
// 	lis[i].addEventListener("click", function(){
// 		console.log(this);
// 		this.style.color="pink";
// 	});
//  }

var but  =document.querySelector("button");
var bo= document.querySelector("body");
 

// function fpurple() {
// 	bo.style.background = "purple";
// 	but.addEventListener("click", fwhite);
// 	function fwhite() {
// 	bo.style.background ="white";
// 	but.addEventListener("click", fpurple);
// }
// }

// fpurple();
//  

// var ispurple = false;


// but.addEventListener("click", function(){
// 	if(ispurple){
// 		bo.style.background="white";
// 		ispurple=false;
// 	}	
// 	else{
// 		bo.style.background="purple";
// 		ispurple=true;	
// 	}

// });
 
but.addEventListener("click",function(){
	document.body.classList.toggle("purple");
});