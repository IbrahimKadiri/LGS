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

  tl.from(navbarEl, { y: -80, opacity: 0, duration: 1 })
    .from(logoNavEl, { scale: 1.1, opacity: 0 }, "-=0.6")
    .from(".navbar-left .navbar-link", { x: -20, opacity: 0 }, "-=0.5")
    .from(".navbar-right .navbar-link", { x: 20, opacity: 0 }, "-=0.5");

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
// SERVICES
// ---------------------
export function animateServices() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  tl.from(".services-header > *", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
  })
  .from(".service-card", {
    opacity: 0,
    y: 40,
    scale: 0.97,
    stagger: 0.2,
  }, "-=0.3");

  // Hover safe
  gsap.utils.toArray(".service-card").forEach((card: any) => {
    if (card.dataset.hoverInit) return;
    card.dataset.hoverInit = "true";

    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, rotate: -1, duration: 0.3 });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, rotate: 0, duration: 0.3 });
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
// TESTIMONIALS
// ---------------------
export function animateTestimonials() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#testimony",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  tl.from('.testimonial-title > *', {
    opacity: 0,
    y: 30,
    stagger: 0.15,
  })
  .from('.testimonial-card-featured', {
    opacity: 0,
    y: 40,
    scale: 0.97,
  }, "-=0.3")
  .from('.testimonial-card', {
    opacity: 0,
    y: 40,
    scale: 0.97,
    stagger: 0.2,
  }, "-=0.4");

  // Hover safe
  gsap.utils.toArray('.testimonial-card, .testimonial-card-featured').forEach((card: any) => {
    if (card.dataset.hoverInit) return;
    card.dataset.hoverInit = "true";

    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, rotate: -1, duration: 0.3 });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, rotate: 0, duration: 0.3 });
    });
  });
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
