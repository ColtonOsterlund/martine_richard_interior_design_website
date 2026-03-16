import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  expertiseAreas = [
    {
      title: 'Residential Redesign & Renovation',
      description: 'Transform your home with thoughtful design that improves both aesthetics and functionality.',
    },
    {
      title: 'Color & Paint Selection',
      description: 'Expert guidance on choosing the perfect color palettes that set the mood and tone for your space.',
    },
    {
      title: 'Furniture Curation',
      description: 'Curated furniture selection that balances style, comfort, and durability within your budget.',
    },
    {
      title: 'Space Planning & Layout',
      description: 'Optimized room layouts that maximize flow and make the most of your square footage.',
    },
    {
      title: 'Custom Floor Plans & Elevations',
      description: 'Professional technical drawings and visualizations to guide your design vision.',
    },
    {
      title: 'Home Staging',
      description: 'Strategic staging services to highlight your home\'s best features for buyers or renters.',
    },
  ];

  processSteps = [
    {
      title: 'Initial Consultation',
      description:
        'We start with a detailed conversation about your goals, style preferences, and budget to understand your vision.',
    },
    {
      title: 'Space Analysis & Planning',
      description:
        'I assess your current space, take measurements, and develop a comprehensive design plan tailored to your needs.',
    },
    {
      title: 'Design Presentation',
      description:
        'Present mood boards, color schemes, and design concepts for your approval and refinement.',
    },
    {
      title: 'Implementation & Execution',
      description:
        'Source materials, coordinate purchases, and oversee the transformation of your space with attention to detail.',
    },
    {
      title: 'Final Walkthrough & Adjustments',
      description:
        'Final walkthrough to ensure everything meets your expectations, with any final adjustments made as needed.',
    },
  ];

  coreValues = [
    {
      title: 'Client-Centered Design',
      description:
        'Your needs, preferences, and vision are at the heart of every project I undertake.',
    },
    {
      title: 'Integrity & Honesty',
      description:
        'Transparent communication about timelines, budgets, and realistic expectations.',
    },
    {
      title: 'Attention to Detail',
      description:
        'Every element matters. From paint swatches to furniture arrangement, nothing is overlooked.',
    },
    {
      title: 'Creative Problem-Solving',
      description:
        'Innovative solutions to design challenges that enhance your space and exceed expectations.',
    },
  ];

  testimonials = [
    {
      name: 'Lorna P.',
      text: 'Martine has been my trusted guide for over 20 years in working through a significant kitchen renovation, offering colour recommendations/designs in several consecutive homes, window treatment advice and even providing shopping service for new furnishings and artwork. Martine has always gone above & beyond. I highly recommend her expertise!',
    },
    {
      name: 'Leanne P.',
      text: 'You are so talented Martine. Two Reno\'s with you and we love both! You nailed the refinishing on this piece! (referring to a sideboard I transformed for Leanne).',
    },
    {
      name: 'Sue H.',
      text: 'Martine has been such a treasure to us over the years; she has helped us with many home renovation projects, offering up creative ideas we wouldn\'t have thought of. She has prepared floor plans for us, shopped for our furnishings and art, and even set it all up with the final touches. We love her!',
    },
  ];
}
