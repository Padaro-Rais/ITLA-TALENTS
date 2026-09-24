import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  values: Value[] = [
    {
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque placement, en tenant compte des besoins specifiques de chaque client.',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
    },
    {
      title: 'Integrite',
      description: 'La transparence et l\'honetete guident chacune de nos actions et decisions.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Innovation',
      description: 'Nous adoptons les dernieres technologies et methodes pour optimiser le recrutement.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Engagement',
      description: 'Nous nous engageons pleinement envers nos candidats et nos entreprises partenaires.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Respect',
      description: 'Nous respectons la diversite culturelle et les aspirations de chaque candidat.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Collaboration',
      description: 'Nous travaillons en etroite collaboration avec nos partenaires pour assurer le succes.',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    }
  ];

  milestones: Milestone[] = [
    {
      year: '2015',
      title: 'Creation de ITLA',
      description: 'Fondation de l\'entreprise avec une vision claire : connecter les talents internationaux aux entreprises europeennes.'
    },
    {
      year: '2017',
      title: 'Expansion europeenne',
      description: 'Ouverture de notre premier bureau en Allemagne et developpement de partenariats strategiques.'
    },
    {
      year: '2019',
      title: 'Diversification sectorielle',
      description: 'Extension de nos services aux secteurs de la sante, de l\'IT et de la logistique.'
    },
    {
      year: '2021',
      title: '500 candidats places',
      description: 'Celebration de notre 500eme placement reussi et lancement de notre programme de formation linguistique.'
    },
    {
      year: '2024',
      title: 'Leader du marche',
      description: 'Reconnu comme un des leaders du recrutement international en Europe avec plus de 15 pays partenaires.'
    }
  ];

  team: TeamMember[] = [
{
  name: 'Sophie Martin',
  role: 'Directrice Generale',
  image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
  bio: 'Plus de 15 ans d\'experience dans le recrutement international et les ressources humaines.'
},
    {
      name: 'Thomas Muller',
      role: 'Directeur Operations',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert en gestion de projets complexes et developpement de partenariats strategiques.'
    },
    {
      name: 'Elena Petrova',
      role: 'Responsable Recrutement',
      image: 'https://images.pexels.com/photos/7749090/pexels-photo-7749090.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Specialiste dans l\'identification et la selection des talents internationaux.'
    },
    {
      name: 'Marc Dubois',
      role: 'Directeur Development',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'En charge du developpement commercial et de l\'expansion sur nouveaux marches.'
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
