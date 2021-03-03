function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-bottom-nav") {
        x.className += " responsive";
    } else {
        x.className = "header-bottom-nav";
    }
}