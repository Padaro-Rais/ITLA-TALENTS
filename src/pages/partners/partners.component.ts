import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';

interface Partner {
  name: string;
  logo: string;
  type: 'enterprise' | 'school' | 'training' | 'agency';
  country: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  enterprisePartners: Partner[] = [
    { name: 'Tech Industrie GmbH', logo: 'https://via.placeholder.com/180x80?text=Tech+Industrie', type: 'enterprise', country: 'Allemagne' },
    { name: 'HealthCare Plus', logo: 'https://via.placeholder.com/180x80?text=HealthCare+', type: 'enterprise', country: 'France' },
    { name: 'Logistics Europe', logo: 'https://via.placeholder.com/180x80?text=Logistics+EU', type: 'enterprise', country: 'Pays-Bas' },
    { name: 'AutoParts International', logo: 'https://via.placeholder.com/180x80?text=AutoParts', type: 'enterprise', country: 'Allemagne' },
    { name: 'BuildCorp', logo: 'https://via.placeholder.com/180x80?text=BuildCorp', type: 'enterprise', country: 'Autriche' },
    { name: 'FoodIndustry AG', logo: 'https://via.placeholder.com/180x80?text=FoodIndustry', type: 'enterprise', country: 'Suisse' }
  ];

  schoolPartners: Partner[] = [
    { name: 'Ecole Polytechnique de Bucarest', logo: 'https://via.placeholder.com/180x80?text=Poly+Bucarest', type: 'school', country: 'Roumanie' },
    { name: 'Universite de Varsovie', logo: 'https://via.placeholder.com/180x80?text=Univ+Varsovie', type: 'school', country: 'Pologne' },
    { name: 'Institut Medical de Sofia', logo: 'https://via.placeholder.com/180x80?text=Med+Sofia', type: 'school', country: 'Bulgarie' },
    { name: 'Ecole d\'Ingenieurs de Kiev', logo: 'https://via.placeholder.com/180x80?text=Ing+Kiev', type: 'school', country: 'Ukraine' },
    { name: 'Universite Technique de Prague', logo: 'https://via.placeholder.com/180x80?text=Tech+Prague', type: 'school', country: 'Republique Tcheque' }
  ];

  trainingPartners: Partner[] = [
    { name: 'Centre Formation Professionnelle', logo: 'https://via.placeholder.com/180x80?text=CFP+EU', type: 'training', country: 'France' },
    { name: 'Language Academy', logo: 'https://via.placeholder.com/180x80?text=Lang+Academy', type: 'training', country: 'Allemagne' },
    { name: 'Skills Development Center', logo: 'https://via.placeholder.com/180x80?text=Skills+DC', type: 'training', country: 'Pays-Bas' },
    { name: 'IntegPro', logo: 'https://via.placeholder.com/180x80?text=IntegPro', type: 'training', country: 'Autriche' }
  ];

  countries = [
    { name: 'France', flag: '🇫🇷', count: 25 },
    { name: 'Allemagne', flag: '🇩🇪', count: 30 },
    { name: 'Pologne', flag: '🇵🇱', count: 15 },
    { name: 'Belgique', flag: '🇧🇪', count: 20 },
    { name: 'Pays-Bas', flag: '🇳🇱', count: 18 },
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
