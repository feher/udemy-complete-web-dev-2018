var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function removeListElement(itemId) {
	let li = document.getElementById(itemId);
	li.parentNode.removeChild(li);
}

function createListElement() {
	let itemCount = ul.childCount

	let li = document.createElement("li");
	let itemId = "item" + Date.now()
	li.id = itemId

	let span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	span.addEventListener("click", toggleDone);
	li.appendChild(span);

	let removeButton = document.createElement("button");
	removeButton.appendChild(document.createTextNode("X"));
	removeButton.className = "remove";
	removeButton.addEventListener("click", function () {
		removeListElement(itemId);
	});
	li.appendChild(removeButton);

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

function toggleDone() {
	if (this.className === "done") { this.className = ""; }
	else { this.className = "done"; }
}

let items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; ++i) {
	let itemId = "item" + i;
	items[i].id = itemId;
	items[i].childNodes[0].addEventListener("click", toggleDone);
	items[i].childNodes[2].addEventListener("click", function () {
		removeListElement(itemId);
	});
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
