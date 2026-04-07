import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { ProcessComponent } from '../process/process.component';
import { TestimonyComponent } from '../testimony/testimony.component';
import { HistoryComponent } from '../history/history.component';
import { ContactComponent } from '../contact/contact.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent, ServicesComponent, ProcessComponent, TestimonyComponent, HistoryComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
