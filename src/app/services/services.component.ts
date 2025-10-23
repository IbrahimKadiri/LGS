import { AfterViewInit, Component } from '@angular/core';
import { animateServices } from '../../animations';
import { CommonModule } from '@angular/common';

interface Service {
  id: number,
  title: string;
  desc: string;
  image: string;
  link: string;
}


@Component({
  selector: 'app-services',
  imports: [CommonModule],
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
    link: '#service1-details'
  },
  {
    id: 1,
    title: 'Cuisine',
    desc: 'Cuisiniers, commis et chefs qualifiés pour vos prestations traiteur.',
    image: 'assets/images/carré-cuisine.jpeg',
    link: '#service2-details'
  },
  {
    id: 2,
    title: 'Accueil',
    desc: 'Personnel de salle expérimenté pour vos réceptions et événements.',
    image: 'assets/images/carré-acceuil.png',
    link: '#service3-details'
  },
  {
    id: 3,
    title: 'Prestation',
    desc: 'Gestion complète de vos prestations événementielles et logistiques.',
    image: 'assets/images/carré-prestation.png',
    link: '#service4-details'
  },
  {
    id: 4,
    title: 'Logistique',
    desc: 'Transport, montage et coordination logistique de vos événements.',
    image: 'assets/images/carré-logistique.png',
    link: '#service5-details'
  },
  {
    id: 5,
    title: 'Partenariat',
    desc: 'Des collaborations solides et durables avec nos partenaires.',
    image: 'assets/images/carré-partenariat.png',
    link: '#service6-details'
  },
];



  ngAfterViewInit(): void {
    animateServices();
  }
}
