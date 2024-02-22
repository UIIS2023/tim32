document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('header');

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.style.backgroundColor = "#333";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });
});