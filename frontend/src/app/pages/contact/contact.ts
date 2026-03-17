import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';



  faqs = [
    {
      question: 'How long does a typical design project take?',
      answer:
        'Most projects take between 4-12 weeks, depending on scope. A simple room refresh might take 4-6 weeks, while a full home renovation can take 12 weeks or more. We\'ll provide a detailed timeline during your initial consultation.',
    },
    {
      question: 'Do you offer virtual consultations?',
      answer:
        'Yes! We offer both in-person and virtual consultations. Virtual consultations are perfect for getting started, sharing ideas, and discussing your vision. We can also use video calls for design presentations and updates.',
    },
    {
      question: 'What if I have a limited budget?',
      answer:
        'Every budget is workable! We specialize in creating beautiful designs within your financial parameters. During our consultation, we\'ll discuss your budget and develop a design plan that maximizes value.',
    },
    {
      question: 'Can you work with my existing furniture?',
      answer:
        'Absolutely! We can work with pieces you already love and integrate them into your new design. We\'ll assess what works and suggest complementary additions that tie everything together.',
    },
    {
      question: 'Do you handle all the purchasing and installation?',
      answer:
        'Yes, we can handle all aspects including sourcing, purchasing, delivery coordination, and installation oversight. Or we can provide recommendations and let you handle the purchases yourself - it\'s your choice!',
    },
    {
      question: 'How do you charge for your services?',
      answer:
        'We offer various pricing structures including hourly consultation fees, flat project fees, or a percentage of total design investments. We\'ll discuss what works best for your project during your consultation.',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    // Reset status on component init
    this.submitStatus = 'idle';
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[\d\s\-\(\)\+]*$/)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    });
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const formData = this.contactForm.value;

    // Send to backend API
    this.sendEmail(formData);
  }

  private sendEmail(formData: any): void {
    const isDevelopment = window.location.hostname === 'localhost';
    const backendUrl = isDevelopment 
      ? 'http://localhost:3000/api/contact'
      : `${window.location.origin}/api/contact`;

    this.http.post(backendUrl, formData).subscribe({
      next: (response: any) => {
        this.submitStatus = 'success';
        this.isSubmitting = false;

        // Reset form after success
        setTimeout(() => {
          this.contactForm.reset();
          this.submitStatus = 'idle';
        }, 3000);
      },
      error: (error: any) => {
        console.error('Error sending email:', error);
        this.submitStatus = 'error';
        this.errorMessage = error.error?.message || 'Failed to send message. Please try again.';
        this.isSubmitting = false;
      },
    });
  }
}
