import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface PortfolioProject {
  id: string;
  title: string;
  image: string;
  category: string;
  shortDescription: string;
  description: string;
  services: string[];
  highlights: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(50px)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class Portfolio {
  selectedProject: PortfolioProject | null = null;
  selectedCategory: string = 'all';

  categories = [
    'Residential Redesign',
    'Furniture Selection',
    'Paint & Color',
    'Staging',
    'Renovation',
  ];

  projects: PortfolioProject[] = [
    {
      id: '1',
      title: 'Modern Living Room Transformation',
      image: 'https://images.unsplash.com/photo-1576228541830-f54bebcaa664?w=500&q=80',
      category: 'Residential Redesign',
      shortDescription: 'Complete living room redesign with new furniture and color palette.',
      description:
        'A stunning transformation of a dated living space into a modern, welcoming room. We selected a sophisticated color palette of warm grays and gold accents, paired with contemporary furniture that maintains comfort while elevating style.',
      services: ['Furniture Selection', 'Paint Selection', 'Space Planning'],
      highlights: [
        'Custom color coordination throughout',
        'High-quality furniture selection',
        'Optimized layout for flow and function',
        'Professional lighting enhancement',
      ],
    },
    {
      id: '2',
      title: 'Elegant Master Bedroom Suite',
      image: 'https://images.unsplash.com/photo-1540932239986-7a9cd966aafa?w=500&q=80',
      category: 'Furniture Selection',
      shortDescription: 'Curated bedroom furniture creating a luxurious retreat.',
      description:
        'Designed a serene master bedroom with carefully selected pieces that blend comfort, style, and functionality. The cohesive design creates a peaceful sanctuary perfect for relaxation.',
      services: ['Furniture Selection', 'Paint Selection'],
      highlights: [
        'Coordinated bedroom suite selection',
        'Soft, soothing color palette',
        'Quality bedding and accessories',
        'Lighting design for ambiance',
      ],
    },
    {
      id: '3',
      title: 'Contemporary Kitchen Refresh',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
      category: 'Paint & Color',
      shortDescription: 'Kitchen modernization with strategic color and lighting updates.',
      description:
        'Modernized a kitchen space through careful color selection, new hardware, and lighting enhancements. The result is a bright, inviting cooking and gathering space.',
      services: ['Paint Selection', 'Color Coordination'],
      highlights: [
        'Strategic accent wall placement',
        'Color psychology applied',
        'Hardware updates for modern look',
        'Enhanced lighting design',
      ],
    },
    {
      id: '4',
      title: 'Home Staging for Sale',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80',
      category: 'Staging',
      shortDescription: 'Professional staging that helped sell property in record time.',
      description:
        'Strategic home staging that highlighted the property's best features and allowed buyers to visualize their future. The property sold significantly above the asking price.',
      services: ['Staging', 'Furniture Arrangement', 'Decor Styling'],
      highlights: [
        'Decluttering and depersonalization',
        'Furniture arrangement optimization',
        'Curb appeal enhancement',
        'Professional photography guidance',
      ],
    },
    {
      id: '5',
      title: 'Full Home Renovation',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80',
      category: 'Renovation',
      shortDescription: 'Complete home renovation with updated design throughout.',
      description:
        'A comprehensive renovation project that updated every major living space. From structural improvements to final decor, every detail was carefully planned and executed.',
      services: [
        'Renovation Planning',
        'Custom Floor Plans',
        'Furniture Selection',
        'Paint Selection',
      ],
      highlights: [
        'Detailed project planning and timeline',
        'Coordinated contractor management',
        'Design consistency throughout home',
        'Professional project completion',
      ],
    },
    {
      id: '6',
      title: 'Scandinavian Minimalist Design',
      image: 'https://images.unsplash.com/photo-1565183897294-7563f2a60be7?w=500&q=80',
      category: 'Residential Redesign',
      shortDescription: 'Minimalist design with Scandinavian style elements.',
      description:
        'Created a clean, minimalist space inspired by Scandinavian design principles. The focus on function, natural materials, and light creates a peaceful, organized living environment.',
      services: ['Design Planning', 'Furniture Selection', 'Color Coordination'],
      highlights: [
        'Minimalist aesthetic implementation',
        'Natural material selection',
        'Space optimization',
        'Light and airy atmosphere',
      ],
    },
    {
      id: '7',
      title: 'Warm Transitional Living Space',
      image: 'https://images.unsplash.com/photo-1624368513694-65afa4b0b04a?w=500&q=80',
      category: 'Paint & Color',
      shortDescription: 'Transitional design blending traditional and modern elements.',
      description:
        'A beautiful blend of traditional comfort and modern style. Warm, welcoming colors and carefully selected pieces create a sophisticated yet livable space.',
      services: ['Paint Selection', 'Furniture Selection', 'Design Coordination'],
      highlights: [
        'Warm color palette selection',
        'Traditional-modern blend',
        'Quality furniture curation',
        'Cohesive design story',
      ],
    },
    {
      id: '8',
      title: 'Professional Office Design',
      image: 'https://images.unsplash.com/photo-1593642532400-2682a8856661?w=500&q=80',
      category: 'Residential Redesign',
      shortDescription: 'Functional and beautiful home office design.',
      description:
        'Designed a productive yet aesthetically pleasing home office space. Combines ergonomic furniture with beautiful design for an inspiring work environment.',
      services: ['Space Planning', 'Furniture Selection', 'Lighting Design'],
      highlights: [
        'Ergonomic furniture selection',
        'Functional storage solutions',
        'Professional ambiance',
        'Productivity-focused layout',
      ],
    },
  ];

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === this.selectedCategory);
  }

  stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years of Experience' },
    { number: '30+', label: 'Happy Clients' },
  ];

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  openProject(project: PortfolioProject): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }
}
