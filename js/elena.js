let currentIndex = 0;
const images = document.querySelectorAll('.exit .first .carousel img');

function switchImage() {
    images[currentIndex].style.opacity = 0;

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].style.opacity = 1;
}
setInterval(switchImage, 3000);


let currentIndex1 = 0;
const images1 = document.querySelectorAll('.ultra .first .carousel img');

function switchImage1() {
    images1[currentIndex1].style.opacity = 0;

    currentIndex1 = (currentIndex1 + 1) % images1.length;

    images1[currentIndex1].style.opacity = 1;
}
setInterval(switchImage1, 3000);
