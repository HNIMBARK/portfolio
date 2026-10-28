# Vérification de livraison

Contrôles effectués le 28 octobre 2026 avec Microsoft Edge piloté par Playwright,
sur le serveur Vite et sur le build statique de production.

- Compilation TypeScript et Vite : réussie.
- Largeurs 320, 390, 768, 1024 et 1440 px : largeur du document égale à celle
  de la fenêtre, sans débordement horizontal.
- Lien d’évitement au clavier : opérationnel.
- Étapes interactives de l’accueil : sélection et description cohérentes.
- Dialogues Sales Pipeline et Randoneo : ouverture modale, focus conservé
  dans le dialogue, fermeture avec Échap et retour au bouton d’ouverture.
- Menu mobile : ouverture, navigation et fermeture avec Échap.
- Thème sombre : choix conservé après rechargement.
- Email : copie confirmée par lecture du presse-papiers du navigateur.
- CV : téléchargement effectif ; fichier servi identique octet par octet
  au fichier intégré.
- Ancres : toutes les cibles existent ; aucun lien vide.
- Ressources du build, PDF, image Open Graph, favicon, robots et sitemap :
  réponses HTTP 200.
- Aucune erreur JavaScript, erreur console ou ressource manquante pendant
  les scénarios exécutés.

La publication GitHub Pages n’a pas été déclenchée.
Le workflow fourni s’exécute uniquement sur demande manuelle.

Aperçus : [ordinateur](preview-desktop.png) · [mobile](preview-mobile.png).
