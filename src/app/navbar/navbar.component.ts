import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { animateFullNavbarAndHero } from '../../animations';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  navBarItems: any = [];
  ismobileMenuOpen = false;
  currentRoute: string = '';

  constructor() {}

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;

  ngAfterViewInit(): void {
    animateFullNavbarAndHero(this.navbar.nativeElement, this.logo.nativeElement);
  }
  // Ferme le menu lorsque l'utilisateur clique sur un onglet
  closeMenu() {
    this.ismobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.ismobileMenuOpen = !this.ismobileMenuOpen;
  }
}
