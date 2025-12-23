function openTab(evt, pageName) {
	var i, tabcontent, buttons;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	buttons = document.getElementsByClassName("tablink");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = "";
	}
	document.getElementById(pageName).style.display = "block";
	if (evt && evt.currentTarget) {
		evt.currentTarget.style.backgroundColor = "#575757";
	}
}

document.getElementById("defaultOpen").click();