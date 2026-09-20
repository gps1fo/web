# Registre des patchs Zone A

Un patch = une modification d'un fichier amont. Chaque patch doit pouvoir répondre à la
question : **« comment le supprimer un jour ? »**

Revue trimestrielle obligatoire. Indicateur de santé : le nombre de patchs supprimés par
trimestre doit être ≥ au nombre de patchs ajoutés.

| ID | Motif | Fichiers amont touchés | Remplaçable par un point d'extension ? | Proposable en PR amont ? | Ajouté le |
|----|-------|------------------------|----------------------------------------|--------------------------|-----------|
| P-001 | La marque « Traccar » apparaissait dans une chaîne affichée au client (`notificatorTraccar` en russe). Seule occurrence sur 61 langues | `src/resources/l10n/ru.json` (1 ligne) | Non : l'amont livre ses propres traductions | Non : l'amont n'a aucune raison de retirer sa marque | 2026-09-20 |
