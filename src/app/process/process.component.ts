import { CommonModule } from '@angular/common';
import { Component, AfterViewInit  } from '@angular/core';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { animateContact, animateFooter, animateHistoire, animateProcess, animateTestimonials } from '../../animations';

gsap.registerPlugin(Observer);

@Component({
  imports: [CommonModule],
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements AfterViewInit  {
  steps = [
    {
      id: 1,
      title: 'Sélection du personnel',
      description: 'Identification des profils adaptés à vos besoins événementiels et restauration.'
    },
    {
      id: 2,
      title: 'Formation & préparation',
      description: 'Nos équipes reçoivent toutes les instructions spécifiques à votre événement.'
    },
    {
      id: 3,
      title: 'Déploiement sur site',
      description: 'Nos professionnels arrivent ponctuellement et prennent en charge les missions assignées.'
    },
    {
      id: 4,
      title: 'Évaluation & feedback',
      description: 'Recueil de votre feedback pour améliorer nos prestations futures.'
    }
  ];

 testimonials = [
  { text: "Un accompagnement fluide et professionnel. Je recommande vivement !", name: "Claire D.", role: "CEO, StartupX" },
  { text: "Le suivi était impeccable et l'équipe très réactive.", name: "Marc L.", role: "Event Manager" },
  { text: "Tout s'est passé exactement comme prévu, sans surprise.", name: "Sophie R.", role: "Directrice Marketing" },
  { text: "Une expérience simple, rapide et efficace.", name: "Julien T.", role: "Product Owner" },
];
  ngAfterViewInit(): void {
      animateProcess();
      animateTestimonials();
      animateHistoire();
      animateContact();
      animateFooter();
    };

}
