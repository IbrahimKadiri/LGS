import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChevronLeft, Upload, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-career',
  imports: [CommonModule, FormsModule, LucideAngularModule, RouterModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

  readonly ChevronRight = ChevronRight;
  readonly Upload = Upload;
  readonly ChevronLeft = ChevronLeft;
  step = 0;
  done = false;
  isDragging = false;

  postes = [
    "Commis de salle",
    "Chef de rang",
    "Maître d'hôtel",
    "Barman / Mixologue",
    "Chef de partie",
    "Commis de cuisine",
    "Plongeur",
    "Hôte / hôtesse d'accueil",
    "Régisseur technique",
    "Manutentionnaire",
  ];

  stepsLabels = ['Poste', 'Identité', 'Expérience', 'CV'];

  data = {
    poste: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    years: '',
    availability: '',
    motivation: '',
    cv: null as File | null,
  };

  next() {
    this.step = Math.min(3, this.step + 1);
  }

  prev() {
    this.step = Math.max(0, this.step - 1);
  }

  canNext(): boolean {

    if (this.step === 0) {
      return !!this.data.poste;
    }

    if (this.step === 1) {
      return !!(
        this.data.firstName &&
        this.data.lastName &&
        this.data.email &&
        this.data.phone
      );
    }

    if (this.step === 2) {
      return !!(
        this.data.years &&
        this.data.availability
      );
    }

    if (this.step === 3) {
      return !!this.data.cv;
    }

    return false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.data.cv = file;
    }
  }

  submit() {
    this.done = true;

    console.log(this.data);

    // future:
    // envoyer API
    // firebase
    // supabase
    // email
  }

  onDragOver(event: DragEvent) {
  event.preventDefault();
  this.isDragging = true;
}

onDragLeave(event: DragEvent) {
  event.preventDefault();
  this.isDragging = false;
}

onDrop(event: DragEvent) {
  event.preventDefault();

  this.isDragging = false;

  const files = event.dataTransfer?.files;

  if (files && files.length > 0) {
    this.data.cv = files[0];
  }
}
}
