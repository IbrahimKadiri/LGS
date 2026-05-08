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
    desc: 'Personnel de salle formé pour assurer un service fluide et professionnel.',
    image: 'assets/images/service-salle.jpg',
    link: 'salle'
  },
  {
    id: 1,
    title: 'Cuisine',
    desc: 'Du personnel de cuisine formé pour garantir un service efficace en restaurant et en événementiel.',
    image: 'assets/images/service-cuisine.jpg',
    link: 'cuisine'
  },
  {
    id: 2,
    title: 'Accueil',
    desc: 'Personnel de salle expérimenté pour vos réceptions et événements.',
    image: 'assets/images/service-accueil.jpg',
    link: 'accueil'
  },
  {
    id: 3,
    title: 'Logistique',
    desc: 'Une logistique efficace pour la mise en place et le bon déroulement de vos événements.',
    image: 'assets/images/carré-logistique.png',
    link: 'logistique'
  },
  {
    id: 4,
    title: 'Organisation & process',
    desc: 'Une gestion simple et structurée de vos demandes de personnel.',
    image: 'assets/images/carré-prestation.png',
    link: 'prestation'
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
