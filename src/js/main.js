var validationButton = document.querySelector(".validation-btn");
var menu = document.querySelector(".global-parameter");
var openMenuTrigger = document.querySelector(".parameter-gear");
var toblur = document.querySelectorAll(".to-blur");

var francais = document.querySelector(".para-francais");
var unselectedFrancais = document.querySelector(".para-francais-unselected");
var deutsch = document.querySelector(".para-deutsch");
var unselectedDeutsch = document.querySelector(".para-deutsch-unselected");

var modeSombre = document.querySelector(".para-mode-sombre");
var unselectedModeSombre = document.querySelector(
  ".para-mode-sombre-unselected"
);
var modeClair = document.querySelector(".para-mode-clair");
var unselectedModeClair = document.querySelector(".para-mode-clair-unselected");
var invertedElement = document.querySelector(".inverted-element");
var resetZBack = document.querySelector(".z-back");
var resetZMid = document.querySelector(".z-mid");
var resetZTop = document.querySelector(".z-top");
var allSite = document.querySelector(".all-site");
var allBackground = document.querySelector(".main-part-img-container");

var animation = document.querySelector(".para-animations");
var unselectedAnimation = document.querySelector(".para-animations-unselected");
var animationReduite = document.querySelector(".para-animations-reduite");
var unselectedAnimationReduite = document.querySelector(
  ".para-animations-reduite-unselected"
);

var graphicBackLayer = document.getElementById("graphic-back-layer");
var graphicTopLayer = document.querySelector(".graphic-top-layer");
var graphicExagone = document.querySelector(".exagone");
var value = window.scrollY;

//

var closeMenu = function () {
  menu.classList.add("para-close");
  menu.classList.remove("para-open");
  for (var i = 0; i < toblur.length; i++) {
    toblur[i].classList.remove("blured");
  }
};

var openMenu = function () {
  menu.classList.remove("para-close");
  menu.classList.add("para-open");
  for (var i = 0; i < toblur.length; i++) {
    toblur[i].classList.add("blured");
  }
};

validationButton.addEventListener("click", closeMenu);
openMenuTrigger.addEventListener("click", openMenu);

//

var selectFrench = function () {
  francais.classList.remove("not-visible");
  unselectedFrancais.classList.add("not-visible");
  deutsch.classList.add("not-visible");
  unselectedDeutsch.classList.remove("not-visible");
};

var selectDeutsch = function () {
  francais.classList.add("not-visible");
  unselectedFrancais.classList.remove("not-visible");
  deutsch.classList.remove("not-visible");
  unselectedDeutsch.classList.add("not-visible");
};

unselectedFrancais.addEventListener("click", selectFrench);
unselectedDeutsch.addEventListener("click", selectDeutsch);

//

var selectModeSombre = function () {
  modeSombre.classList.remove("not-visible");
  unselectedModeSombre.classList.add("not-visible");
  modeClair.classList.add("not-visible");
  unselectedModeClair.classList.remove("not-visible");
  invertedElement.classList.remove("inverted");
  allSite.classList.remove("body-mode-clair");
  allSite.classList.add("body-mode-sombre");
  allBackground.classList.remove("body-mode-clair");
  allBackground.classList.add("body-mode-sombre");
};

var selectModeClair = function () {
  modeSombre.classList.add("not-visible");
  unselectedModeSombre.classList.remove("not-visible");
  modeClair.classList.remove("not-visible");
  unselectedModeClair.classList.add("not-visible");
  invertedElement.classList.add("inverted");
  allSite.classList.add("body-mode-clair");
  allSite.classList.remove("body-mode-sombre");
  allBackground.classList.add("body-mode-clair");
  allBackground.classList.remove("body-mode-sombre");
  resetZBack.classList.add("reset-z-back");
  resetZMid.classList.add("reset-z-mid");
  resetZTop.classList.add("reset-z-top");
};

unselectedModeSombre.addEventListener("click", selectModeSombre);
unselectedModeClair.addEventListener("click", selectModeClair);

//

var selectAnimation = function () {
  animation.classList.remove("not-visible");
  unselectedAnimation.classList.add("not-visible");
  animationReduite.classList.add("not-visible");
  unselectedAnimationReduite.classList.remove("not-visible");
};

var selectAnimationReduite = function () {
  animation.classList.add("not-visible");
  unselectedAnimation.classList.remove("not-visible");
  animationReduite.classList.remove("not-visible");
  unselectedAnimationReduite.classList.add("not-visible");
};

unselectedAnimation.addEventListener("click", selectAnimation);
unselectedAnimationReduite.addEventListener("click", selectAnimationReduite);

//

var paralaxEffect = function () {
  var translateY = value * 0.5;
  graphicExagone.style.transform = "translateY(" + translateY + "px)";
};

window.addEventListener("scroll", paralaxEffect);
