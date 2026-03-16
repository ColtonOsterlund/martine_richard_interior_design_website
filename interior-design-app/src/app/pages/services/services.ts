import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      title: 'Furniture Selection',
      icon: 'chair',
      shortDescription:
        'Expert curation of furniture pieces that combine style, comfort, and functionality for your space.',
      includes: [
        'Space assessment and furniture recommendations',
        'Style consultation and mood board creation',
        'Sourcing from trusted vendors',
        'Quality and durability evaluation',
        'Budget-conscious options',
        'Delivery and placement coordination',
      ],
      benefits: [
        'Cohesive design that reflects your style',
        'Quality pieces that last',
        'Professional guidance within budget',
        'Time savings on research and selection',
        'Proper fit and scale for your space',
      ],
    },
    {
      title: 'Paint Selection',
      icon: 'palette',
      shortDescription:
        'Strategic color selection that sets the mood and transforms your space with professional precision.',
      includes: [
        'Comprehensive color consultation',
        'Paint sample testing and visualization',
        'Room-by-room color coordination',
        'Finish and sheen recommendations',
        'Accent wall and feature design',
        'Eco-friendly paint options',
      ],
      benefits: [
        'Perfect color combinations for your space',
        'Confidence in your color choices',
        'Professional finish and application guidance',
        'Cohesive color flow throughout home',
        'Enhanced light and mood in rooms',
        'Increased property value',
      ],
    },
    {
      title: 'Renovation Inspiration & Planning',
      icon: 'architecture',
      shortDescription:
        'Comprehensive planning and inspiration for major renovations and home transformations.',
      includes: [
        'Renovation goal definition and planning',
        'Design concept development',
        'Material and fixture selection',
        'Layout optimization',
        'Budget estimation and planning',
        'Project timeline development',
      ],
      benefits: [
        'Clear vision for your renovation',
        'Optimized space planning',
        'Coordinated design elements',
        'Budget and timeline management',
        'Professional contractor recommendations',
        'Minimized unexpected costs',
      ],
    },
    {
      title: 'Staging',
      icon: 'home',
      shortDescription:
        'Professional home staging that showcases your space and maximizes appeal to buyers or renters.',
      includes: [
        'Property assessment and staging plan',
        'Furniture arrangement optimization',
        'Decor and accessory selection',
        'Lighting enhancement',
        'Curb appeal recommendations',
        'Photography-ready presentation',
      ],
      benefits: [
        'Increased perceived value of your home',
        'Faster sale or rental',
        'Better property photos',
        'Stronger buyer/renter interest',
        'Higher offers and better terms',
        'Professional first impression',
      ],
    },
    {
      title: 'Custom Floor Plans & Elevations',
      icon: 'straighten',
      shortDescription:
        'Professional technical drawings and visualizations to guide renovation and design projects.',
      includes: [
        'Detailed floor plan creation',
        'Elevation drawings',
        '3D visualization renderings',
        'Material specifications',
        'Dimension accuracy and scale',
        'Before and after comparisons',
      ],
      benefits: [
        'Clear visualization of design plans',
        'Accurate measurements and proportions',
        'Professional contractor communication',
        'Reduced design mistakes',
        'Budget-conscious planning',
        'Professional presentation for loans/approvals',
      ],
    },
  ];

  servicePackages = [
    {
      name: 'Starter Package',
      description: 'Perfect for single room refreshes or quick updates',
      services: ['Paint Selection', 'Furniture Selection'],
      idealFor: 'Ideal for clients looking to refresh one or two rooms on a budget',
    },
    {
      name: 'Comprehensive Package',
      description: 'Complete design solution for multiple rooms',
      services: ['Paint Selection', 'Furniture Selection', 'Custom Floor Plans & Elevations'],
      idealFor:
        'Ideal for whole home redesigns or multi-room transformations',
    },
    {
      name: 'Full Renovation Package',
      description: 'The ultimate design solution with planning and staging',
      services: [
        'Paint Selection',
        'Furniture Selection',
        'Renovation Inspiration & Planning',
        'Custom Floor Plans & Elevations',
        'Staging',
      ],
      idealFor: 'Ideal for complete home renovations and major transformations',
    },
  ];

  processSteps = [
    {
      title: 'Schedule Consultation',
      description:
        'Contact us to discuss your project, goals, and budget. We\'ll answer any questions you have.',
    },
    {
      title: 'Initial Assessment',
      description:
        'We visit your space, take measurements, understand your vision, and assess your current layout.',
    },
    {
      title: 'Design Planning',
      description:
        'Our team develops a comprehensive design plan, mood boards, and recommendations tailored to you.',
    },
    {
      title: 'Presentation & Approval',
      description:
        'We present the design concepts and materials for your feedback and approval before proceeding.',
    },
    {
      title: 'Implementation',
      description:
        'We coordinate sourcing, ordering, delivery, and installation to bring your design to life.',
    },
  ];

  contactAboutService(serviceName: string): void {
    const encodedService = encodeURIComponent(serviceName);
    window.location.href = `/contact?service=${encodedService}`;
  }
}
