function dropDown() {
	document.getElementById("myDropdown").classList.toggle("show");
}
$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});

function toggleMenu() {
	var x = document.getElementById("ul-menu");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
$(window).resize(function () {
	var viewportWidth = $(window).width();
	if (viewportWidth > 768) {
		$("#ul-menu").removeAttr("style");
	}
});

window.onclick = function (event) {
	if (!event.target.matches('.drop')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}