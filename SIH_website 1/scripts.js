function hamburgerMenu() {
	var nav = document.getElementById("nav-items");
	nav.className = nav.className === "nav-items" ? "nav-items responsive" : "nav-items";
}