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
    desc: 'Personnel de salle formé pour assurer un service fluide et professionnel.',
    image: 'assets/images/service-salle.jpg',
    link: 'salle',

     details: [
      {
        subtitle: 'Accueil & organisation du service',
        text: 'À leur arrivée (5 à 10 minutes à l’avance), les équipes signalent leur présence au <strong>responsable</strong> et prennent connaissance des <strong>consignes</strong>.'
      },
      {
        subtitle: 'Gestion du service en salle',
        text: 'Les équipes assurent le <strong>service en salle</strong> et en circulation : distribution de boissons, zakouskis et verres au plateau. Elles assurent également le <strong>service de dîner assis</strong>. Le suivi des tables est constant (eau, pain, débarrassage) avec un réapprovisionnement régulier et une adaptation au rythme de l’<strong>événement</strong>.'
      },
      {
        subtitle: 'Suivi et clôture de l’événement',
        text: 'Les équipes travaillent en coordination avec le <strong>responsable</strong> du début à la fin du service. Le service se poursuit jusqu’à validation de la fin par celui-ci. Ensuite, elles assurent le <strong>débarrassage</strong>, le rangement et le nettoyage complet de la zone de travail.'
      }
    ],

    dressCodes: [
      { title: 'Veste blazer noire' },
      { title: 'Chemise blanche'},
      { title: 'Pantalon noir classique'},
      { title: 'Chaussures noires classiques' },
      { title: 'Cravate noire'},
      { title: 'Sommelier'},
    ],

    positions: [
      { title: 'Commis de salle', desc: 'Aide au service, mise en place, débarrassage' },
      { title: 'Chef de rang', desc: 'Gestion d’un rang et service à table' },
      { title: 'Maître d’hôtel', desc: 'Coordination globale du service' },
      { title: 'Barman / Mixologue', desc: 'Préparation et service des boissons' }
    ],

    note: 'Certains chefs de rang sont également formés au service en restaurant, nécessitant une organisation différente du service événementiel.'
  },
  {
    id: 1,
    title: 'Cuisine',
    desc: 'Du personnel de cuisine formé pour garantir un service efficace en restaurant et en événementiel.',
    image: 'assets/images/service-cuisine.jpg',
    link: 'cuisine',

    details: [
      {
        subtitle: 'Mise en place & organisation',
        text: 'Les équipes cuisine arrivent en avance pour préparer le <strong>poste de travail</strong>. Elles assurent la mise en place du matériel et des ingrédients et respectent les consignes du <strong>chef de cuisine</strong> pour garantir un service fluide.'
      },
      {
        subtitle: 'Production & service',
        text: 'La brigade assure la préparation et l’envoi des plats pendant l’<strong>événement</strong>. Chaque poste est spécialisé : entrées, plats, garnitures ou desserts. L’équipe travaille en coordination pour assurer un service régulier et adapté au rythme du service en salle. Certaines équipes peuvent intervenir en <strong>échoppes</strong> ou en restauration traditionnelle selon les besoins.'
      },
      {
        subtitle: 'Suivi & fin de service',
        text: 'La cuisine reste active jusqu’à validation du <strong>responsable</strong>. Ensuite, les équipes assurent le nettoyage, le rangement du matériel et la remise en état de la <strong>cuisine</strong>.'
      }
    ],

    dressCodes: [
      { title: 'Veste de cuisine noire' },
      { title: 'Pantalon adapté à la cuisine'},
      { title: 'Chaussures de sécurité'},
      { title: 'Couteaux de cuisine personnels' },
    ],

    positions: [
      { title: 'Plongeur ', desc: 'Nettoyage de la vaisselle et du matériel, aide à la propreté générale' },
      { title: 'Commis de cuisine', desc: 'Aide à la préparation, exécution des tâches simples' },
      { title: 'Chef de partie', desc: 'Responsable d’un poste (chaud, froid, garnitures, etc.)' },
      { title: 'Second de cuisine', desc: 'Assistant du chef, supervision de la production' },
      { title: 'Chef de cuisine', desc: 'Organisation générale de la cuisine et coordination de la brigade'},
      { title: 'Pâtissier ', desc: 'Réalisation des desserts et préparations sucrées'}
    ],

    note: 'Nos équipes de cuisine sont également formées pour les services en restaurant, en brasserie et en atelier de production.'
  },
  {
    id: 2,
    title: 'Accueil & Services complémentaires',
    desc: 'Une gestion 360 de l’accueil pour vos événements et établissements.',
    image: 'assets/images/service-accueil.jpg',
    link: 'accueil',

    details: [
      {
        subtitle: 'Accueil & première impression',
        text: 'L’<strong>accueil</strong> est la première image de votre établissement. Nos équipes assurent une prise en charge professionnelle des invités, orientent et accompagnent chaque personne dès son arrivée. En cas de forte affluence, elles renforcent le <strong>service</strong> pour maintenir un flux fluide.'
      },
      {
        subtitle: 'Organisation des services sur site',
        text: 'Les services annexes sont gérés avec rigueur : <strong>vestiaire</strong>, <strong>parking</strong> et sanitaires. Chaque espace est suivi pour garantir confort, fluidité et organisation optimale pendant tout l’<strong>événement</strong>.'
      },
      {
        subtitle: 'Continuité du service',
        text: 'Les équipes assurent une présence continue pour garantir la fluidité du service. Elles maintiennent l’<strong>organisation</strong>, la réactivité et le bon déroulement jusqu’à la fin de l’événement.'
      }
    ],

    positions: [
      { title: 'Hôtesse d’accueil ', desc: 'Accueil des invités, orientation et représentation professionnelle de votre événement.' },
      { title: 'Parking Boy', desc: 'Gestion fluide du stationnement et accompagnement des visiteurs dès leur arrivée.' },
      { title: 'Agent sanitaire', desc: 'Entretien et suivi des espaces sanitaires avec rigueur et discrétion.' },
      { title: 'Vestiairiste ', desc: 'Prise en charge des effets personnels avec organisation, rapidité et professionnalisme.'}
    ],
  },
  {
    id: 3,
    title: 'Processus de mise à disposition du personnel',
    desc: 'Une gestion simple et structurée de vos demandes de personnel, de la prise en charge jusqu’au déroulement de la prestation.',
    image: 'assets/images/carré-prestation.png',
    link: 'prestation',

   details: [
      {
        subtitle: 'Demande & organisation du personnel',
        text: 'Vous êtes un restaurant, traiteur ou établissement horeca ? Vous pouvez faire une demande de <strong>personnel</strong>. Nous analysons vos besoins et sélectionnons les profils adaptés à votre <strong>événement</strong>.'
      },
      {
        subtitle: 'Présence & déroulement sur événement',
        text: 'Le personnel se présente 5 à 10 minutes avant le début du service. Chaque membre effectue son <strong>shift</strong> selon les besoins définis et s’adapte immédiatement au fonctionnement de l’établissement.'
      },
      {
        subtitle: 'Suivi, adaptation & facturation',
        text: 'Un retour est effectué après chaque prestation afin d’ajuster les futures équipes selon vos préférences et vos besoins. La gestion est suivie de manière claire et structurée.'
      }
    ]
  },
  {
    id: 4,
    title: 'Logistique & support',
    desc: 'Une logistique efficace pour la mise en place et le bon déroulement de vos événements.',
    image: 'assets/images/carré-logistique.png',
    link: 'logistique',

    details: [
      {
        subtitle: 'Mise en place & installation',
        text: 'Les équipes logistiques assurent la mise en place du matériel avant l’<strong>événement</strong> et installent l’ensemble selon les consignes définies.'
      },
      {
        subtitle: 'Coordination & exécution sur site',
        text: 'La coordination est assurée par le chef d’équipe qui répartit les tâches. Les équipes interviennent sur le <strong>chargement</strong>, le déchargement et la manipulation du matériel.'
      },
      {
        subtitle: 'Démontage & remise en état',
        text: 'En fin d’événement, les équipes assurent le démontage, le rangement et la remise en état complète du lieu avec contrôle du <strong>chef d’équipe</strong>.'
      }
    ],
     positions: [
      { title: 'Monteur / Démonteur événementiel', desc: 'Installation et démontage des infrastructures avant et après événement.' },
      { title: 'Runner logistique', desc: 'Gestion des déplacements de matériel et soutien opérationnel sur site.' },
      { title: 'Coordinateur logistique', desc: 'Supervision des équipes et coordination du bon déroulement des opérations.' }
    ],

  },
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
