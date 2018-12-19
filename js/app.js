//hover on social icons
let socilaLinks = document.querySelectorAll('.button');
socilaLinks.forEach((link) => {
  let fArea = link.firstElementChild;
  let tobeChanged = fArea.querySelector('path');
  link.addEventListener('mouseover', () => {
    tobeChanged.style.fill = "#802565";
    tobeChanged.style.transition = 'all 0.3s linear';
  });
  link.addEventListener('mouseout', () => {
    tobeChanged.style.fill = "#261423";
    tobeChanged.style.transition = 'all 0.3s linear';
  });
});

//navigation
//hover
let navIcons = document.querySelectorAll('.navButton');
navIcons.forEach((button) => {
  let icon = button.firstElementChild;
  let text = button.lastElementChild;
  button.addEventListener('mouseover', () => {
    icon.style.opacity = "0";
    text.style.opacity = "1";
  });
  button.addEventListener('mouseout', () => {
    icon.style.opacity = "1";
    text.style.opacity = "0";
  });
});

//sticky
const navbar = document.getElementById('navbar');
const navbarOnTop = navbar.offsetTop;

const stickyNavbar = () => {
  window.scrollY >= navbarOnTop ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};

window.addEventListener('scroll', stickyNavbar);

//Gallery
const gallerySection = document.getElementById("projects");

function createGallery() {
  fetch('./data/projects.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(project => {
        const panel = document.createElement("div");
        panel.classList.add("panel");
        panel.innerHTML = `
          <h3>${project.name}</h3>
          <article>
            <div class="project-info">
              <p>${project.date}</p>
              <p>${project.resources}</p>
            </div>
            <img src="${project.image}" alt="${project.name} preview">
            <p class="description">${project.description}</p>
            <div class="buttons">
              <a  class="portfolioButton"
                  tabindex="-1"
                  href="${project.demo}"
                  rel="noopener noreferrer"
                  target="_blank"
                  role="button">DEMO</a>
              <a  tabindex="-1"
                  href="${project.code}"
                  rel="noopener noreferrer"
                  target="_blank"
                  role="button">CODE</a>
              </div>
          </article>`;
          gallerySection.append(panel);
      });
    })
    .then(() => {
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

    })
    .catch(() => {
      console.log("error with getting data on projects");
    })
}

createGallery();
