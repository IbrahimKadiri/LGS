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
// PROCESS
// ---------------------
export function animateProcess() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#process",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  tl.from(".process-header > *", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
  });

  gsap.utils.toArray(".process-step").forEach((step: any, i) => {
    const innerTl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: "top 80%",
        toggleActions: "play none none reset",
      }
    });

    innerTl
      .from(step, { opacity: 0, y: 40 })
      .from(step.querySelector(".vertical-line"), {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.5,
      }, "-=0.4")
      .from(step.querySelector(".horizontal-line"), {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.5,
      }, "-=0.3");
  });
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

// ---------------------
// CONTACT
// ---------------------
export function animateContact() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  tl.from(".contact-header > *", {
    opacity: 0,
    y: 40,
    stagger: 0.15,
  })
  .from(".contact-infos > *", {
    opacity: 0,
    y: 30,
  }, "-=0.3")
  .from(".contact-form > *", {
    opacity: 0,
    y: 30,
  }, "-=0.4");
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

export function animateServiceDetail() {

  // ---------------------
  // 1️⃣ Hero
  // ---------------------
  const hero = document.querySelector("section.relative > div.relative");
  const heroText = document.querySelector("section.relative > div.relative > div.absolute.inset-0.flex");

  if (hero && heroText) {
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top 90%",
        toggleActions: "play none none reset",
      }
    });

    heroTl.from(hero, { opacity: 0, scale: 1.05, duration: 1.2, ease: "power2.out" })
          .from(heroText, { opacity: 0, y: 40, duration: 1, ease: "power2.out" }, "-=0.6");
  }

  // ---------------------
  // 2️⃣ Points forts section
  // ---------------------
  const pointsSection = document.querySelector(".max-w-5xl");
  if (pointsSection) {
    gsap.from(pointsSection, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: pointsSection,
        start: "top 85%",
        toggleActions: "play none none reset",
      }
    });
  }

  // ---------------------
  // 3️⃣ Chaque process-step
  // ---------------------
  gsap.utils.toArray(".process-step").forEach((step: any) => {
    const verticalLine = step.querySelector(".vertical-line");
    const horizontalLine = step.querySelector(".horizontal-line");

    const stepTl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        toggleActions: "play none none reset",
      }
    });

    stepTl.from(step, { opacity: 0, y: 40, duration: 0.6 });

    if (verticalLine) {
      stepTl.from(verticalLine, { scaleY: 0, transformOrigin: "top", duration: 0.5 }, "-=0.4");
    }
    if (horizontalLine) {
      stepTl.from(horizontalLine, { scaleX: 0, transformOrigin: "left", duration: 0.5 }, "-=0.3");
    }
  });


}