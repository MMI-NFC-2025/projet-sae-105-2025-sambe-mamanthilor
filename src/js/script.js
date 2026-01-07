// ========== MOBILE MENU FUNCTIONALITY ==========

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content a');

  if (menuToggle && mobileMenu && mobileMenuClose) {
    // Ouvrir le menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    // Fermer le menu
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    // Fermer le menu quand on clique sur un lien
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Fermer le menu avec la touche Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
});

// ========== CAROUSEL FUNCTIONALITY ==========

function initCarousel(carouselContainer) {
  const carouselItems = carouselContainer.querySelector('.carousel-items');
  const prevBtn = carouselContainer.querySelector('.carousel-btn--prev');
  const nextBtn = carouselContainer.querySelector('.carousel-btn--next');
  const items = carouselContainer.querySelectorAll('.carousel-item');
  
  let currentIndex = 0;
  const itemCount = items.length;

  // Fonction pour mettre à jour la position du carousel
  function updateCarouselPosition() {
    const offset = -currentIndex * 100;
    carouselItems.style.transform = `translateX(${offset}%)`;
  }

  // Bouton précédent
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    updateCarouselPosition();
  });

  // Bouton suivant
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarouselPosition();
  });

  // Navigation au clavier
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + itemCount) % itemCount;
      updateCarouselPosition();
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % itemCount;
      updateCarouselPosition();
    }
  });
}

// Initialiser tous les carousels de la page
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    initCarousel(carousel);
  });
});
