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
  window.pageYOffset >= navbarOnTop ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
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

const aboutContainer = document.getElementById("about");
const topOfSection = aboutContainer.offsetTop;

const fireSkillFunction = () => {
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
  fireSkillFunction();
  stickyNavbar();
  reset();
};
