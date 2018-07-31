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
  window.pageYOffset >= navbarOnTop ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
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

var aboutContainer = document.getElementById("about");
var topOfSection = aboutContainer.offsetTop;

var fireSkillFunction = function fireSkillFunction() {
  if (window.pageYOffset >= topOfSection) {
    document.getElementById("bMask").classList.add("bMask");
    document.getElementById("htmlMask").classList.add("htmlMask");
    document.getElementById("wpMask").classList.add("wpMask");
    document.getElementById("jqMask").classList.add("jqMask");
    document.getElementById("gitMask").classList.add("gitMask");
    document.getElementById("jsMask").classList.add("jsMask");
    document.getElementById("cssMask").classList.add("cssMask");
    document.getElementById("rMask").classList.add("rMask");
    document.getElementById("sassMask").classList.add("sassMask");
    document.getElementById("ilMask").classList.add("ilMask");
  } else {
    document.getElementById("bMask").classList.remove("bMask");
    document.getElementById("htmlMask").classList.remove("htmlMask");
    document.getElementById("wpMask").classList.remove("wpMask");
    document.getElementById("jqMask").classList.remove("jqMask");
    document.getElementById("gitMask").classList.remove("gitMask");
    document.getElementById("jsMask").classList.remove("jsMask");
    document.getElementById("cssMask").classList.remove("cssMask");
    document.getElementById("rMask").classList.remove("rMask");
    document.getElementById("sassMask").classList.remove("sassMask");
    document.getElementById("ilMask").classList.remove("ilMask");
  }
};

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
  fireSkillFunction();
  stickyNavbar();
  reset();
};