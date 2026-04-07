import { CommonModule } from '@angular/common';
import { Component, AfterViewInit  } from '@angular/core';
import { animateProcess } from '../../animations';


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
  
  ngAfterViewInit(): void {
    animateProcess();
  };

}
