const NUMBER_OF_PICTURES = 3;
let currentWidth;
let toggleNavStatus;
let getClickAway = document.querySelector(".clickAway");
let getSidebar = document.querySelector(".side-nav");
let getHamburgerBtn = document.querySelector(".animated-burger-btn");
let getSidebarUl = document.querySelector(".nav-menu");
let getDropIcon = document.querySelector(".drop-icon");

let resetStyling = function(media) {
  getSidebar.style.visibility = "hidden";
  getSidebarUl.style.visibility = "hidden";
  getClickAway.style.opacity = "0";
  getHamburgerBtn.style.transform = "rotate(0deg)";
  getClickAway.style.visibility = "hidden";
  getDropIcon.style.transform = "rotate(0)";
  toggleNavStatus = false;
  if (media === "phone") {
    getSidebar.style.height = "calc(100vh - var(--top-nav-height))";
    getSidebar.style.width = "0";
  } else if (media === "tablet") {
    getSidebar.style.height = "0";
    getSidebar.style.width = "100vw";
  } else if (media === "desktop") {
    getSidebar.style.visibility = "visible";
    getSidebar.style.height = "var(--top-nav-height)";
    getSidebar.style.width = "100vw";
    getSidebarUl.style.visibility = "visible";
  }
}

let hasViewPortChanged = function(currentWidth) {
  //Ascending
  if (previousWidth < 768 && currentWidth >= 768 && currentWidth < 1000) {
    previousWidth = currentWidth;
    return "phoneToTablet";
  } else if (previousWidth >= 768 && previousWidth < 1000 && currentWidth >= 1000) {
    previousWidth = currentWidth;
    return "tabletToDesktop";
    //Descending
  } else if (previousWidth >= 1000 && currentWidth < 1000 && currentWidth >= 768) {
    previousWidth = currentWidth;
    return "desktopToTablet";
  } else if (previousWidth < 1000 && previousWidth >= 768 && currentWidth < 768) {
    previousWidth = currentWidth;
    return "tabletToPhone";
    //Skipping
  } else if (previousWidth < 768 && currentWidth >= 1000) {
    previousWidth = currentWidth;
    return "phoneToDesktop";
  } else if (previousWidth >= 1000 && currentWidth < 768) {
    previousWidth = currentWidth;
    return "desktopToPhone";
  } else {
    return "unchanged";
  }
}
let previousWidth = window.innerWidth;
window.addEventListener("resize", function() {
  getSidebar.style['transition-duration'] = "0s";
  getClickAway.style['transition-duration'] = "0s";
  currentWidth = window.innerWidth;
  let change = hasViewPortChanged(currentWidth);
  //console.log(change);
  switch (change) {
    case "phoneToTablet":
    case "desktopToTablet":
      resetStyling("tablet");
      break;
    case "tabletToDesktop":
    case "phoneToDesktop":
      resetStyling("desktop");
      break;
    case "tabletToPhone":
    case "desktopToPhone":
      resetStyling("phone");
      break;
  }
})


let toggleNav = function() {
  if (window.innerWidth < 768) {
    /*toggleNavStatus initializes as false */
    if (!toggleNavStatus) {
      getSidebar.style.transition = "width 0.3s ease-in-out";
      getClickAway.style.transition = "all 0.3s ease-in-out";
      getClickAway.style["z-index"] = "950";
      getSidebarUl.style.visibility = "visible";
      getSidebar.style.visibility = "visible";
      getSidebar.style.width = "75%";
      getSidebar.style.height = "calc(100vh - var(--top-nav-height))";
      getClickAway.style.visibility = "visible";
      getClickAway.style.opacity = "40%";
      getHamburgerBtn.style.transform = "rotate(90deg)";
      toggleNavStatus = true;
    } else {
      getClickAway.style.visibility = "hidden";
      getClickAway.style.opacity = "0";
      getClickAway.style["z-index"] = "0";
      getSidebar.style.width = "0";
      getSidebar.style.height = "calc(100vh - var(--top-nav-height))";
      getHamburgerBtn.style.transform = "rotate(0deg)";
      toggleNavStatus = false;
    }
  } else if (window.innerWidth >= 768 && window.innerWidth < 1000) {
    if (!toggleNavStatus) {
      getSidebar.style.transition = "height 0.2s ease-in-out";
      getSidebarUl.style.visibility = "visible";
      getSidebar.style.visibility = "visible";
      getSidebar.style.width = "100vw"
      getSidebar.style.height = "3.5rem";
      getDropIcon.style.transform = "rotate(180deg)";
      toggleNavStatus = true;
    } else {
      getSidebar.style.width = "100vw"
      getSidebar.style.height = "0";
      getDropIcon.style.transform = "rotate(0)";
      toggleNavStatus = false;
    }
  }
}

let currentPosition = 1;
let moveCarousel = function(direction) {
  let getCarouselCell = document.querySelector(".carousel-cell");

  if (direction === 'right') {
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
      getCarouselCell.style['background-image'] = 'url("./img/promo1.jpg")';
      break;
    case 2:
      getCarouselCell.style['background-image'] = 'url("./img/promo2.jpg")';
      break;
    case 3:
      getCarouselCell.style['background-image'] = 'url("./img/promo3.jpg")';
      break;
  }
}
window.removeEventListener("resize", function() {});

