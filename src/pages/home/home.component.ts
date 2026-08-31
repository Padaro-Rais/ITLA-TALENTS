import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';

interface Statistic {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface Sector {
  title: string;
  positions: number;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;
  @ViewChildren('statValue') statElements!: QueryList<ElementRef>;
  @ViewChild('heroImage') heroImage!: ElementRef;

  statistics: Statistic[] = [
    { value: 500, suffix: '+', label: 'Candidats places', icon: '👥' },
    { value: 50, suffix: '+', label: 'Entreprises partenaires', icon: '🏢' },
    { value: 15, suffix: '+', label: 'Pays couverts', icon: '🌍' },
    { value: 98, suffix: '%', label: 'Satisfaction client', icon: '⭐' }
  ];

  services: Service[] = [
    {
      title: 'Recrutement international',
      description: 'Identification et selection des meilleurs talents a l\'international',
      icon: 'search',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Accompagnement RH',
      description: 'Support complet pour l\'integration de vos nouvelles recrues',
      icon: 'support',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Formation linguistique',
      description: 'Cours de langue adaptes pour une integration reussie',
      icon: 'language',
      image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Integration complete',
      description: 'Accompagnement administratif et logement sur place',
      icon: 'home',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  sectors: Sector[] = [
    { title: 'Industrie & Production', positions: 120, image: 'https://images.pexels.com/photos/216146/pexels-photo-216146.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Sante & Medical', positions: 85, image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Logistique & Transport', positions: 65, image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'IT & Digital', positions: 90, image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Marie Dupont',
      role: 'DRH',
      company: 'Tech Industrie GmbH',
      image: 'https://images.pexels.com/photos/3764359/pexels-photo-3764359.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'ITLA nous a permis de recruter 15 techniciens qualifies en moins de 3 mois. Un partenariat exceptionnel!',
      rating: 5
    },
    {
      name: 'Klaus Weber',
      role: 'Directeur Operations',
      company: 'Logistics Europe',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Le suivi personnalise et le professionnalisme de l\'equipe ont fait toute la difference.',
      rating: 5
    },
    {
      name: 'Sophie Martin',
      role: 'Responsable Recrutement',
      company: 'HealthCare Plus',
      image: 'https://images.pexels.com/photos/7749090/pexels-photo-7749090.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Grace a ITLA, nous avons trouve des infirmieres formees et motivees en provenance d\'Europe de l\'Est.',
      rating: 5
    }
  ];

  whyChooseUs = [
    { title: 'Expertise internationale', description: '10+ ans d\'experience dans le recrutement transfrontalier', icon: 'globe' },
    { title: 'Process sur mesure', description: 'Methodologie adaptee a vos besoins specifiques', icon: 'settings' },
    { title: 'Accompagnement complet', description: 'De la selection a l\'integration sur site', icon: 'support' },
    { title: 'Reseau etendu', description: 'Partenaires dans plus de 15 pays', icon: 'network' }
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    // Animate statistics counters
    this.statElements.forEach((el, index) => {
      const stat = this.statistics[index];
      setTimeout(() => {
        this.animationService.animateCounterWithSuffix(el, stat.value, stat.suffix, 2000);
      }, index * 200);
    });

    // Animate scroll elements
    this.animateElements.forEach((el, index) => {
      this.animationService.observeElement(el, 'animate-fade-in-up', {
        delay: `${index * 0.1}s`
      });
    });
  }

  getIcon(name: string): string {
    const icons: { [key: string]: string } = {
      search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      support: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      language: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
      home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      globe: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      network: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    };
    return icons[name] || '';
  }
}
