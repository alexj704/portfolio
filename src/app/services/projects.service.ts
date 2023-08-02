import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      title: 'Booki',
      descriptionText:
        "Intégration de la page d'accueil d'un site de recherche d'appartements à Marseille en HTML et CSS",
      descriptionList: [
        'Utilisation des balises sémantiques pour le HTML',
        `Utilisation de flex pour la partie "Hébergements à Marseille"`,
        `Utilisation de grid pour les parties "Les plus populaires" et "Activités à Marseille"`,
        `Utilisation des medias queries pour rendre le site réactif.`,
      ],
      imageUrl: '/assets/img/preview/booki-preview.webp',
      repoLink: 'https://github.com/alexj704/booki',
      demoLink: 'https://alexj704.github.io/booki/',
    },
    {
      id: 1,
      title: 'OhMyFood',
      descriptionText:
        "Développement d'un site qui répertorie les menus de 4 restaurants gastronomiques.",
      descriptionList: [
        'Utilisation de Sass et du modèle 7-1',
        'Utilisation des mixins et des variables Sass',
        "Création de plusieurs animations CSS notamment un loader qui se déclenche au chargement de la page d'accueil",
        'Site développé en mobile-first.',
      ],
      imageUrl: '/assets/img/preview/ohmyfood-preview.webp',
      repoLink: 'https://github.com/alexj704/ohmyfood',
      demoLink: 'https://alexj704.github.io/ohmyfood/',
    },
    {
      id: 2,
      title: 'Agence La Panthère',
      descriptionText: "Amélioration du site d'une agence web.",
      descriptionList: [
        "Analyse de l'état du SEO et de l'accessibilité",
        "Amélioration du SEO notamment par la suppression de l'annuaire de liens en bas de page, la suppression de keywords caché et la correction de certaine balises HTML",
        "Amélioration de l'accessibilité notamment par la correction des problèmes de contraste et la suppression de textes dans les images",
      ],
      imageUrl: '/assets/img/preview/panthere-preview.webp',
      repoLink: 'https://github.com/alexj704/panthere-final',
      demoLink: 'https://alexj704.github.io/panthere-final/',
    },
    {
      id: 3,
      title: 'Kanap',
      descriptionText:
        "Implémentation de la partie JavaScript d'un site d'achat de fauteuils",
      descriptionList: [
        'Utilisation de fetch et des promesses JavaScript pour récupérer les informations des fauteuils depuis une API',
        'Utilisation des fonctions JavaScript notamment pour le calcul du total du panier',
        'Utilisation du localStorage pour gérer le panier',
        'Utilisation des regex pour la validation du formulaire',
      ],
      imageUrl: '/assets/img/preview/kanap-preview.webp',
      repoLink: 'https://github.com/alexj704/kanap',
      demoLink: 'https://kanap.netlify.app/',
    },
    {
      id: 4,
      title: 'Piiquante',
      descriptionText:
        "Création d'un API Rest pour un site de notation de sauces piquantes",
      descriptionList: [
        "Utilisation du framework Express gérer le serveur de l'API",
        'Utilisation de MongoDB pour gérer la base de données',
        'Utilisation de bcrypt pour hasher les mots de passe dans la base de données',
        'Utilisation de dotenv pour la connexion à la base de données',
        'Utilisation de helmet pour la sécurité',
      ],
      imageUrl: '/assets/img/preview/piiquante-preview.webp',
      repoLink: 'https://github.com/alexj704/Piiquante-backend',
    },
    {
      id: 5,
      title: 'Kasa',
      descriptionText:
        "Création d'une application web complète de location d'appartements avec React.Js.",
      descriptionList: [
        "Utilisation de ReactRouterDOM pour gérer les routes de l'application",
        'Utilisation des states et des props',
        'Utilisation de composants réutilisables',
      ],
      imageUrl: '/assets/img/preview/kasa-preview.webp',
      repoLink: 'https://github.com/alexj704/kasa',
      demoLink: 'https://kasa-pi.vercel.app/',
    },
  ];

  getAllProjects(): Project[] {
    return this.projects;
  }
}
