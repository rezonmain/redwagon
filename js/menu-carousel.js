const NUMBER_OF_PICTURES = 5;
let currentPosition;


let moveCarousel = function (direction) {
  let getCarouselCell = document.querySelector(".carousel-cell");

  if (direction === "right") {
    currentPosition += 1;
    if (currentPosition > NUMBER_OF_PICTURES) {
      currentPosition = 1;
    }
  } else {
    currentPosition -= 1;
    if (currentPosition == 0) {
      currentPosition = NUMBER_OF_PICTURES;
    }
  }
  switch (currentPosition) {
    case 1:
      getCarouselCell.style["background-image"] = 'url("./img/promo1.jpg")';
      break;
    case 2:
      getCarouselCell.style["background-image"] = 'url("./img/promo2.jpg")';
      break;
    case 3:
      getCarouselCell.style["background-image"] = 'url("./img/promo3.jpg")';
      break;
  }
};

let openCarousel = function (url, number) {
  console.log(number)

};
