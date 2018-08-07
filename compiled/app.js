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

//on scroll effects
window.onscroll = function () {
  stickyNavbar();
  reset();
};