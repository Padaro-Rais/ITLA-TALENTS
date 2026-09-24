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
      description: 'Accédez à des professionnels qualifiés, formés et préparés aux exigences du marché allemand. ITLA Talent Solutions identifie des profils adaptés à vos besoins, à votre culture et à vos ambitions. Issus d\’ITLA\-Academy, nos candidats bénéficient d\’une préparation linguistique, professionnelle et interculturelle pour faciliter leur prise de poste et leur intégration. ',
      features: [
        'Analyse précise de vos besoins en recrutement',
        'Accès à des talents formés et accompagnés par ITLA\-Academy',
        'Présélection rigoureuse selon vos critères',
        'Évaluation des compétences linguistiques et professionnelles',
        'Entretiens approfondis et vérification des références',
        'Presentation des meilleurs profils',
        'Accompagnement jusqu\’à l\’intégration dans votre entreprise'
      ],
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'hr-support',
      title: 'Accompagnement RH',
      description: 'Recruter un talent international ne s\’arrête pas à la signature du contrat. ITLA Talent Solutions vous accompagne dans les démarches essentielles afin de faciliter l’arrivée, la prise de poste et l’intégration durable de vos nouvelles recrues.',
      features: [
        'Assistance dans les formalités administratives',
        'Appui à la préparation des contrats de travail',
        'Accompagnement des dossiers de visa et de séjour',
        'Orientation vers les démarches de médecine du travail',
        'Information sur les dispositifs de protection et d\’assurance sociale',
        'Suivi RH personnalisé avant et après l\’arrivée du candidat'
      ],
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'language',
      title: 'Formation linguistique',
      description: 'Une bonne maîtrise de la langue facilite la communication, la prise de poste et l’intégration au sein d’une équipe. ITLA Academy prépare les candidats à évoluer avec confiance dans leur environnement professionnel grâce à des formations adaptées à leur niveau et à leur projet.',
      features: [
        'Cours d\'allemand',
        'Parcours linguistiques adaptés aux objectifs professionnels',
        'Formules intensives ou extensives',
        'Préparation aux certifications linguistiques',
        'Supports pédagogiques et suivi personnalisé',
        'Solutions de financement selon les programmes et les conditions applicables',
      ],
      icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
      image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'integration',
      title: 'Une intégration réussie, dès l\’arrivée',
      description: 'L\’intégration d\’un collaborateur international est essentielle à la réussite de son recrutement. ITLA Talent Solutions accompagne le candidat afin de faciliter son installation et lui permettre de se concentrer sereinement sur sa prise de poste.',
      features: [
        'Accompagnement dans la recherche de logement',
        'Orientation pour l\’inscription des enfants à l\’école',
        'Assistance dans les démarches d\’ouverture de compte bancaire',
        'Accueil et orientation à l\’arrivée',
        'Découverte de la ville et des repères essentiels',
        'Suivi personnalisé après l\’installation'
      ],
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'mobility',
      title: 'Mobilité internationale',
      description: 'Nous facilitons la mobilité de vos futurs collaborateurs en coordonnant les principales étapes de leur arrivée. Notre accompagnement réduit les contraintes logistiques et administratives afin de leur permettre de rejoindre votre entreprise dans les meilleures conditions.',
      features: [
        'Coordination du voyage et de l’arrivée',
        'Orientation pour organiser le déménagement',
        'Accompagnement dans les formalités consulaires et administratives',
        'Information sur les solutions d’assurance voyage',
        'Conseils personnalisés pour préparer le départ',
        'Suivi après l’installation et la prise de poste'
      ],
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      image: 'https://images.pexels.com/photos/46148/airplane-taking-off-sky-flight-clouds-46148.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'training',
      title: 'Formation professionnelle',
      description: 'Nous préparons les talents à répondre aux exigences concrètes de votre secteur et de votre entreprise. Grâce à des parcours ciblés, vos futures recrues renforcent leurs compétences avant leur prise de poste et arrivent mieux préparées à contribuer à vos objectifs.',
      features: [
        'Évaluation des compétences et des besoins de préparation',
        'Mise à niveau technique selon le métier visé',
        'Renforcement des compétences professionnelles',
        'Préparation aux certifications utiles au poste',
        'Parcours de formation adaptés à vos besoins',
        'Suivi des progrès avant l’intégration'
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
