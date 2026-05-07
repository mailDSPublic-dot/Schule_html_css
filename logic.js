const sidebar = document.getElementById("sidebar");
const open_sidebar = document.getElementById("open_sidebar");
const close_sidebar = document.getElementById("close_sidebar");
const html_seite = document.getElementById("html_seite");
const css_seite = document.getElementById("css_seite");
const ausgabe_text = document.getElementById("ausgabe")

function sidebar_onclick() {
    // Die Funktion öffnet oder schließt die Sidebar
    if (sidebar.style.left == "0px"){
        sidebar.style.left = "-200px";
        setTimeout(() => {open_sidebar.style.display = "block"}, 225)
    }
    else{
        sidebar.style.left = "0px";
        open_sidebar.style.display = "none"
    }
};

open_sidebar.onclick = sidebar_onclick
close_sidebar.onclick = sidebar_onclick

html_seite.onclick = function () {
    sidebar_onclick() // Schließt die Sidebar
    ausgabe_text.textContent = "Hier kommt dann der Html Text hin."   
}


css_seite.onclick = function () {
    sidebar_onclick() // Schließt die Sidebar
    ausgabe_text.textContent = "Und hier kommt dann der CSS Text hin."   
}