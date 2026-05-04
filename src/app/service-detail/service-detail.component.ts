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
    image: 'assets/images/carré-salle.jpeg',
    link: 'salle',

    details: [
      {
        subtitle: 'Accueil & organisation du service',
        text: 'À leur arrivée (5 à 10 minutes à l’avance), les équipes signalent leur présence au responsable et prennent connaissance des consignes.'
      },
      {
        subtitle: 'Gestion du service en salle',
        text: 'Les équipes assurent le service en salle et en circulation : distribution de boissons, zakouskis et verres au plateau. Elles sont également formées pour assurer un service de dîner assis. Le suivi des tables est constant (eau, pain, débarrassage), avec un réapprovisionnement régulier et une adaptation au rythme de l’événement (planning, interventions, moments clés).'
      },
      {
        subtitle: 'Suivi et clôture de l’événement',
        text: 'Les équipes travaillent en coordination avec le responsable du début à la fin du service. Le service se poursuit jusqu’à validation de la fin par celui-ci. Ensuite, elles assurent le débarrassage, le rangement et le nettoyage complet de la zone de travail.'
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
    image: 'assets/images/carré-cuisine.jpeg',
    link: 'cuisine',

    details: [
      {
        subtitle: 'Mise en place & organisation',
        text: 'Les équipes cuisine arrivent en avance pour préparer le poste de travail. Elles assurent la mise en place du matériel, des ingrédients et respectent les consignes du chef de cuisine afin de garantir un service fluide.'
      },
      {
        subtitle: 'Production & service',
        text: 'La brigade assure la préparation et l’envoi des plats pendant l’événement. Chaque poste est spécialisé : entrées, plats, garnitures ou desserts. L’équipe travaille en coordination pour assurer un service régulier, propre et adapté au rythme du service en salle. Il est également possible qu’une partie du personnel soit positionnée derrière des échoppes pour le service, ils sont formés et prêts à ce type de fonctionnement. Nous disposons également de personnel plus adapté aux services en restaurant et en brasserie, selon vos besoins.'
      },
      {
        subtitle: 'Suivi & fin de service',
        text: 'La cuisine reste active jusqu’à la validation de fin de service par le responsable. Ensuite, les équipes assurent le nettoyage, le rangement du matériel et la remise en état de la cuisine.'
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
    image: 'assets/images/carré-acceuil.png',
    link: 'accueil',

    details: [
      {
        subtitle: ' Accueil & gestion des invités',
        text: 'Les équipes d’accueil prennent en charge les invités dès leur arrivée et assurent une orientation fluide vers le lieu de l’événement. Elles gèrent également le flux d’entrée afin de garantir une organisation claire et structurée. Selon les besoins, elles peuvent assurer des visites de l’événement, la gestion des réservations et le suivi général de la satisfaction des invités. Elles restent disponibles tout au long de l’événement pour répondre aux demandes ou besoins particuliers.'
      },
      {
        subtitle: 'Organisation des services sur site',
        text: 'Les équipes assurent la gestion des services complémentaires liés au bon déroulement de l’événement. Le vestiaire prend en charge les effets personnels des invités avec un rangement sécurisé et une restitution organisée en fin d’événement. La gestion du stationnement permet d’optimiser l’arrivée des véhicules et de fluidifier l’accès au lieu. Les sanitaires sont suivis et entretenus régulièrement afin de garantir propreté et disponibilité pendant toute la durée de l’événement.'
      },
      {
        subtitle: 'Suivi & continuité du service',
        text: 'Les équipes restent présentes et actives tout au long de l’événement afin d’assurer une continuité de service. Elles veillent au bon déroulement global, à la fluidité des flux invités et au maintien d’un environnement propre et organisé jusqu’à la fin de l’événement.'
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
        text: 'Vous êtes un restaurant, un traiteur ou un établissement horeca ? Vous pouvez effectuer votre demande de personnel auprès de LGS pour tous les postes nécessaires en salle, cuisine, accueil & logistique Les demandes sont à effectuer idéalement au minimum 24h à l’avance. Une réponse vous est apportée dans les 30 minutes maximum. Nous analysons vos besoins afin de vous proposer le personnel le plus adapté à votre événement et à votre structure. Des tarifs préférentiels peuvent être appliqués en cas de demandes régulières ou de volumes importants de personnel. Une fois la sélection validée, nous confirmons le booking et le personnel reçoit toutes les instructions nécessaires avant son arrivée sur place. La gestion administrative est entièrement prise en charge par nos soins.'
      },
      {
        subtitle: ' Présence & déroulement sur événement',
        text: 'Le personnel se présente sur place 5 à 10 minutes avant le début du service, quel que soit le poste demandé. Chaque membre de l’équipe effectue son shift selon les besoins définis en amont. Un suivi opérationnel est assuré en continu afin de garantir le bon déroulement du service et la qualité de la prestation. Les équipes sont déjà briefées avant leur arrivée et s’adaptent directement au fonctionnement de l’établissement'
      },
      {
        subtitle: 'Suivi, adaptation & facturation',
        text: 'Après les prestations, un retour est effectué avec vous concernant les équipes envoyées et le personnel ayant le mieux répondu à vos attentes. Nous adaptons ensuite nos futures propositions en fonction de vos préférences et de vos besoins récurrents. Le cycle de facturation est mensuel, avec un suivi clair et structuré de l’ensemble des prestations effectuées.'
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
        text: 'Les équipes logistiques assurent la mise en place du matériel avant l’événement (mobilier, matériel technique, décor). Elles installent l’ensemble selon le plan prévu et respectent les consignes d’organisation afin de garantir une installation conforme et efficace.'
      },
      {
        subtitle: 'Coordination & exécution sur site',
        text: 'La coordination des équipes est assurée par le chef d’équipe logistique, qui répartit les tâches et veille au bon déroulement des opérations. Les agents de manutention interviennent sur le chargement, déchargement et la manipulation des éléments lourds ou volumineux. L’ensemble du personnel travaille en support direct pour assurer une exécution rapide et structurée sur site.'
      },
      {
        subtitle: 'Démontage & remise en état',
        text: 'En fin d’événement, les équipes assurent le démontage complet du matériel, le rangement et la remise en état du lieu. Le chef d’équipe contrôle la conformité du démontage et s’assure que l’ensemble est réalisé correctement et dans les délais.'
      }
    ]
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
