var sliderImage = document.getElementById('slider-image');
var text1 = document.getElementById('text-1');
var text2 = document.getElementById('text-2');
var text3 = document.getElementById('text-3');

var currIndex = 1;


function nextImage() {
    switch (currIndex) {
        case 1:
            sliderImage.style.backgroundImage = "url('./images/desktop-image-hero-2.jpg')";
            text1.style.display = "none";
            text2.style.display = "block";
            currIndex = 2;
            break;
        case 2:
            sliderImage.style.backgroundImage = "url('./images/desktop-image-hero-3.jpg')";
            text2.style.display = "none";
            text3.style.display = "block";
            currIndex = 3;
            break;
        case 3:
            sliderImage.style.backgroundImage = "url('./images/desktop-image-hero-1.jpg')";
            text3.style.display = "none";
            text1.style.display = "block";
            currIndex = 1;
            break;
    }
}

function previousImage() {
    switch (currIndex) {
        case 1:
            sliderImage.style.backgroundImage = "url('./images/desktop-image-hero-3.jpg')";
            text1.style.display = "none";
            text3.style.display = "block";
            currIndex = 3;
            break;
        case 2:
            sliderImage.style.backgroundImage = "url('./images/desktop-image-hero-1.jpg')";
            text2.style.display = "none";
            text1.style.display = "block";
            currIndex = 1;
            break;
        case 3:
            sliderImage.style.backgroundImage = "url('./images/desktop-image-hero-2.jpg')";
            text3.style.display = "none";
            text2.style.display = "block";
            currIndex = 2;
            break;
    }
}

function showMenu() {
    var x = document.getElementById("my-top-nav");
    var y = document.getElementById("close-nav");
    var z = document.getElementById("show-nav");
    var l = document.getElementById("logo");

    if (x.className === "topnav") {
      x.className += " responsive";
      y.className += " responsive";
      z.className = "icon-hamburger";
      l.style.display = 'none';
    } else {
      x.className = "topnav";
      y.className = "icon-close";
      z.className += " responsive";
    }
  }