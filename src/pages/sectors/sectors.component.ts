import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../shared/services/animation.service';

interface Sector {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  positions: number;
  color: string;
  jobs: string[];
}

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements AfterViewInit {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  sectors: Sector[] = [
    {
      id: 'industry',
      title: 'Industrie & Production',
      description: 'Operateurs, techniciens, ingenieurs et responsables de production pour le secteur industriel. Nous trouvons les profils adaptes a vos installations de production.',
      icon: 'industry',
      image: 'https://images.pexels.com/photos/216146/pexels-photo-216146.jpeg?auto=compress&cs=tinysrgb&w=800',
      positions: 120,
      color: '#C41E3A',
      jobs: ['Operateur de production', 'Technicien de maintenance', 'Ingenieur process', 'Responsable production', 'Chef d\'equipe']
    },
    {
      id: 'health',
      title: 'Sante & Medical',
      description: 'Professionnels de sante qualifies : infirmiers, aides-soignants, medecins et techniciens medicaux pour les etablissements de sante.',
      icon: 'health',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      positions: 85,
      color: '#2E8B57',
      jobs: ['Infirmier(ere)', 'Aide-soignant(e)', 'Medecin', 'Technicien Medical', 'Psychologue']
    },
    {
      id: 'logistics',
      title: 'Logistique & Transport',
      description: 'Chauffeurs, gestionnaires de stocks, preparateurs de commandes et responsables logistiques pour optimiser votre chaine d\'approvisionnement.',
      icon: 'logistics',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
      positions: 65,
      color: '#F4B942',
      jobs: ['Chauffeur PL', 'Cariste', 'Preparateur de commandes', 'Gestionnaire de stocks', 'Responsable logistique']
    },
    {
      id: 'it',
      title: 'IT & Digital',
      description: 'Developpeurs, experts en cybertecurite, data analysts et chefs de projet IT pour accompagner votre transformation digitale.',
      icon: 'it',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      positions: 90,
      color: '#6366F1',
      jobs: ['Developpeur Full Stack', 'Data Engineer', 'DevOps Engineer', 'Product Owner', 'Chef de projet IT']
    },
    {
      id: 'construction',
      title: 'BTP & Construction',
      description: 'Macons, electriciens, plombiers, chefs de chantier et ingenieurs genie civil pour tous vos projets de construction.',
      icon: 'construction',
      image: 'https://images.pexels.com/photos/276024/pexels-photo-276024.jpeg?auto=compress&cs=tinysrgb&w=800',
      positions: 75,
      color: '#8B4513',
      jobs: ['Macon', 'Electricien', 'Plombier', 'Chef de chantier', 'Ingenieur BTP']
    },
    {
      id: 'hospitality',
      title: 'Hotellerie & Restauration',
      description: 'Cuisiniers, serveurs, gestionnaires et responsables d\'etablissement pour le secteur de l\'hotellerie et de la restauration.',
      icon: 'hospitality',
      image: 'https://images.pexels.com/photos/260778/pexels-photo-260778.jpeg?auto=compress&cs=tinysrgb&w=800',
      positions: 55,
      color: '#D4AF37',
      jobs: ['Cuisinier', 'Serveur', 'Receptionniste', 'Directeur hotel', 'Chef de rang']
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
