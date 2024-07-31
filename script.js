function toggleMenu() {
    var x = document.getElementById("myLinks");
    var section = document.querySelector('.section1');

    if (x.style.display === "flex") {
        x.style.display = "none";
        section.style.marginTop = "0";

    } else {
        x.style.display = "flex";
        x.style.flexDirection = "column";
        section.style.marginTop = "10em";

    }
}

