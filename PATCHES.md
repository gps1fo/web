# Registre des patchs Zone A

Un patch = une modification d'un fichier amont. Chaque patch doit pouvoir répondre à la
question : **« comment le supprimer un jour ? »**

Revue trimestrielle obligatoire. Indicateur de santé : le nombre de patchs supprimés par
trimestre doit être ≥ au nombre de patchs ajoutés.

| ID | Motif | Fichiers amont touchés | Remplaçable par un point d'extension ? | Proposable en PR amont ? | Ajouté le |
|----|-------|------------------------|----------------------------------------|--------------------------|-----------|
| P-001 | La marque « Traccar » apparaissait dans une chaîne affichée au client (`notificatorTraccar` en russe). Seule occurrence sur 61 langues | `src/resources/l10n/ru.json` (1 ligne) | Non : l'amont livre ses propres traductions | Non : l'amont n'a aucune raison de retirer sa marque | 2026-09-20 |
| P-002 | Rien dans la carte ne menait à la console (Zone C). Point d'ancrage du menu : `import` + `<Gps1foMenu />`, tout le reste dans `src/gps1fo/` (ajouté, hors budget). Les liens paramétrables de l'amont (`billingLink`, `support`) passent par le `Link` react-router et restent dans la SPA : écran vide | `src/settings/components/SettingsMenu.jsx` (2 lignes) | C'est LUI, le point d'extension (ADR-0011) : toute entrée future s'ajoute dans `src/gps1fo/` sans nouveau patch | Non : spécifique à notre produit | 2026-09-25 |
