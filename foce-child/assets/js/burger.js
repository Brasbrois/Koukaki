(function () {
    "use strict";
  
    // Constantes de durée des transitions
    const transitionTimeMenu = 500;
    const transitionTimeImages = 700;
    const transitionTimeFast = 200;
  
    // Etat de base du menu (masqué)
    var openedMenu = document.querySelector(".opened-menu");
    openedMenu.style.display = "none";
    var affichagePage = true;
  
    // Clic sur l'icône du menu
    var boutonBurger = document.querySelector(".bouton-burger");
    var barsIcon = boutonBurger.querySelector(".bars");
    boutonBurger.addEventListener("click", function () {
      deroulementMenu();
    });
  
    // Clic sur un lien dans le menu
    openedMenu.addEventListener("click", function () {
      deroulementMenu();
    });
  
    // Animation du menu
    function deroulementMenu() {
      toggleElementDisplay(openedMenu, transitionTimeMenu); // Animation d'ouverture/fermeture du menu
      barsIcon.classList.toggle("change"); // Ajout/suppression de la classe "change" pour animer l'icône du menu
  
      // Menu fermé
      if (affichagePage) {
        fadeElement(document.getElementById("primary"), 0, transitionTimeMenu);
        delay(function () {
          fadeElement(document.querySelector(".images-menu img"), 1, transitionTimeImages);
        }, transitionTimeMenu);
        affichagePage = false;
      }
      // Menu ouvert
      else {
        delay(function () {
          fadeElement(document.getElementById("primary"), 1, transitionTimeFast);
        }, transitionTimeMenu);
        fadeElement(document.querySelector(".images-menu img"), 0, transitionTimeFast);
        affichagePage = true;
      }
    }
  
    // Fonction pour afficher ou masquer un élément avec une transition
    function toggleElementDisplay(element, transitionTime) {
      if (getComputedStyle(element).display === "none") {
        element.style.display = "block";
        element.style.transitionDuration = transitionTime + "ms";
      } else {
        element.style.display = "none";
      }
    }
  
    // Fonction pour animer la transparence d'un élément
    function fadeElement(element, opacity, transitionTime) {
      element.style.opacity = opacity;
      element.style.transitionDuration = transitionTime + "ms";
    }
  
    // Fonction pour retarder l'exécution d'une fonction
    function delay(func, delayTime) {
      setTimeout(func, delayTime);
    }
  
  })();
  