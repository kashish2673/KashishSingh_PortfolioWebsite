// Theme toggle
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on load
if(savedTheme === 'light') {
  root.classList.add('light');
}

// Theme toggle button
const themeToggle = document.getElementById('themeToggle');
if(themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const newTheme = root.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
  });
}

// Mobile nav toggle with aria
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');

if(menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Update footer year
const yearElement = document.getElementById('year');
if(yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Projects — customize here
const GITHUB_USERNAME = "kashish2673";
const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "This professional, responsive portfolio built with semantic HTML, modern CSS, and vanilla JS.",
    tech: ["HTML","CSS","JS"],
    repo: `https://github.com/${GITHUB_USERNAME}/KashishSingh_PortfolioWebsite`,
    demo: "https://kashish2673.github.io/KashishSingh_PortfolioWebsite/"
  },
  {
    title: "Student Record Management System",
    description: "A minimal student record management system with localStorage persistence.",
    tech: ["HTML","CSS","JS"],
    repo: `https://github.com/${GITHUB_USERNAME}/student-record-management-system`,
    demo: "https://${GITHUB_USERNAME}.github.io/student-record-management/" 
  },
  {
    title: "Salon's Booking Website",
    description: "A booking website for salons with a clean UI and user-friendly experience.",
    tech: ["HTML","CSS","JS"],
    repo: `https://github.com/${GITHUB_USERNAME}/salon-booking-website`,
    demo: "https://${GITHUB_USERNAME}.github.io/KashishSingh_PortfolioWebsite/" 
  }
];

// Render projects
const projectsGrid = document.getElementById('projectsGrid');
if(projectsGrid) {
  PROJECTS.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('role','listitem');
    
    // Always show demo button
    const demoButton = `<a class="btn" href="${project.demo}" target="_blank" rel="noopener">Live Demo</a>`;
    
    card.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p>${project.description}</p>
      <p class="project-meta">${project.tech.join(" · ")}</p>
      <div class="project-links">
        <a class="btn btn--ghost" href="${project.repo}" target="_blank" rel="noopener">GitHub</a>
        ${demoButton}
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

// Contact form handling - Show loading state
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', function() {
    const submitBtn = this.querySelector('button[type="submit"]');
    if(submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }
  });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
   
    if(href === '#') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    if(target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
