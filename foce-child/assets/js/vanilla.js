(function () {
  "use strict";

  // Sélection des éléments nécessaires
  const banner = document.querySelector(".banner");
  const header = document.querySelector(".site-header");
  const logo = document.querySelector(".banner-img");
  const transitionDuration = 1500;
  const transitionDurationSection = 150;
  const transitionDurationTitle = 850;
  let nuageGrandRight = 50;
  let nuagePetitRight = 450;
  const nuageGrandElement = document.querySelector(".nuage-grand");
  const nuagePetitElement = document.querySelector(".nuage-petit");
  let lastScrollY = 0;
 
  
  // Animation de la bannière au démarrage
  banner.animate(
    [
      { top: "-150px", opacity: "0" },
      { top: "0", opacity: "1" },
    ],
    {
      duration: transitionDuration,
      fill: "forwards",
    }
  );
  logo.animate(
    [
      { top: "500px", opacity: "0" },
      { top: "200px", opacity: "1" },
    ],
    {
      duration: transitionDuration,
    }
  );
  

  // Initialisation du Swiper
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 6,
    grabCursor: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 60,
      modifier: 1,
      slideShadows: false,
    },
  });

  // Positionnement initial des nuages
  nuageGrandElement.style.top = "40px";
  nuageGrandElement.style.right = nuageGrandRight + "px";
  nuagePetitElement.style.top = "250px";
  nuagePetitElement.style.right = nuagePetitRight + "px";

  // Fonction pour mettre à jour la position des nuages
  function updateNuagesPosition() {
    nuageGrandElement.style.right = nuageGrandRight + "px";
    nuagePetitElement.style.right = nuagePetitRight + "px";
  }

  // Gestionnaire de scroll
  function scrollHandler() {
    // Calcul de la position de l'utilisateur
    var siteHeaderHeight = header.offsetHeight;
    var bannerHeight = banner.offsetHeight;
    var imageOrigine = siteHeaderHeight + bannerHeight / 5;
    var imageBot = imageOrigine + logo.offsetHeight - header.offsetHeight;
    var videoVisible = banner.offsetHeight - window.scrollY + header.offsetHeight;

    // Parallaxe du titre
    
      if (imageBot >= videoVisible - 25) {
        logo.style.bottom = banner.offsetHeight - window.scrollY + "px";
      } else {
        logo.style.top = imageOrigine + window.scrollY + "px";
      }
    

    // Apparition des sections
    var sections = document.querySelectorAll("section:not(.banner), footer");
    var titles = document.querySelectorAll("h2, h3");

    sections.forEach(function (section) {
      var distanceFromTop = section.getBoundingClientRect().top;
      var isAnimated = section.classList.contains("animated");

      if (distanceFromTop - window.innerHeight <= 0 && !isAnimated) {
        section.classList.add("animated");

        // Suppression de l'animation précédente de la section
        section.style.animation = "none";

        // Activation de l'animation de la section
        setTimeout(function () {
          section.style.animation = "fadeIn 2s forwards";
        }, transitionDurationSection);
      }
    });

    titles.forEach(function (title) {
      var distanceFromTopT = title.getBoundingClientRect().top;
      var isAnimatedT = title.classList.contains("animated");

      if (distanceFromTopT - window.innerHeight <= 0 && !isAnimatedT) {
        title.classList.add("animated");

        // Suppression de l'animation précédente du titre
        title.style.animation = "none";

        // Activation de l'animation du titre
        setTimeout(function () {
          title.style.animation = "opacityIn 2s forwards";
        }, transitionDurationTitle);
      }
    });

    // Déplacement des nuages
    var placeSection = document.querySelector("#place");
    var placeSectionRect = placeSection.getBoundingClientRect();
    var isPlaceSectionVisible =
      placeSectionRect.top < window.innerHeight && placeSectionRect.bottom >= 0;

    if (isPlaceSectionVisible) {
      if (window.scrollY > lastScrollY) {
        // Scroll vers le bas : déplacer les nuages vers la gauche
        nuageGrandRight += 5;
        nuagePetitRight += 5;
      } else {
        // Scroll vers le haut : déplacer les nuages vers la droite
        nuageGrandRight -= 5;
        nuagePetitRight -= 5;
      }

      // Limiter la plage de déplacement des nuages
      const maxGrandNuageRight = 350;
      const minGrandNuageRight = 50;
      const maxPetitNuageRight = 850;
      const minPetitNuageRight = 450;
      nuageGrandRight = Math.max(nuageGrandRight, minGrandNuageRight);
      nuageGrandRight = Math.min(nuageGrandRight, maxGrandNuageRight);
      nuagePetitRight = Math.max(nuagePetitRight, minPetitNuageRight);
      nuagePetitRight = Math.min(nuagePetitRight, maxPetitNuageRight);

      // Appliquer les nouvelles positions des nuages
      updateNuagesPosition();
    }

    lastScrollY = window.scrollY;
  }

  window.addEventListener("scroll", scrollHandler);
})();