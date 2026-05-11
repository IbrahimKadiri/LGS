import { AfterViewInit, Component } from '@angular/core';
import { animateTestimonials } from '../../animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-testimony',
  imports: [CommonModule],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css'
})
export class TestimonyComponent implements AfterViewInit {

  testimonials = [
    { text: "Très bonne réactivité et communication fluide. Les profils envoyés correspondaient parfaitement à nos besoins.", name: "Mehdi El Khatib", role: "Horizon Events" },
    { text: "Service sérieux du début à la fin. Le suivi après mission fait réellement la différence.", name: "Clara Mendes", role: "Atelier Gourmet" },
    { text: "Nous avons fait appel à leurs équipes pour plusieurs événements. Toujours professionnels et disponibles.", name: "Thomas Verbeek", role: "Maison Victoria Catering" },
    { text: "Personnel motivé et bonne gestion sur place. Une collaboration simple et efficace.", name: "Inès Diallo", role: "Le Comptoir Élégance" },
  ];

   ngAfterViewInit(): void {
     animateTestimonials();
  };
}
