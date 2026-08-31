import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  services: Service[] = [
    {
      id: 'recruitment',
      title: 'Recrutement international',
      description: 'Nous identifions et selectionnons les meilleurs talents a l\'international pour repondre a vos besoins specifiques. Notre reseau etendu nous permet d\'acceder a un vivier de candidats qualifies dans plus de 15 pays.',
      features: [
        'Analyse detaillee de vos besoins',
        'Sourcing multi-canaux',
        'Selection rigoureuse des candidats',
        'Entretiens approfondis',
        'Verfication des references',
        'Presentation des meilleurs profils'
      ],
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'hr-support',
      title: 'Accompagnement RH',
      description: 'Un support RH complet pour faciliter l\'integration de vos nouvelles recrues. Nous vous accompagnons dans toutes les etapes administratives et humaines du processus d\'embauche.',
      features: [
        'Formalites administratives',
        'Contrats de travail',
        'Dossiers visa et sejour',
        'Medecine du travail',
        'Assurance sociale',
        'Accompagnement RH personalise'
      ],
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'language',
      title: 'Formation linguistique',
      description: 'Des cours de langue adaptes pour garantir une communication efficace sur le lieu de travail. Nos programmes sont concus pour faciliter l\'integration professionnelle des candidats.',
      features: [
        'Cours de francais/allemand',
        'Formation professionelle',
        'Prise en charge financiere',
        'Certifications linguistiques',
        'Cours intensifs ou extensifs',
        'Support pedagogique personnalise'
      ],
      icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
      image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'integration',
      title: 'Integration complete',
      description: 'Un accompagnement total pour l\'arrivee et l\'installation du candidat et de sa famille. Nous nous assurons que tout est pret pour un demarrage serenite.',
      features: [
        'Recherche de logement',
        'Inscription enfants ecole',
        'Ouverture compte bancaire',
        'Accueil a l\'aeroport',
        'Visite de la ville',
        'Support continu post-arrivee'
      ],
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'mobility',
      title: 'Mobilité internationale',
      description: 'Nous gerons tous les aspects logistiques pour faciliter la mobilite de vos futurs collaborateurs. Transport, demenagement, formalites - tout est pris en charge.',
      features: [
        'Organisation du transport',
        'Demenagement',
        'Formalites consulaires',
        'Assurance voyage',
        'Aide au changement',
        'Suivi post-installation'
      ],
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      image: 'https://images.pexels.com/photos/46148/airplane-taking-off-sky-flight-clouds-46148.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'training',
      title: 'Formation professionnelle',
      description: 'Des programmes de formation adaptes pour mise a niveau des competences techniques. Nous assurons que vos recrues sont operationnelles des leur arrivee.',
      features: [
        'Evaluation des competences',
        'Formation technique',
        'Mise a niveau',
        'Certifications metiers',
        'Formation sur mesure',
        'Suivi des progres'
      ],
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      image: 'https://images.pexels.com/photos/258075/pexels-photo-258075.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animateElements.forEach((el, index) => {
      this.animationService.observeElement(el, 'animate-fade-in-up', {
        delay: `${index * 0.15}s`
      });
    });
  }
}
