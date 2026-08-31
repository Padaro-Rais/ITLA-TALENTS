import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  newsletterEmail: string = '';
  currentYear: number = new Date().getFullYear();

  quickLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'A propos', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Secteurs', path: '/sectors' },
    { label: 'Processus', path: '/process' }
  ];

  serviceLinks = [
    { label: 'Recrutement international', path: '/services' },
    { label: 'Accompagnement RH', path: '/services' },
    { label: 'Formation linguistique', path: '/services' },
    { label: 'Intégration', path: '/services' },
    { label: 'Mobilité internationale', path: '/services' }
  ];

  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' }
  ];

  onSubmitNewsletter(): void {
    if (this.newsletterEmail) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      this.newsletterEmail = '';
      // TODO: Implement newsletter subscription
    }
  }
}
