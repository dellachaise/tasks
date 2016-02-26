var elements = document.querySelectorAll("nav.page-navigation li a"),
    articles = document.querySelectorAll("section.main-part article"),
    menuEl = document.getElementById("myList");


for (var i = elements.length - 1; i >= 0; i--) {
//   elements[i].onclick = handler;
    elements[i].addEventListener("click", handler, false);
    elements[i].addEventListener("click", replace, false);
}

function handler(event) {
    event.preventDefault();

    set_active_menu(event.target);
    set_active_article(event.target.dataset.articleId);
}

function set_active_menu(menu_el) {
    for (var i = elements.length - 1; i >= 0; i--) {
        elements[i].className = "";
    }
    menu_el.className = "active";
}

function set_active_article(article_id) {
    for (var i = articles.length - 1; i >= 0; i--) {
        articles[i].className = "";
    }

    article = document.getElementById(article_id);
    article.className = "active";
}

function replace(ev) {
    var liEl = event.target.parentElement;

    event.preventDefault();

    menuEl.removeChild(liEl);
    menuEl.appendChild(liEl);
}
