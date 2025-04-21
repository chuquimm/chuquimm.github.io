// Main function to load all data when document is ready
document.addEventListener('DOMContentLoaded', function() {
  loadSkills();
  loadProjects();
  loadEducation();
  loadContacts();
  setupMobileMenu();
  setupSmoothScrolling();
  setupTypingEffect();
  handleResize();
});

// Load and render skills section
async function loadSkills() {
  try {
    const response = await fetch('../json/data/skills.json');
    const data = await response.json();
    const skillsGrid = document.querySelector('.skills-grid');

    // Clear existing content
    skillsGrid.innerHTML = '';

    // Populate with JSON data
    data.skills.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card';

      skillCard.innerHTML = `
        <h3 class="skill-title">${skill.title}</h3>
        <ul class="skill-list">
          ${skill.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;

      skillsGrid.appendChild(skillCard);
    });
  } catch (error) {
    console.error('Error loading skills:', error);
  }
}

// Load and render projects section
async function loadProjects() {
  try {
    const response = await fetch('../json/data/projects.json');
    const data = await response.json();
    const projectGrid = document.querySelector('.project-grid');

    // Clear existing content
    projectGrid.innerHTML = '';

    // Populate with JSON data
    data.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';

      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.imageAlt}">
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;

      projectGrid.appendChild(projectCard);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Load and render education/timeline section
async function loadEducation() {
  try {
    const response = await fetch('../json/data/education.json');
    const data = await response.json();
    const timeline = document.querySelector('.timeline');

    // Clear existing content
    timeline.innerHTML = '';

    // Populate with JSON data
    data.timeline.forEach(item => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';

      timelineItem.innerHTML = `
        <div class="timeline-content">
          <div class="timeline-year">${item.status}</div>
          <h3>${item.title}</h3>
          <p>${item.institution}</p>
        </div>
      `;

      timeline.appendChild(timelineItem);
    });
  } catch (error) {
    console.error('Error loading education timeline:', error);
  }
}

// Load and render contact links
async function loadContacts() {
  try {
    const response = await fetch('../json/data/contacts.json');
    const data = await response.json();
    const contactLinks = document.querySelector('.contact-links');

    // Clear existing content
    contactLinks.innerHTML = '';

    // Populate with JSON data
    data.contacts.forEach(contact => {
      const contactLink = document.createElement('a');
      contactLink.href = contact.url;
      contactLink.className = 'contact-link';
      contactLink.target = '_blank';

      contactLink.innerHTML = `
        <i class="${contact.icon} contact-icon"></i>
        <span>${contact.type}</span>
      `;

      contactLinks.appendChild(contactLink);
    });
  } catch (error) {
    console.error('Error loading contacts:', error);
  }
}

// Mobile menu functionality
function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  const mobileNavLinks = document.querySelectorAll('.nav-links .nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Typing effect for hero section
function setupTypingEffect() {
  const heroTitle = document.querySelector('.hero-title');
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';

  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length - 1) {
      heroTitle.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      heroTitle.innerHTML = originalText.substring(0, originalText.length - 1) + 
                           '<span class="blinking-cursor">|</span>';
    }
  };

  setTimeout(typeWriter, 1000);
}

// Handle window resize
function handleResize() {
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
}
