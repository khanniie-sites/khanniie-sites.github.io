let url = "http://poetrydb.org/author,title/Shakespeare;Sonnet;"
let container = document.getElementById("sonnet-container");

let sonnetJson = null;

function generate(sonnets){
	let resultArray = [];
	let sonnet = sonnets[Math.floor(Math.random() * sonnets.length)];
	let lines = sonnet.lines;
	document.getElementById("sonnet-name").innerHTML = "Shakespeare's " + sonnet.title;
	for (var i = 0; i < lines.length; i++){
		let lineArr = lines[i].split(" ");
		let doggyDogWorld = lineArr.map(ele => (RiTa.isNoun(ele) ? "dog" : ele));
		let HTMLline = document.createElement("DIV");
		HTMLline.innerHTML = doggyDogWorld.join(" ");
		container.append(HTMLline);
	}
}

//https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
var client = new XMLHttpRequest();
client.open('GET', '/assets/sonnets.txt');
client.onreadystatechange = function() {
	sonnetJson = JSON.parse(client.responseText);
  	generate(sonnetJson);
}
client.send();


// //https://stackoverflow.com/questions/247483/http-get-request-in-javascript
// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return JSON.parse(xmlHttp.responseText);
// }