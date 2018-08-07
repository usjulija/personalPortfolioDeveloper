//hover on social icons
let socilaLinks = document.querySelectorAll('.button');
socilaLinks.forEach((link) => {
  let fArea = link.firstElementChild;
  let tobeChanged = fArea.querySelector('path');
  link.addEventListener('mouseover', () => {
    tobeChanged.style.fill = "#CE6C47";
  });
  link.addEventListener('mouseout', () => {
    tobeChanged.style.fill = "#280004";
  });
});

//hover on navigation icons
let navIcons = document.querySelectorAll('.navButton');
navIcons.forEach((button) => {
  let icon = button.firstElementChild;
  let text = button.lastElementChild;
  button.addEventListener('mouseover', () => {
    icon.style.display = "none";
    text.style.display = "block";
  });
  button.addEventListener('mouseout', () => {
    icon.style.display = "block";
    text.style.display = "none";
  });
});

//sticky navbar
const navbar = document.getElementById('navbar');
const navbarOnTop = navbar.offsetTop;

const stickyNavbar = () => {
  window.scrollY >= navbarOnTop ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};

//hover on skills section
let skills = document.querySelectorAll('.skill');
const reset = () => {
  const visible = document.querySelectorAll('.display');
  const highlight = document.querySelectorAll('.highlight');
  visible.forEach((skill) => {
    skill.classList.remove('display');
  });
  highlight.forEach((item) => {
    item.classList.remove('highlight');
  });
};

skills.forEach((skill) => {
  let base = skill.firstElementChild;
  let info = skill.lastElementChild;
  base.addEventListener('click', () => {
    reset();
    info.classList.add('display');
    base.classList.add('highlight');
  });
});

//portfolio part
const panels = document.querySelectorAll('.panel');

const resetPanels = () => {
  const selected = document.querySelectorAll('.open');
  selected.forEach(panel => {
    panel.classList.remove('open');
  });
  const animation = document.querySelectorAll('.openActive');
  animation.forEach(panel => {
    panel.classList.remove('openActive');
  });
};

panels.forEach(panel => panel.addEventListener('click', event => {
  if (panel.classList.contains('open')) {
    resetPanels();
  } else {
    resetPanels();
    panel.classList.add('open');
    panel.classList.add('openActive');
  }
}));


//on scroll effects
window.onscroll = function(){
  stickyNavbar();
  reset();
};
