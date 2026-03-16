import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  services = [
    'Furniture Selection',
    'Paint Selection',
    'Renovation Inspiration & Planning',
    'Staging',
    'Custom Floor Plans & Elevations',
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getServiceIcon(service: string): string {
    const iconMap: { [key: string]: string } = {
      'Furniture Selection': 'chair',
      'Paint Selection': 'palette',
      'Renovation Inspiration & Planning': 'architecture',
      'Staging': 'home',
      'Custom Floor Plans & Elevations': 'straighten',
    };
    return iconMap[service] || 'design_services';
  }
}
