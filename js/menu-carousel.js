const NUMBER_OF_PICTURES = 5;
let currentPosition;

let moveCarousel = function (direction) {
  if (direction === "right") {
    currentPosition += 1;
    if (currentPosition > NUMBER_OF_PICTURES - 1) {
      currentPosition = 0;
    }
  } else {
    currentPosition -= 1;
    if (currentPosition == -1) {
      currentPosition = NUMBER_OF_PICTURES - 1;
    }
  }
  let url;
  switch (currentPosition) {
    case 0:
      url = "img/menu1.jpg";
      break;
    case 1:
      url = "img/menu2.jpg";
      break;
    case 2:
      url = "img/menu3.jpg";
      break;
    case 3:
      url = "img/menu4.jpg";
      break;
    case 4:
      url = "img/menu5.jpg";
  }
  openCarousel(url, currentPosition);
};

let openCarousel = function (url, number) {
  let getMenuPageCard = document.querySelectorAll(".menu-page-card");
  let getCarouselImage = document.querySelector(".carousel-image");
  currentPosition = number;
  getCarouselImage.style["background-image"] = "url(" + url + ")";
  for (let i = 0; i < getMenuPageCard.length; i++) {
    if (i == number) {
      getMenuPageCard[i].style.opacity = "50%";
    } else {
      getMenuPageCard[i].style.opacity = "100%";
    }
  }
};
