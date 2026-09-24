import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';

interface Benefit {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Advantage {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  benefits: Benefit[] = [
    {
      title: 'Expertise internationale',
      description: 'Plus de 10 ans d’expérience en recrutement transfrontalier pour identifier des profils qualifiés, adaptés aux besoins des entreprises européennes..',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      color: '#C41E3A'
    },
    {
      title: 'Un reseau international solide',
      description: 'Un réseau de partenaires dans plus de 15 pays pour accéder rapidement à des talents qualifiés et assurer leur préparation.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      color: '#2E8B57'
    },
    {
      title: 'Un accompagnement de bout en bout',
      description: 'De la sélection à l\’intégration, nous assurons un suivi personnalisé pour faciliter chaque étape du recrutement international.',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      color: '#F4B942'
    },
    {
      title: 'Delais maitrises',
      description: 'Processus optimise permettant de trouvers le candidat ideal en moins de 45 jours.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      color: '#6366F1'
    },
    {
      title: 'Support linguistique',
      description: 'Grâce à ITLA Academy, nos candidats bénéficient d’une préparation linguistique adaptée au monde professionnel en Allemagne.',
      icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
      color: '#D4AF37'
    },
    {
      title: 'Garantie qualite',
      description: 'Avec 98 % de satisfaction, nous misons sur une sélection rigoureuse et un suivi continu pour favoriser des collaborations durables.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: '#20B2AA'
    }
  ];

  advantages: Advantage[] = [
    {
      title: 'Gain de temps',
      description: 'Nous nous occupons de tout le processus de recrutement, vous permettant de vous concentrer sur votre coeur de metier.',
      stat: '70%',
      statLabel: 'de temps gagne'
    },
    {
      title: 'Reduction des coud',
      description: 'Un recrutement reussi du premier coup evite les couts lies aux erreurs de casting et au turnover.',
      stat: '40%',
      statLabel: 'd\'economies en moyenne'
    },
    {
      title: 'Acces aux talents',
      description: 'Notre reseau international vous ouvre les portes d\'un vivier de candidats inaccessible autrement.',
      stat: '10x',
      statLabel: 'plus de candidats'
    },
    {
      title: 'Integration reussie',
      description: 'Notre accompagnement assure une integration durable et une retention optimale des candidats.',
      stat: '95%',
      statLabel: 'de retention a 1 an'
    }
  ];

  testimonials = [
    {
      name: 'Marie Dupont',
      role: 'DRH',
      company: 'Tech Industrie GmbH',
      content: 'ITLA a transforme notre facon de recruter. En moins de 2 mois, nous avons integre 5 techniciens qualifies.',
      image: 'https://images.pexels.com/photos/3764359/pexels-photo-3764359.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Klaus Weber',
      role: 'Directeur Operations',
      company: 'Logistics Europe',
      content: 'Le professionnalisme et le suivi de l\'equipe ITLA sont exceptionnels. Un vrai partenaire de confiance.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animateElements.forEach((el, index) => {
      this.animationService.observeElement(el, 'animate-fade-in-up', {
        delay: `${index * 0.1}s`
      });
    });
  }
}
