var validationButton = document.querySelector(".validation-btn");
var menu = document.querySelector(".global-parameter");
var openMenuTrigger = document.querySelector(".parameter-gear");

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

var animation = document.querySelector(".para-animations");
var unselectedAnimation = document.querySelector(".para-animations-unselected");
var animationReduite = document.querySelector(".para-animations-reduite");
var unselectedAnimationReduite = document.querySelector(
  ".para-animations-reduite-unselected"
);

//

var closeMenu = function () {
  menu.classList.add("para-close");
  menu.classList.remove("para-open");
};
var openMenu = function () {
  menu.classList.remove("para-close");
  menu.classList.add("para-open");
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
};

var selectModeClair = function () {
  modeSombre.classList.add("not-visible");
  unselectedModeSombre.classList.remove("not-visible");
  modeClair.classList.remove("not-visible");
  unselectedModeClair.classList.add("not-visible");
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
