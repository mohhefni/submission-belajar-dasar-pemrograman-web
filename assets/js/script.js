// arrow animation iteration
const arrow = document.querySelector('.arrow');

arrow.animate([{ top: '0' }, { top: '10px' }, { top: '0' }], {
  duration: 700,
  iterations: Infinity,
});

// dark mode
const buttonIcon = document.getElementById('button-icon');
const icon = document.getElementById('icon');

buttonIcon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.className = 'fa-regular fa-sun';
  } else {
    icon.className = 'fa-regular fa-moon';
  }
};

// nav active
const sectionHome = document.getElementById('home');
const sectionBlog = document.getElementById('blog');
const sectionProject = document.getElementById('project');
const sectionAbout = document.getElementById('about');

const sections = [sectionHome, sectionBlog, sectionProject, sectionAbout];
const navLi = document.querySelectorAll('nav .list-item li a');

window.onscroll = () => {
  var current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
      navLi.forEach((li) => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
          li.classList.add('active');
        }
      });
    }
  });
};
