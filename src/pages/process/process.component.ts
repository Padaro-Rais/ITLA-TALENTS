import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
  details: string[];
  image: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Analyse des besoins',
      description: 'Nous debutons par une comprehension approfondie de votre entreprise, votre culture et les specifics du poste a pourvoir.',
      duration: '1-2 semaines',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      details: [
        'Entretien avec les responsables RH et operationnels',
        'Definition du profil ideal et des competences requises',
        'Analyse de la culture d\'entreprise',
        'Elaboration de la fiche de poste detaillee',
        'Validation des criteres de selection'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 2,
      title: 'Sourcing actif',
      description: 'Nous mobilisons notre reseau international et nos outils de sourcing pour identifier les meilleurs candidats.',
      duration: '2-4 semaines',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      details: [
        'Activation de notre reseau de partenaires dans 15+ pays',
        'Diffusion sur les canaux de recrutement cibles',
        'Approche directe de candidats passifs',
        'Sourcing sur les reseaux sociaux et job boards',
        'Organisation de job datings et salons virtuels'
      ],
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 3,
      title: 'Selection & entretiens',
      description: 'Processus rigoureux de screening et d\'evaluation pour ne retenir que les meilleurs profils.',
      duration: '2-3 semaines',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      details: [
        'Pre-screening telephonique',
        'Entretiens video approfondis',
        'Tests techniques et psychometriques',
        'Verification des references et diplomes',
        'Presentation des 3-5 meilleurs candidats'
      ],
      image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 4,
      title: 'Formalites & preparation',
      description: 'Nous gerons toutes les formalites administratives et preparons l\'arrivee du candidat.',
      duration: '4-8 semaines',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      details: [
        'Dossier de demande de visa',
        'Formalites consulaires',
        'Contrat de travail et documents RH',
        'Inscription securite sociale',
        'Preparation du voyage et hebergement'
      ],
      image: 'https://images.pexels.com/photo-5612408/pexels-photo-5612408.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 5,
      title: 'Arrivee & integration',
      description: 'Accueil sur place et accompagnement pour une integration reussie du candidat et de sa famille.',
      duration: '2-4 semaines',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      details: [
        'Accueil a l\'aeroport et transfert',
        'Installation dans le logement',
        'Visite de l\'entreprise et presentation equipe',
        'Inscription des enfants a l\'ecole',
        'Ouverture compte bancaire et demarches'
      ],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 6,
      title: 'Suivi post-integration',
      description: 'Un accompagnement continu pour assurer le succes a long terme de votre recrutement.',
      duration: '3-6 mois',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      details: [
        'Suivi regulier avec le candidat et l\'entreprise',
        'Resolution des eventuelles difficultes',
        'Evaluation de la satisfaction',
        'Conseils et support continu',
        'Bilan a 3 et 6 mois'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
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
