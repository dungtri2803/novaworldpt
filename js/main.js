var menuBar = document.getElementById("menu");
function showMenu(){
    menuBar.style.right = "0";
}
function hideMenu(){ 
    menuBar.style.right = "-200px";
}

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})