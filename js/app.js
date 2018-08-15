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

//animation on skills chart
function checkSlide() {
    const svg = document.getElementById('objects');
    const skillPathes = document.querySelectorAll('.skillPath');

    //halfway through the whole svg with skills
    const slideInAt = (window.scrollY + window.innerHeight) - svg.clientHeight / 2;
    //bottom of svg
    const imageBottom = svg.offsetTop + svg.clientHeight;

    const isHalfShown = slideInAt > svg.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    console.log(slideInAt, imageBottom, isHalfShown, isNotScrolledPast);

    if(isHalfShown && isNotScrolledPast) {
      skillPathes.forEach(skill => skill.classList.add('active'));
    } else {
      skillPathes.forEach(skill => skill.classList.remove('active'));
    }
}

//on scroll effects
window.addEventListener('scroll', debounce(checkSlide));

function checkSlideOnClick() {
  console.log("check");
  setTimeout(checkSlide, 1000);
}

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


//function that makes onscroll fire just every 20 millisecond
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
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
