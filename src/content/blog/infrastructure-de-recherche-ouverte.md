---
title: "Une infrastructure de recherche ouverte : architecture et principes"
description: "Le dispositif de recherche repose sur six dépôts publics modulaires, conçus pour permettre l'itération DBR, la reproductibilité et la science ouverte. Cet article en décrit l'architecture."
pubDate: 2026-05-04
author: "A. Elbah"
keywords: "infrastructure de recherche, science ouverte, GitHub, Zenodo, DOI, reproductibilité, modularité, DBR, BDI, Living Lab"
niveau: "expert"
---

# Une infrastructure de recherche ouverte : architecture et principes

## Une infrastructure, pas un produit

Une question revient souvent :  
**« Quel est votre produit ? »**  
Mais cette question repose sur un malentendu :  
Ce dispositif n’est ni un logiciel commercial ni un service payant.  
C’est une **infrastructure de recherche**.  

Comme un laboratoire avec ses équipements (lasers, microscopes, séquenceurs), cette infrastructure utilise des dépôts GitHub, scripts Python, configurations Docker, et schémas d’architecture pour rendre la recherche possible.  
Elle n’est pas l’objet de la recherche, mais le support qui permet de la réaliser.

## Ce que fait cette infrastructure

C'est l'équivalent, pour une recherche en technologie éducative, de ce que 
représente un banc d'essai pour un laboratoire de physique : 
**l'ensemble des instruments qui rendent l'investigation possible**.

Il se compose de six dépôts publics, chacun remplissant une fonction 
dans la chaîne qui va de la captation des données brutes à la 
théorisation :

| Dépôt | Fonction | Contenu | Niveau dans la chaîne |
|-------|----------|---------|----------------------|
| **living-lab-sensors** | Captation | Code ESP32, capteurs IoT, protocole MQTT | 1 — Données brutes |
| **BDI-prototype** | Traitement | Scripts Python de collecte, normalisation, simulation | 2 — Données normalisées |
| **obstacle-detection** | Analyse | Algorithmes de détection des obstacles cognitifs | 3 — Patterns détectés |
| **dashboard** | Visualisation | Base InfluxDB, tableaux de bord Grafana, alertes | 4 — Visualisations |
| **docs** | Documentation | Schémas d'architecture, protocoles, manuels | 5 — Méthodologie |
| **Site Astro** | Médiation | Articles de recherche DBR, portfolio académique | 6 — Synthèse |

Chaque niveau alimente le suivant : les données brutes deviennent des 
séries normalisées, puis des patterns d'obstacles, puis des 
visualisations, puis des analyses qualitatives, puis de la théorie. 
Un évaluateur externe peut remonter de la conclusion théorique à la 
donnée brute en suivant cette chaîne.

## Pourquoi l'architecture est modulaire

Dans une démarche Design-Based Research (Brown, 1992 ; Barab et Squire, 
2004), le dispositif évolue à chaque cycle d'itération. Si 
l'architecture était monolithique, chaque modification nécessiterait une 
refonte complète. L'architecture modulaire résout ce problème : chaque 
dépôt peut être modifié **indépendamment** des autres.

Par exemple, après le Cycle 1, si l'analyse des données révèle qu'un 
algorithme de détection doit être ajusté, seul le dépôt 
`obstacle-detection` est modifié — les capteurs, le stockage et le 
tableau de bord restent inchangés. Cette indépendance des composants 
est la condition technique de l'itérativité DBR.

## Pourquoi l'architecture est ouverte

Tous les dépôts sont publics, sous licence libre (MIT pour le code, 
CC BY-SA pour la documentation). Ce choix répond à trois exigences :

**Reproductibilité.** Tout chercheur peut cloner les dépôts, exécuter 
les scripts et reproduire les analyses. Les dépôts sont archivés sur 
Zenodo avec attribution de DOI.

**Transparence.** Dans une recherche où le chercheur conçoit le 
dispositif qu'il étudie, la publicité du code constitue une garantie 
contre le biais de confirmation : tout observateur extérieur peut 
vérifier que les algorithmes de détection ne « fabriquent » pas les 
résultats attendus.

**Réutilisabilité.** Si un autre laboratoire souhaite adapter le 
dispositif à l'étude de systèmes complexes dans un autre domaine 
(gestion de l'énergie, agroécologie, éducation aux algorithmes), 
l'ensemble du code, des schémas et des protocoles est disponible. 
C'est cette propriété qui fonde la transférabilité technique du 
projet doctoral.

## En résumé

L'architecture du dispositif — six composants indépendants, publics et 
documentés — n'est pas un choix esthétique. C'est la réponse technique 
à deux contraintes de la recherche : **l'itération** (la DBR exige que 
le dispositif évolue) et **la rigueur** (la science ouverte exige que 
le dispositif soit vérifiable).

---

*Cet article décrit l'architecture technique du dispositif. Pour le 
cadre méthodologique, voir « La Design-Based Research comme méthodologie 
de production de connaissances ». Pour le cadre épistémologique, voir 
la série « De la productique à la didactique ».*

*Références :*
- *Barab, S. et Squire, K. (2004). Design-Based Research: Putting a 
  stake in the ground. Journal of the Learning Sciences, 13(1), 1–14.*
- *Brown, A. L. (1992). Design experiments. Journal of the Learning 
  Sciences, 2(2), 141–178.*
