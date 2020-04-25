let currentWidth;
let getClickAway = document.querySelector(".clickAway");
let getSidebar = document.querySelector(".side-nav");
let getHamburgerBtn = document.querySelector(".animated-burger-btn");
let getSidebarUl = document.querySelector(".nav-menu");
let getDropIcon = document.querySelector(".drop-icon");
let getMenuPageCard = document.querySelectorAll(".menu-page-card");

let resetStyling = function (media) {
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
    for (let i = 0; i < getMenuPageCard.length; i++) {
      getMenuPageCard[i].style.opacity = "100%";
    }
  } else if (media === "tablet") {
    getSidebar.style.height = "0";
    getSidebar.style.width = "100vw";
    openCarousel("img/menu1.jpg", 0);
  } else if (media === "desktop") {
    getSidebar.style.visibility = "visible";
    getSidebar.style.height = "var(--top-nav-height)";
    getSidebar.style.width = "100vw";
    getSidebarUl.style.visibility = "visible";
    openCarousel("img/menu1.jpg", 0);
  }
};

let hasViewPortChanged = function (currentWidth) {
  //Ascending
  if (previousWidth < 768 && currentWidth >= 768 && currentWidth < 1000) {
    previousWidth = currentWidth;
    return "phoneToTablet";
  } else if (
    previousWidth >= 768 &&
    previousWidth < 1000 &&
    currentWidth >= 1000
  ) {
    previousWidth = currentWidth;
    return "tabletToDesktop";
    //Descending
  } else if (
    previousWidth >= 1000 &&
    currentWidth < 1000 &&
    currentWidth >= 768
  ) {
    previousWidth = currentWidth;
    return "desktopToTablet";
  } else if (
    previousWidth < 1000 &&
    previousWidth >= 768 &&
    currentWidth < 768
  ) {
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
};
let previousWidth = window.innerWidth;
window.addEventListener("resize", function () {
  getSidebar.style["transition-duration"] = "0s";
  getClickAway.style["transition-duration"] = "0s";
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
});

window.removeEventListener("resize", function () {});
