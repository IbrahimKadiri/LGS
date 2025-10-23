import { AfterViewInit, Component } from '@angular/core';
import { animateProcess } from '../../animations';
import { CommonModule } from '@angular/common';

import gsap from 'gsap';
import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Mousewheel]);

@Component({
  selector: 'app-process',
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent implements AfterViewInit {

 currentIndex = 0;

  steps = [
    {
      title: 'Sélection du personnel',
      description:
        'Identification des profils les plus adaptés à vos besoins événementiels et de restauration.',
    },
    {
      title: 'Formation & préparation',
      description:
        'Chaque membre reçoit des instructions précises pour assurer une prestation irréprochable.',
    },
    {
      title: 'Déploiement sur site',
      description:
        'Nos équipes arrivent ponctuellement, prêtes à offrir un service professionnel et efficace.',
    },
    {
      title: 'Évaluation & feedback',
      description:
        'Recueil de votre retour d’expérience pour optimiser nos futures collaborations.',
    }
  ]

 ngAfterViewInit(): void {
    const swiper = new Swiper('.process-swiper', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 60,
      grabCursor: true,
      mousewheel: true,
      centeredSlides: true,
      on: {
        slideChange: () => {
          this.currentIndex = swiper.activeIndex;
          this.animateCard();
        },
      },
    });
  }
  animateCard() {
    gsap.fromTo(
      '.process-card',
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
    );
  }
}
