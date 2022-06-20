let imageSources = [
    "static/ig-background1.png",
    "static/ig-background2.png",
    // "static/ig-background3.png",
    "static/ig-background4.png"
    ];
let currentImage = 0;
let phone = document.getElementById("phone").firstElementChild;

function changeImage () {
    // Change to next image
    currentImage++;
    // Resets to first image if there is no next image
    if (currentImage == imageSources.length) {
        currentImage = 0;
    };
    // Change background image and its attributes
    phone.style.backgroundImage = `url(${imageSources[currentImage]})`;
    phone.style.backgroundRepeat = "no-repeat"
    phone.style.backgroundOrigin = "border-box"
    phone.style.backgroundPosition = "73% 26%"
};

function imageTimer (time) {
    // Call changeImage function every x time
    let timer = setInterval(changeImage, time)
}

imageTimer(5000)