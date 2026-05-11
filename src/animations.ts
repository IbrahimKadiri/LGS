// animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Defaults globaux 
gsap.defaults({
  ease: "power2.out",
  duration: 1,
});

// ---------------------
// NAVBAR + HERO
// ---------------------
export function animateFullNavbarAndHero(navbarEl: HTMLElement, logoNavEl: HTMLElement) {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // Détecter si c'est desktop
  const isDesktop = window.innerWidth >= 768;

  tl.from(navbarEl, { y: -80, opacity: 0, duration: 1 })
    .from(logoNavEl, { scale: 1.1, opacity: 0 }, "-=0.6");
    
  // Navbar link only on desktop
  if (isDesktop) {
    tl.from(".navbar-left .navbar-link", { x: -20, opacity: 0 }, "-=0.5")
      .from(".navbar-right .navbar-link", { x: 20, opacity: 0 }, "-=0.5");
  }

  const hero = document.querySelector("header");
  if (!hero) return;

  const title = hero.querySelector("h1");
  const subtitle = hero.querySelector("p");
  const buttons = hero.querySelectorAll("button");

  tl.from(title, { opacity: 0, y: 40, duration: 1 }, "-=0.6")
    .from(subtitle, { opacity: 0, y: 20 }, "-=0.5")
    .from(buttons, { opacity: 0, y: 20, stagger: 0.15 }, "-=0.4");
}

// ---------------------
// SERVICES (cards animées à l'apparition)
// ---------------------
export function animateServices() {
  // Animation du header de section
  gsap.from(".services-header > *", {
    opacity: 0,
    y: 30,
    stagger: 0.25, // plus lent pour mieux voir
    duration: 1.2,
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  // Animation progressive des cards
  gsap.utils.toArray(".service-card").forEach((card: any) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      scale: 0.97,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%", // animation quand la card est visible
        toggleActions: "play none none reset",
      },
    });

    // Hover safe
    if (card.dataset.hoverInit) return;
    card.dataset.hoverInit = "true";

    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, rotate: -1, duration: 0.3, ease: "power2.out" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}

// ---------------------
// PROCESS (premium circular version)
// ---------------------
export function animateProcess() {

  // ---------------------
  // 1. HEADER (titre + sous-titre)
  // ---------------------
  const headerTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#process",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  headerTl.from(".process-header > *", {
    opacity: 0,
    y: 35,
    stagger: 0.2,
    duration: 1.2,
    ease: "power3.out",
  });


  // ---------------------
  // 2. STEPS (apparition circulaire)
  // ---------------------
  const stepsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#process",
      start: "top 70%",
      toggleActions: "play none none reset",
    }
  });

  stepsTl.from(".process-step", {
    opacity: 0,
    scale: 0.85,
    y: 30,
    duration: 1.6,
    ease: "power4.out",
    stagger: {
      each: 0.18,
      from: "center",
    }
  });




  // ---------------------
  //  HOVER CENTRE (logo)
  // ---------------------
  const center = document.querySelector(".process-center");

  if (center) {
    gsap.set(center, { transformOrigin: "center center" });

    center.addEventListener("mouseenter", () => {
      gsap.to(center, {
        scale: 1.12,
        rotate: 3,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    center.addEventListener("mouseleave", () => {
      gsap.to(center, {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }

}
// ---------------------
// TESTIMONIALS (animation à l'apparition)
// ---------------------
export function animateTestimonials() {
  // Animation du titre
  gsap.from('.testimonial-title > *', {
    opacity: 0,
    y: 30,
    stagger: 0.25, // un peu plus lent pour voir chaque élément
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#testimony",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  // Animation de la carte “featured”
  const featuredCard = document.querySelector('.testimonial-card-featured') as HTMLElement;
  if (featuredCard) {
    gsap.from(featuredCard, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotate: -1,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featuredCard,
        start: "top 90%",
        toggleActions: "play none none reset",
      }
    });
  }

  // Animation des autres cartes une par une
  gsap.utils.toArray('.testimonial-card').forEach((card: any) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotate: 1,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });

    // Hover safe
    if (card.dataset.hoverInit) return;
    card.dataset.hoverInit = "true";

    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, rotate: -1, duration: 0.3, ease: "power2.out" });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    });
  });

  // Hover de la carte “featured”
  if (featuredCard && !featuredCard.dataset['hoverInit']) {
    featuredCard.dataset['hoverInit'] = "true";
    featuredCard.addEventListener('mouseenter', () => {
      gsap.to(featuredCard, { scale: 1.05, rotate: -1, duration: 0.3, ease: "power2.out" });
    });
    featuredCard.addEventListener('mouseleave', () => {
      gsap.to(featuredCard, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    });
  }
}
// ---------------------
// HISTOIRE
// ---------------------
export function animateHistoire() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#history",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  tl.from(".histoire-header > *", {
    opacity: 0,
    y: 40,
    stagger: 0.15,
  })
  .from(".histoire-text > *", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
  }, "-=0.3")
  .from(".histoire-visual", {
    opacity: 0,
    scale: 0.97,
  }, "-=0.4");
}

export function animateContact() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  // INTRO (titre + texte centré)
  tl.from(".contact-section .max-w-2xl > *", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
  })

  // INFOS (colonne gauche)
  .from(".contact-section .space-y-10 > div", {
    opacity: 0,
    x: -25,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15,
  }, "-=0.4")

  // FORM BLOCK (entrée globale)
  .from(".contact-section form", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power3.out",
  }, "-=0.5")

  // INPUTS + SELECT + TEXTAREA (cascade propre)
  .from(".contact-section form input, .contact-section form select, .contact-section form textarea", {
    opacity: 0,
    y: 18,
    duration: 0.45,
    ease: "power2.out",
    stagger: 0.06,
  }, "-=0.3")

  // CTA bouton gold
  .from(".contact-section form button", {
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    ease: "back.out(1.6)",
  }, "-=0.2")

  // WhatsApp CTA
  .from(".contact-section .group", {
    opacity: 0,
    y: 10,
    duration: 0.4,
    ease: "power2.out",
  }, "-=0.25");
}
// ---------------------
// FOOTER
// ---------------------
export function animateFooter() {
  gsap.from(".footer-section > div > *", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 90%",
      toggleActions: "play none none reset",
    },
  });
}

export function animateServiceDetail() {}
