
var newC = document.getElementsByClassName("old-class")[0];
newC.addEventListener("click", newClass)

function newClass(){
	newC.className = "form-class";
	appearInput();
	appearButton();
}

var buttonAndX = document.getElementById("bottomMenu");
function appearButton(){
	var button = document.createElement("button");
	var save = document.createTextNode("Guardar");
	var iconClose = document.createElement("i");
	iconClose.classList.add("fa", "fa-times")
	button.appendChild(save);  
	buttonAndX.appendChild(iconClose);
	buttonAndX.appendChild(button);

	iconClose.addEventListener("click", function(){
		newC.classList.remove("newClass");
	})
}

var topMenu = document.getElementById("topMenu")
function appearInput(){
	var input = document.createElement("input")
	input.setAttribute("type", "text", "placeholder");
	topMenu.appendChild(input);
}

