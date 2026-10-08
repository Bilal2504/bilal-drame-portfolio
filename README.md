# Portfolio — Bilal Dramé

Portfolio React en français, construit avec Vite. La page présente le profil, les compétences, le parcours, un premier projet data et quelques projets web.

## Démarrer en local

Installe Node.js 20.19 ou plus récent, puis lance dans ce dossier :

    npm install
    npm run dev

Pour produire les fichiers statiques :

    npm run build

Le site généré se trouve dans `dist/`. `npm run preview` permet de voir localement cette version de production.

## Publication avec GitHub Pages

Le dépôt contient déjà un workflow GitHub Actions. Il construit le site puis publie automatiquement `dist/` après chaque push sur `main`.

1. Place le contenu de ce dossier à la racine d’un dépôt GitHub.
2. Dans **Settings → Pages**, choisis **GitHub Actions** comme source de publication.
3. Envoie les changements sur la branche `main` et suis le déploiement dans l’onglet **Actions**.

Le chemin de base s’adapte au nom du dépôt. Pour un dépôt nommé `Bilal2504.github.io`, le site sera publié à la racine du domaine GitHub Pages.

Le site peut aussi être publié sur Netlify ou Vercel avec la commande `npm run build` et le dossier de sortie `dist`.

## Mettre à jour le contenu

Les projets, expériences et compétences sont définis dans `src/App.jsx`. Les couleurs, espacements et règles responsive sont dans `src/styles.css`. Le visuel du projet Power BI est chargé depuis le dépôt GitHub du projet.

Pour ajouter un projet data plus tard, ajoute une entrée dans le tableau `projects` avec son titre, son résumé, les outils et le lien vers son dépôt ou sa démonstration.

## À compléter ensemble

- Ajouter les prochains projets data à mesure qu’ils sont prêts.
- Remplacer ou enrichir les visuels de démonstration web avec des captures réelles.
- Mettre à jour les informations du CV si le parcours a évolué.
