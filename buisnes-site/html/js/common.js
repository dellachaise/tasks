var html = '';

html = "<ul>";
for (var i = peoples.length - 1; i >= 0; i--) {
	html = html + "<li class='people-item'>" + people[i] + "</li>";
}
html = html + "</ul>";
