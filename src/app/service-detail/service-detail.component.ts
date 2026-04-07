import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { animateServiceDetail } from '../../animations';

@Component({
  selector: 'app-service-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit, AfterViewInit {
  serviceId: string | null = null;
  service: any;
  services: any[] = [
  {
    id: 0,
    title: 'Salle',
    desc: 'Personnel de salle expérimenté pour vos réceptions et événements.',
    image: 'assets/images/carré-salle.jpeg',
    link: 'salle',
    details: [
      {
        subtitle: 'Accueil & Service',
        text: 'Notre équipe de serveurs qualifiés assure un service irréprochable pour vos invités.'
      },
      {
        subtitle: 'Gestion des tables',
        text: 'Mise en place, organisation et coordination pour un déroulement fluide de vos événements.'
      },
      {
        subtitle: 'Expérience client',
        text: 'Des professionnels formés pour anticiper vos besoins et ceux de vos invités.'
      }
    ]
  },
  {
    id: 1,
    title: 'Cuisine',
    desc: 'Cuisiniers, commis et chefs qualifiés pour vos prestations traiteur.',
    image: 'assets/images/carré-cuisine.jpeg',
    link: 'cuisine',
    details: [
      { subtitle: 'Menus sur-mesure', text: 'Création de plats adaptés à vos goûts et à votre événement.' },
      { subtitle: 'Service traiteur', text: 'Livraison et présentation impeccables pour tous vos invités.' },
      { subtitle: 'Qualité et sécurité', text: 'Respect strict des normes d’hygiène et sécurité alimentaire.' }
    ]
  },
  {
    id: 2,
    title: 'Accueil',
    desc: 'Personnel d’accueil professionnel pour événements et réceptions.',
    image: 'assets/images/carré-acceuil.png',
    link: 'accueil',
    details: [
      { subtitle: 'Accueil des invités', text: 'Première impression impeccable grâce à nos hôtes et hôtesses.' },
      { subtitle: 'Gestion des flux', text: 'Organisation fluide de l’entrée et de l’accès aux espaces.' },
      { subtitle: 'Information & assistance', text: 'Nos équipes répondent à toutes les demandes sur place.' }
    ]
  },
  {
    id: 3,
    title: 'Prestation',
    desc: 'Gestion complète de vos prestations événementielles et logistiques.',
    image: 'assets/images/carré-prestation.png',
    link: 'prestation',
    details: [
      { subtitle: 'Coordination globale', text: 'Planification et supervision de chaque étape de votre événement.' },
      { subtitle: 'Equipe dédiée', text: 'Un interlocuteur unique pour suivre toutes vos demandes.' },
      { subtitle: 'Livraison clé en main', text: 'Nous nous assurons que tout est prêt le jour J.' }
    ]
  },
  {
    id: 4,
    title: 'Logistique',
    desc: 'Transport, montage et coordination logistique de vos événements.',
    image: 'assets/images/carré-logistique.png',
    link: 'logistique',
    details: [
      { subtitle: 'Transport & montage', text: 'Gestion complète des installations et équipements nécessaires.' },
      { subtitle: 'Coordination sur site', text: 'Organisation efficace pour un déroulement sans accroc.' },
      { subtitle: 'Optimisation du timing', text: 'Tout est planifié pour respecter vos délais et besoins.' }
    ]
  },
  {
    id: 5,
    title: 'Partenariat',
    desc: 'Des collaborations solides et durables avec nos partenaires.',
    image: 'assets/images/carré-partenariat.png',
    link: 'partenariat',
    details: [
      { subtitle: 'Relations solides', text: 'Nous travaillons avec des partenaires fiables et expérimentés.' },
      { subtitle: 'Synergie d’équipe', text: 'Collaboration optimale pour la réussite de vos événements.' },
      { subtitle: 'Développement durable', text: 'Des partenariats basés sur la confiance et la qualité.' }
    ]
  }
];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'id depuis l'URL
    this.serviceId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      this.service = this.services.find(s => s.link  === this.serviceId);
    });
  }

  ngAfterViewInit(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });
    animateServiceDetail();
  }
}
