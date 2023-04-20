var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function crossOnClick(li) {
	li.addEventListener("click",function(){
		li.classList.toggle("done");
	});
}

function deleteItemOnClick(doneButton,li) {
	doneButton.addEventListener("click",function() {
		doneButton.parentElement.parentElement.removeChild(li);
	});
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	var doneButton = document.createElement("button");
	doneButton.appendChild(document.createTextNode("\u{1F5D1}"));
	li.appendChild(doneButton);

	deleteItemOnClick(doneButton,li);
	crossOnClick(li);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);