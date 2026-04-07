import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { animateServices } from '../../animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: number,
  title: string;
  desc: string;
  image: string;
  link: string;
}


@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {

  services: Service[] = [
  {
    id: 0,
    title: 'Salle',
    desc: 'Personnel de salle expérimenté pour vos réceptions et événements.',
    image: 'assets/images/carré-salle.jpeg',
    link: 'salle'
  },
  {
    id: 1,
    title: 'Cuisine',
    desc: 'Cuisiniers, commis et chefs qualifiés pour vos prestations traiteur.',
    image: 'assets/images/carré-cuisine.jpeg',
    link: 'cuisine'
  },
  {
    id: 2,
    title: 'Accueil',
    desc: 'Personnel de salle expérimenté pour vos réceptions et événements.',
    image: 'assets/images/carré-acceuil.png',
    link: 'accueil'
  },
  {
    id: 3,
    title: 'Prestation',
    desc: 'Gestion complète de vos prestations événementielles et logistiques.',
    image: 'assets/images/carré-prestation.png',
    link: 'prestation'
  },
  {
    id: 4,
    title: 'Logistique',
    desc: 'Transport, montage et coordination logistique de vos événements.',
    image: 'assets/images/carré-logistique.png',
    link: 'logistique'
  },
  {
    id: 5,
    title: 'Partenariat',
    desc: 'Des collaborations solides et durables avec nos partenaires.',
    image: 'assets/images/carré-partenariat.png',
    link: 'partenariat'
  },
];
  
  @ViewChild('events') events!: ElementRef;
  @ViewChild('profiles') profiles!: ElementRef;
  @ViewChild('delay') delay!: ElementRef;

  ngAfterViewInit(): void {
    animateServices();
    const statsSection = this.events.nativeElement.closest('section');

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.simpleCount(this.events.nativeElement, 500, true);
        this.simpleCount(this.profiles.nativeElement, 200, true);
        this.simpleCount(this.delay.nativeElement, 24, false);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }
   
  /**
 * Compteur simple avec option pour ajouter le '+'
 */

  simpleCount(element: HTMLElement, target: number, addPlus: boolean, duration = 2000) {
  let current = 0;
  const step = Math.ceil(target / (duration / 50));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = addPlus ? `${target}+` : `${target}`;
      clearInterval(interval);
    } else {
      element.textContent = addPlus ? `${current}+` : `${current}`;
    }
  }, 50);
}
}
