const sidebar = document.getElementById("sidebar");
const open_sidebar = document.getElementById("open_sidebar");
const close_sidebar = document.getElementById("close_sidebar");

function sidebar_onclick() {
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



