var elements = document.querySelectorAll("nav.page-navigation li a");


function handler(event) {
    event = event || window.event // кросс-браузерно
    if (event.stopPropagation) {
        // Вариант стандарта W3C:
        event.stopPropagation()
    } else {
        // Вариант Internet Explorer:
        event.cancelBubble = true
    }

	for (var t = elements.length - 1; t >= 0; t--) {
		elements[t].className = "ccccc";
	}
}


for (var i = elements.length - 1; i >= 0; i--) {
    elements[i].onclick = handler;
};

