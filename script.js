function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        if (link.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        }
    });
});
const closeButton = document.getElementById('close-researcher');
const researcherSection = document.getElementById('researcher');

closeButton.addEventListener('click', function() {
  researcherSection.style.display = 'none'; 
});
