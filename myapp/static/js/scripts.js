// document.addEventListener('DOMContentLoaded', function() {
//     const messages = document.querySelectorAll('.messages li');
//     messages.forEach(function(message) {
//         alert(message.textContent);
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const animatedSections = document.querySelectorAll('.animated-section');
//     const animatedCards = document.querySelectorAll('.animated-card');

//     function checkScroll() {
//         const triggerBottom = window.innerHeight * 0.8;
//         const triggerTop = window.innerHeight * 0.2;

//         animatedSections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             const sectionBottom = section.getBoundingClientRect().bottom;

//             if (sectionTop < triggerBottom && sectionBottom > triggerTop) {
//                 section.classList.add('visible');
//             } else {
//                 section.classList.remove('visible');
//             }
//         });

//         animatedCards.forEach(card => {
//             const cardTop = card.getBoundingClientRect().top;
//             const cardBottom = card.getBoundingClientRect().bottom;

//             if (cardTop < triggerBottom && cardBottom > triggerTop) {
//                 card.classList.add('visible');
//             } else {
//                 card.classList.remove('visible');
//             }
//         });
//     }

//     window.addEventListener('scroll', checkScroll);
//     checkScroll();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const messages = document.querySelectorAll('.messages li');
//     messages.forEach(function(message) {
//         alert(message.textContent);
//     });

//     const animatedSections = document.querySelectorAll('.animated-section');
//     const animatedCards = document.querySelectorAll('.animated-card');

//     function checkScroll() {
//         const triggerBottom = window.innerHeight * 0.8;

//         animatedSections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             if (sectionTop < triggerBottom) {
//                 section.classList.add('visible');
//             } else {
//                 section.classList.remove('visible');
//             }
//         });

//         animatedCards.forEach(card => {
//             const cardTop = card.getBoundingClientRect().top;
//             if (cardTop < triggerBottom) {
//                 card.classList.add('visible');
//             } else {
//                 card.classList.remove('visible');
//             }
//         });
//     }

//     window.addEventListener('scroll', checkScroll);
//     checkScroll();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const messages = document.querySelectorAll('.messages li');
//     messages.forEach(function(message) {
//         alert(message.textContent);
//     });

//     const animatedSections = document.querySelectorAll('.animated-section');
//     const animatedCards = document.querySelectorAll('.animated-card');

//     function checkScroll() {
//         const triggerBottom = window.innerHeight * 0.8;

//         animatedSections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             if (sectionTop < triggerBottom) {
//                 section.classList.add('visible');
//             } else {
//                 section.classList.remove('visible');
//             }
//         });

//         animatedCards.forEach(card => {
//             const cardTop = card.getBoundingClientRect().top;
//             if (cardTop < triggerBottom) {
//                 card.classList.add('visible');
//             } else {
//                 card.classList.remove('visible');
//             }
//         });
//     }

//     window.addEventListener('scroll', checkScroll);
//     checkScroll();
    
//     // Scroll direction detection and footer visibility toggling
//     let lastScrollY = window.scrollY;
//     const footer = document.querySelector('footer');

//     window.addEventListener('scroll', () => {
//         if (window.scrollY > lastScrollY) {
//             // Scrolling down
//             footer.classList.add('footer-hidden');
//             footer.classList.remove('footer-visible');
//         } else {
//             // Scrolling up
//             footer.classList.add('footer-visible');
//             footer.classList.remove('footer-hidden');
//         }
//         lastScrollY = window.scrollY;
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const messages = document.querySelectorAll('.messages li');
//     messages.forEach(function(message) {
//         alert(message.textContent);
//     });

//     const animatedSections = document.querySelectorAll('.animated-section');
//     const animatedCards = document.querySelectorAll('.animated-card');
//     const footer = document.querySelector('footer');
//     const scrollIcon = document.querySelector('.scroll-icon');
//     let lastScrollY = window.scrollY;

//     function checkScroll() {
//         const triggerBottom = window.innerHeight * 0.8;
//         const triggerTop = window.innerHeight * 0.2;

//         animatedSections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             const sectionBottom = section.getBoundingClientRect().bottom;

//             if (sectionTop < triggerBottom && sectionBottom > triggerTop) {
//                 section.classList.add('visible');
//             } else {
//                 section.classList.remove('visible');
//             }
//         });

//         animatedCards.forEach(card => {
//             const cardTop = card.getBoundingClientRect().top;
//             const cardBottom = card.getBoundingClientRect().bottom;

//             if (cardTop < triggerBottom && cardBottom > triggerTop) {
//                 card.classList.add('visible');
//             } else {
//                 card.classList.remove('visible');
//             }
//         });

//         if (window.scrollY > lastScrollY) {
//             footer.classList.add('footer-hidden');
//             footer.classList.remove('footer-visible');
//             scrollIcon.classList.remove('visible');
//         } else {
//             footer.classList.add('footer-visible');
//             footer.classList.remove('footer-hidden');
//             scrollIcon.classList.add('visible');
//         }
//         lastScrollY = window.scrollY;
//     }

//     window.addEventListener('scroll', checkScroll);
//     checkScroll();
// });


document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.messages li');
    messages.forEach(function(message) {
        alert(message.textContent);
    });

    const animatedSections = document.querySelectorAll('.animated-section');
    const animatedCards = document.querySelectorAll('.animated-card');
    const footer = document.querySelector('footer');
    let lastScrollY = window.scrollY;

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        const triggerTop = window.innerHeight * 0.2;

        animatedSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (sectionTop < triggerBottom && sectionBottom > triggerTop) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        animatedCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;

            if (cardTop < triggerBottom && cardBottom > triggerTop) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });

        // Show/hide footer based on scroll direction
        if (window.scrollY > lastScrollY) {
            footer.classList.remove('visible');
        } else {
            footer.classList.add('visible');
        }

        lastScrollY = window.scrollY;
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
