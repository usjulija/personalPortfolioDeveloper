'use strict';

//hover on social icons
var socilaLinks = document.querySelectorAll('.button');
socilaLinks.forEach(function (link) {
  var fArea = link.firstElementChild;
  var tobeChanged = fArea.querySelector('path');
  link.addEventListener('mouseover', function () {
    tobeChanged.style.fill = "#CE6C47";
  });
  link.addEventListener('mouseout', function () {
    tobeChanged.style.fill = "#280004";
  });
});

//hover on navigation icons
var navIcons = document.querySelectorAll('.navButton');
navIcons.forEach(function (button) {
  var icon = button.firstElementChild;
  var text = button.lastElementChild;
  button.addEventListener('mouseover', function () {
    icon.style.display = "none";
    text.style.display = "block";
  });
  button.addEventListener('mouseout', function () {
    icon.style.display = "block";
    text.style.display = "none";
  });
});

//sticky navbar
var navbar = document.getElementById('navbar');
var navbarOnTop = navbar.offsetTop;

var stickyNavbar = function stickyNavbar() {
  window.scrollY >= navbarOnTop ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};

//hover on skills section
var skills = document.querySelectorAll('.skill');
var reset = function reset() {
  var visible = document.querySelectorAll('.display');
  var highlight = document.querySelectorAll('.highlight');
  visible.forEach(function (skill) {
    skill.classList.remove('display');
  });
  highlight.forEach(function (item) {
    item.classList.remove('highlight');
  });
};

skills.forEach(function (skill) {
  var base = skill.firstElementChild;
  var info = skill.lastElementChild;
  base.addEventListener('click', function () {
    reset();
    info.classList.add('display');
    base.classList.add('highlight');
  });
});

//animation on skills chart
function checkSlide() {
  var svg = document.getElementById('objects');
  var skillPathes = document.querySelectorAll('.skillPath');

  //halfway through the whole svg with skills
  var slideInAt = window.scrollY + window.innerHeight - svg.clientHeight / 2;
  //bottom of svg
  var imageBottom = svg.offsetTop + svg.clientHeight;

  var isHalfShown = slideInAt > svg.offsetTop;
  var isNotScrolledPast = window.scrollY < imageBottom;
  console.log(slideInAt, imageBottom, isHalfShown, isNotScrolledPast);

  if (isHalfShown && isNotScrolledPast) {
    skillPathes.forEach(function (skill) {
      return skill.classList.add('active');
    });
  } else {
    skillPathes.forEach(function (skill) {
      return skill.classList.remove('active');
    });
  }
}

//on scroll effects
window.addEventListener('scroll', debounce(checkSlide));

function checkSlideOnClick() {
  console.log("check");
  setTimeout(checkSlide, 1000);
}

//portfolio part
var panels = document.querySelectorAll('.panel');

var resetPanels = function resetPanels() {
  var selected = document.querySelectorAll('.open');
  selected.forEach(function (panel) {
    panel.classList.remove('open');
  });
  var animation = document.querySelectorAll('.openActive');
  animation.forEach(function (panel) {
    panel.classList.remove('openActive');
  });
};

panels.forEach(function (panel) {
  return panel.addEventListener('click', function (event) {
    if (panel.classList.contains('open')) {
      resetPanels();
    } else {
      resetPanels();
      panel.classList.add('open');
      panel.classList.add('openActive');
    }
  });
});

//function that makes onscroll fire just every 20 millisecond
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(reset));
window.addEventListener('scroll', stickyNavbar);