import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  animations: [
    trigger('slideDown', [
      state('in', style({ opacity: 1, height: '*' })),
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-in'),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class Navbar {
  mobileMenuOpen = false;
  servicesOpen = false;

  services = [
    'Furniture Selection',
    'Paint Selection',
    'Renovation Inspiration & Planning',
    'Staging',
    'Custom Floor Plans & Elevations',
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.servicesOpen = false;
    }
  }

  toggleServicesSubmenu(): void {
    this.servicesOpen = !this.servicesOpen;
  }
}
