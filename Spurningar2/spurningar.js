"use strict";
function spir(spur, val,svar)//val=[]
{
	this.spurn=spur;
	this.valmoguleikar=val;
	this.svar=svar;
}


spir.prototype.xd=function(){
	document.getElementById("spurning").innerHTML=this.spurn;

	for (var i = 0; i < this.valmoguleikar.length; i++) {
		var divid = document.createElement("div");        // Create a <button> element 
		var aid = document.createElement("a");
		var texti = document.createTextNode(this.valmoguleikar[i]);       // Create a text node
		aid.appendChild(texti);  
		divid.appendChild(aid);                              // Append the text to <button>
		document.getElementById("val").appendChild(divid); 
	};
}


var spurningar = [new spir("er þetta boolsk spurning",['false','true'],1/*index*/),new spir("4+4*10",['44','80','30', 'ég veit ekki'],0),new spir("Hverjar eru líkurnar að þú svarir þessu rétt?",['25%','50%','25%', '100%'],1)];//tvær spurningar

function shuffleArray(array) {
 let m = array.length, t, i;
 // While there remain elements to shuffle…
 while (m) {
 // Pick a remaining element…
 i = Math.floor(Math.random() * m--);
 // And swap it with the current element.
 t = array[m];
 array[m] = array[i];
 array[i] = t;
 }
 return array;
}
spurningar = shuffleArray(spurningar);
spurningar[0].xd();

function adferd(e){
	e.preventDefault();                            // Use preventDefault() 
  var target, elList;               // Declare variables
 
  target = e.target;                             // Get the item clicked link

  if ( target.nodeName.toLowerCase() == "a" ) {  // If user clicked on an a element
  	console.log(target);
  	console.log(target.parentNode);
    elList = target.parentNode;             // Remove list item from list
    if (target.textContent==spurningar[0].valmoguleikar[spurningar[0].svar]) {
    	elList.className="green";
    }
    else{ 
    	elList.className="red";
	}
  }
}

  var hlustari = document.getElementById('val');

hlustari.addEventListener("click", adferd,false);