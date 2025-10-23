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
    }
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
      }
    });

     // Hover animation séparée
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, rotate: -1, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    });

    // Decorations animation (looping parallax)
    const decorations = card.querySelectorAll(".decorative");
    decorations.forEach((dec: any, i: number) => {
      gsap.to(dec, {
        y: "+=50",
        yoyo: true,
        repeat: -1,
        duration: 3 + i,
        ease: "sine.inOut",
      });
      gsap.to(dec, {
        x: "+=5",
        yoyo: true,
        repeat: -1,
        duration: 4 + i,
        ease: "sine.inOut",
      });
    });
  });
}

export function animateProcess() {
 gsap.utils.toArray(".step-card").forEach((card: any) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
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
  // Label, titre et texte
  gsap.from("#testimonials span, #testimonials h2, #testimonials p", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 80%",
    }
  });

  // Cards
  gsap.from("#testimonials .flex-shrink-0", {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
      trigger: "#testimonials .flex-shrink-0",
      start: "top 85%",
    }
  });
}

export function animateContact() {
  // Label, titre et texte
  gsap.from("#contact span, #contact h2, #contact p", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    }
  });

  // Formulaire et map
  gsap.from("#contact form", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact form",
      start: "top 85%",
    }
  });

  gsap.from("#contact iframe", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact iframe",
      start: "top 85%",
    }
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
