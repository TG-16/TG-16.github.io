// Typing Effect for Hero Section
const typingText = document.getElementById("typing-text");
const words = ["Software Engineer | Full Stack Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (charIndex < words[index].length && !isDeleting) {
        typingText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (charIndex > 0 && isDeleting) {
        typingText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, isDeleting ? 1000 : 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

// Project Pop-Up
const projectCards = document.querySelectorAll('.project-card');
const popupOverlay = document.getElementById('popup-overlay');
const closePopup = document.getElementById('close-popup');
const popupContent = document.getElementById('popup-content');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.id;

        let projectDetails = '';

        if (projectId === 'project1') {
            projectDetails = `
                <h3>Task Manager App</h3>
                <p><strong>Technologies:</strong> Node.js, Express, MongoDB, EJS, JavaScript, CSS</p>
                <p>A web-based application that allows users to manage and organize their tasks efficiently. Features include task creation, updating, deletion, and mark as completed.</p>
                <img src="project2.png" alt="Task Manager App" style="aspect-ratio:1:1; width:600px">
            `;
        } else if (projectId === 'project2') {
            projectDetails = `
                <h3>Architectural Landing Page</h3>
                <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
                <p>A modern landing page designed for an architectural firm. It showcases the firm's work, services, and contact information in a clean, professional design.</p>
                <img src="project1 (1).png" alt="Architectural Landing Page" style="aspect-ratio:1:1; width:600px">
            `;
        } else if (projectId === 'project3') {
            projectDetails = `
                <h3>Expense Tracker</h3>
                <p><strong>Technologies:</strong> Node.js, Express, MongoDB, EJS, JavaScript, CSS </p>
                <p>A simple and efficient web-based application that helps users track their daily expenses. It allows users to add, view, and delete expenses while ensuring data persistence with a  MongoDB database. The application features a user-friendly interface, real-time updates, and responsive design, making expense tracking seamless and accessible</p>
                <img src="project3.png" alt="Architectural Landing Page" style="aspect-ratio:1:1; width:600px">
            `;
        }

        popupContent.innerHTML = projectDetails;
        popupOverlay.classList.add('show');
    });
});

closePopup.addEventListener('click', () => {
    popupOverlay.classList.remove('show');
});


// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
