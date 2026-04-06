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
    { text: "Un accompagnement fluide et professionnel. Je recommande vivement !", name: "Claire D.", role: "CEO, StartupX" },
    { text: "Le suivi était impeccable et l'équipe très réactive.", name: "Marc L.", role: "Event Manager" },
    { text: "Tout s'est passé exactement comme prévu, sans surprise.", name: "Sophie R.", role: "Directrice Marketing" },
    { text: "Une expérience simple, rapide et efficace.", name: "Julien T.", role: "Product Owner" },
  ];
  
   ngAfterViewInit(): void {
        animateTestimonials();
      };
}
