// animations.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateHero() {
  const hero = document.querySelector("header");
  if (!hero) return;

  const logo = hero.querySelector("img");
  const title = hero.querySelector("h1");
  const subtitle = hero.querySelector("p");
  const buttons = hero.querySelectorAll("button");

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  tl.from(logo, { opacity: 0, y: 40, duration: 1.6 })
    .from(title, { opacity: 0, y: 50, duration: 1.4 }, "-=1.2")
    .from(subtitle, { opacity: 0, y: 30, duration: 1.2 }, "-=1.0")
    .from(buttons, { opacity: 0, y: 25, duration: 1, stagger: 0.3 }, "-=0.8");
}

export function animateServices() {
  // Animate section title and subtitle
  gsap.from(".services-header > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".services-header",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  // Animate cards on scroll
  gsap.utils.toArray(".service-card").forEach((card: any) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Hover animation (scale + rotate)
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, rotate: -1, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}

export function animateProcess() {
  // Animate section title and subtitle
  gsap.from(".process-header > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".process-header",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  // Animate each step container with progressive delay
  gsap.utils.toArray(".process-step").forEach((step: any, i) => {
    const delay = i * 0.3; // delay progressif entre les étapes

    // Fade + slide pour la step entière
    gsap.from(step, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Vertical line animation
    const verticalLine = step.querySelector(".vertical-line");
    if (verticalLine) {
      gsap.from(verticalLine, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.6,
        ease: "power2.out",
        delay,
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Horizontal line animation
    const horizontalLine = step.querySelector(".horizontal-line");
    if (horizontalLine) {
      gsap.from(horizontalLine, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.6,
        ease: "power2.out",
        delay: delay + 0.2,
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  });
}

export function animateAbout() {
  // Label, titre et texte
  gsap.from("#about span, #about h2, #about p", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    }
  });

  // Image
  gsap.from("#about img", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#about img",
      start: "top 85%",
    }
  });
}

export function animateTestimonials() {
  // Animation des titres
  gsap.from('.testimonial-title > *', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.testimonial-title',
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
  });

  // Carte principale
  const mainCard = document.querySelector('.testimonial-card-featured') as HTMLElement;

  if (mainCard) {
    gsap.from(mainCard, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: mainCard,
        start: 'top 80%',
      },
    });

    // Hover effet subtil
    mainCard.addEventListener('mouseenter', () => {
      gsap.to(mainCard, {
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    mainCard.addEventListener('mouseleave', () => {
      gsap.to(mainCard, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  }

  // Cartes secondaires
  gsap.utils.toArray('.testimonial-card').forEach((card: any) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
      },
    });

    // Hover comme services
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        rotate: -1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
}

export function animateHistoire() {

  // Intro (label + title + text)
  gsap.from(".histoire-header > *", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".histoire-header",
      start: "top 85%",
    },
  });

  // Texte (paragraphes + bloc signature)
  gsap.from(".histoire-text > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".histoire-text",
      start: "top 85%",
    },
  });

  // Image reveal
  gsap.from(".histoire-visual", {
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".histoire-visual",
      start: "top 85%",
    },
  });

}
export function animateContact() {

  gsap.from(".contact-header > *", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-header",
      start: "top 85%",
    },
  });

  gsap.from(".contact-infos > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-infos",
      start: "top 85%",
    },
  });

  gsap.from(".contact-form > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 85%",
    },
  });

}

export function animateFooter() {

  gsap.from(".footer-section > div > *", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 90%",
    },
  });

}

export function animateFullNavbarAndHero(navbarEl: HTMLElement, logoNavEl: HTMLElement) {
 const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // ---------------------
  // Navbar
  // ---------------------
  tl.from(navbarEl, { y: -80, opacity: 0, duration: 1.2 })
    .from(logoNavEl, { scale: 1.2, opacity: 0, duration: 1 }, "-=0.8")
    .from(".navbar-left .navbar-link", { x: -30, opacity: 0, stagger: 0.15, duration: 0.8 }, "-=0.8")
    .from(".navbar-right .navbar-link", { x: 30, opacity: 0, stagger: 0.15, duration: 0.8 }, "-=0.8");

  // ---------------------
  // Hero
  // ---------------------
  const hero = document.querySelector("header");
  if (!hero) return;

  const title = hero.querySelector("h1");
  const subtitle = hero.querySelector("p");
  const buttons = hero.querySelectorAll("button");

  tl.from(title, { opacity: 0, y: 50, duration: 2 }, "-=1.2")
    .from(subtitle, { opacity: 0, y: 30, duration: 1.2 }, "-=1.0")
    .from(buttons, { opacity: 0, y: 25, duration: 1, stagger: 0.3 }, "-=0.8");
}

