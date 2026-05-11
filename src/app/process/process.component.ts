import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, HostListener  } from '@angular/core';
import { animateProcess } from '../../animations';
import {
  Search,
  Users,
  Sparkles,
  MessageCircle,
  LucideAngularModule
} from 'lucide-angular';

@Component({
  imports: [CommonModule, LucideAngularModule],
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements AfterViewInit  {
 
  radius = 170;

  readonly Search = Search;
  readonly Users = Users;
  readonly Sparkles = Sparkles;
  readonly MessageCircle = MessageCircle;

  steps = [
    {
      number: '1',
      icon: this.Search,
      title: 'Votre demande',
      desc: 'Demande envoyée minimum 24h à l’avance. Réponse rapide dans l’heure.'
    },
    {
      number: '2',
      icon: this.Users,
      title: 'Briefing',
      desc: 'Sélection du personnel adapté. Briefing et consignes communiqués avant mission.'
    },
    {
      number: '3',
      icon: this.Sparkles,
      title: 'Arrivée sur site',
      desc: 'Le personnel se présente directement au responsable. Prise de poste rapide et efficace.'
    },
    {
      number: '4',
      icon: this.MessageCircle,
      title: 'Suivi et collaboration',
      desc: 'Suivi qualité après chaque mission. Conditions adaptées selon le volume et la régularité.'
    }
  ];

  constructor() {
    this.updateRadius();
  }

  @HostListener('window:resize')
  updateRadius() {

    const width = window.innerWidth;

    if (width < 380) {
      this.radius = 95;
    }

    else if (width < 480) {
      this.radius = 110;
    }

    else if (width < 768) {
      this.radius = 145;
    }

    else if (width < 1280) {
      this.radius = 250;
    }

    else {
      this.radius = 300;
    }

  }

  getPosition(index: number) {

    const angle = (index / this.steps.length) * 360 - 90;

    const rad = (angle * Math.PI) / 180;

    return {
      x: this.radius * Math.cos(rad),
      y: this.radius * Math.sin(rad)
    };

  }

  getArcPath(i: number): string {

    const start = (i / this.steps.length) * 360 + 18;
    const end = ((i + 1) / this.steps.length) * 360 - 18;

    const r = this.radius - 55;

    const x1 = r * Math.cos((start * Math.PI) / 180);
    const y1 = r * Math.sin((start * Math.PI) / 180);

    const x2 = r * Math.cos((end * Math.PI) / 180);
    const y2 = r * Math.sin((end * Math.PI) / 180);

    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  }

  
  ngAfterViewInit(): void {
    animateProcess();
  };

}
