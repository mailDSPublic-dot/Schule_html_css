const h1 = document.getElementById("h1");
const sidebar = document.getElementById("sidebar");
const open_sidebar = document.getElementById("open_sidebar");
const close_sidebar = document.getElementById("close_sidebar");

const html_seite = document.getElementById("html_seite");
const html_wichtige_elemente_seite = document.getElementById("html_wichtige_elemente");

const css_seite = document.getElementById("css_seite");
const css_einbindungsmethoden_seite = document.getElementById("css_einbindungsmethode");
const css_selektoren_seite = document.getElementById("css_selektoren");
const css_box_elemente = document.getElementById("css_box_elemente")

const start_seite = document.getElementById("start_seite");
const ausgabe_div = document.getElementById("ausgabe");


function sidebar_onclick() {
    // Die Funktion öffnet oder schließt die Sidebar
    if (sidebar.style.left == "0px") {
        sidebar.style.left = "-200px";
        setTimeout(() => { open_sidebar.style.display = "block" }, 225)
    }
    else {
        sidebar.style.left = "0px";
        open_sidebar.style.display = "none"
    }
}

function lade_seite(name) {
    sidebar_onclick() // Schließt die Sidebar
    fetch(`${name}.html`)
        .then(r => r.text())
        .then(html => {
            ausgabe_div.innerHTML = html;

            // Scripts ausführen
            ausgabe_div.querySelectorAll("script").forEach(oldScript => {
                const newScript = document.createElement("script");
                newScript.textContent = oldScript.textContent;
                document.body.appendChild(newScript);
            });
        });
}
open_sidebar.onclick = sidebar_onclick;
close_sidebar.onclick = sidebar_onclick;

start_seite.onclick = function () { lade_seite("start_seite") }

html_seite.onclick = function () {lade_seite("html/html")}
html_wichtige_elemente_seite.onclick = function () {lade_seite("html/wichtige_elemente")}

css_seite.onclick = function () { lade_seite("css/css") }
css_einbindungsmethoden_seite.onclick = function () { lade_seite("css/verbindungsmethoden") }
css_selektoren_seite.onclick = function () { lade_seite("css/selektoren") }
css_box_elemente.onclick =  function () { lade_seite("css/box_elemente") }


//Lade Startseite am Anfang
sidebar_onclick()
start_seite.onclick()