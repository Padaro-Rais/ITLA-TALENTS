import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationService } from '../../shared/services/animation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  subjects: string[] = [
    'Demande d\'information',
    'Recrutement d\'un candidat',
    'Partenariat entreprise',
    'Partenariat ecole/formation',
    'Candidature spontanee',
    'Autre'
  ];

  contactInfo = {
    address: '123 Avenue de l\'Europe, 75008 Paris, France',
    phone: '+33 1 23 45 67 89',
    email: 'contact@ITLA-talent.com',
    hours: 'Lundi - Vendredi: 9h00 - 18h00'
  };

  faqs: { question: string; answer: string; isOpen: boolean }[] = [
    {
      question: 'Combien de temps prend un recrutement ?',
      answer: 'En moyenne, notre processus de recrutement international prend entre 45 et 90 jours, selon la complexite du profil recherche et les formalites administratives necessaires.',
      isOpen: false
    },
    {
      question: 'Quels sont les pays sources de vos candidats ?',
      answer: 'Nous travaillons principalement avec des candidats d\'Europe de l\'Est (Roumanie, Pologne, Bulgarie, Ukraine), d\'Afrique du Nord et d\'Asie, selon les besoins specifiques.',
      isOpen: false
    },
    {
      question: 'Proposez-vous des formations linguistiques ?',
      answer: 'Oui, nous proposons des formations linguistiques integrees pour nos candidats, notamment en francais et en allemand, dispensees par des partenaires certifies.',
      isOpen: false
    },
    {
      question: 'Comment se passe l\'accompagnement post-arrivee ?',
      answer: 'Nous assurons un suivi de 3 a 6 mois apres l\'arrivee du candidat, incluant des points reguliers, un support administratif et une mediation en cas de besoin.',
      isOpen: false
    },
    {
      question: 'Quelles sont vos garanties ?',
      answer: 'Nous offrons une garantie satisfaction. Si le candidat ne convient pas pendant la periode d\'essai, nous vous proposons un remplacement sans frais supplementaires.',
      isOpen: false
    }
  ];

  formSubmitted = false;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animateElements.forEach((el, index) => {
      this.animationService.observeElement(el, 'animate-fade-in-up', {
        delay: `${index * 0.1}s`
      });
    });
  }

  onSubmit(): void {
    if (this.contactForm.firstName && this.contactForm.email && this.contactForm.message) {
      console.log('Form submitted:', this.contactForm);
      this.formSubmitted = true;
      // Reset form
      this.contactForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    }
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
