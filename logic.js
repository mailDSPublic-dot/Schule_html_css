const h1 = document.getElementById("h1");
const sidebar = document.getElementById("sidebar");
const open_sidebar = document.getElementById("open_sidebar");
const close_sidebar = document.getElementById("close_sidebar");
const html_seite = document.getElementById("html_seite");
const css_seite = document.getElementById("css_seite");
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
};

open_sidebar.onclick = sidebar_onclick;
close_sidebar.onclick = sidebar_onclick;

start_seite.onclick = function () {
    sidebar_onclick() // Schließt die Sidebar
    h1.textContent = "HTML und CSS"
    ausgabe_div.innerHTML = "<p>Hallo auf der Website von Sam und Dan<br>Hier findet ihr einen kurzen Überblick über HTML und CSS</p>"
}

html_seite.onclick = function () {
    sidebar_onclick() // Schließt die Sidebar
    h1.textContent = "HTML"
    ausgabe_div.innerHTML = "<p>Hier kommt dann der HTML Text hin.</p>"
}

css_seite.onclick = function () {
    sidebar_onclick() // Schließt die Sidebar
    h1.textContent = "CSS"
    fetch("css.html")
        .then(r => r.text())
        .then(html => {
            ausgabe_div.innerHTML = html;

            // Alle Scripts manuell ausführen
            ausgabe_div.querySelectorAll("script").forEach(oldScript => {
                const newScript = document.createElement("script");
                newScript.textContent = oldScript.textContent;
                document.body.appendChild(newScript);
            });
        });
}


ausgabe_div.innerHTML = "<p>Hallo auf der Website von Sam und Dan<br>Hier findet ihr einen kurzen Überblick über Html und CSS</p>"