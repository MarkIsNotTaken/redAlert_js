console.log("Sanity Check");

function hello(){
	console.log("Hello");
	var changeDiv = document.getElementById('hoi');
	changeDiv.innerHTML = "Wat";
	console.log(changeDiv);
}

function button(){
	alert("Clicked")
}

document.getElementByClassName("click").onclick = function() {myFunction()};

function myFunction() {
	document.getElementByClassName("click").innerHTML = "boi";
}

document.getElementsByClassName("firstPeriod").onclick = function() {soFast()};

function soFast(){
	document.getElementsByClassName("firstPeriod").innerHTML = "Wat";
}