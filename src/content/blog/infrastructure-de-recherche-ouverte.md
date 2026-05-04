---
title: "Une infrastructure de recherche ouverte : dépôts publics modulaires, conçus pour permettre l'itération DBR, la reproductibilité et la science ouverte. architecture et principes"
description: "Le dispositif de recherche repose sur six dépôts publics modulaires, conçus pour permettre l'itération DBR, la reproductibilité et la science ouverte. Cet article en décrit l'architecture et les principes."
pubDate: 2026-05-04 Cet article en décrit l'architecture et les principes."
pubDate: 2026-05-04
author: "A. Elbah"
keywords: "infrastructure de recherche, science ouverte, GitHub, Zenodo, DOI, reproductibilité, modularité, DBR, BDI, Living Lab"
niveau: "expert"
---

# Une infrastructure de recherche ouverte : architecture et principes

## Une infrastructure, pas un produit

Une question revient régulièrement lorsque l'on présente ce travail : 

## Une infrastructure, pas un produit

Une question revient régulièrement lorsque l'on présente ce travail : 
« Quel est votre produit ? ». Cette question repose sur un malentendu. 
Le dispositif décrit ici n'est pas un produit, un logiciel à 
commercialiser ou un service à vendre. **C'est une infrastructure de 
recherche.**

Un laboratoire de phys
« Quel est votre produit ? ». Cette question repose sur un malentendu. 
Le dispositif décrit ici n'est pas un produit, un logiciel à 
commercialiser ou un service à vendre. **C'est une infrastructure de 
recherche.**

Un laboratoire de physique dispose d'instruments (lasers, capteurs, 
enceintes). Un laboratoire de biologie dispose de microscopes, 
d'éprouvettes, de séquenceurs. Cetteique dispose d'instruments (lasers, capteurs, 
enceintes). Un laboratoire de biologie dispose de microscopes, 
d'éprouvettes, de séquenceurs. Cette recherche doctorale dispose de 
dépôts GitHub, de scripts Python, de configurations Docker, de schémas 
d'architecture.

L'infrastructure est recherche doctorale dispose de 
dépôts GitHub, de scripts Python, de configurations Docker, de schémas 
d'architecture.

L'infrastructure est ce qui rend la recherche possible. Elle n'est pas 
l'objet de la recherche.

## Six dépôts, une cohérence fonctionnelle

L'écosystème numérique de recherche repose sur six dépôts publics, ce qui rend la recherche possible. Elle n'est pas 
l'objet de la recherche.

## Six dépôts, une cohérence fonctionnelle

L'écosystème numérique de recherche repose sur six dépôts publics, 
chacun remplissant une fonction spécifique dans le dispositif :

| Dépôt | Fonction | Contenu technique |
|-------|----------|-------------------|
| **living-lab-sensors** | Captation des données physiques | Code ESP32, capteurs IoT, protocole MQTT |
| **B 
chacun remplissant une fonction spécifique dans le dispositif :

| Dépôt | Fonction | Contenu technique |
|-------|----------|-------------------|
| **living-lab-sensors** | CaptationDI-prototype** | Traitement et normalisation des données | Scripts Python de collecte et de simulation |
| **obstacle-detection** | Analyse cognitive | Algorithmes de détection des des données physiques | Code ESP32, capteurs IoT, protocole MQTT |
| **BDI-prototype** | Traitement et normalisation des données | Scripts Python de collecte et de simulation |
| **obstacle-detection** | Analyse cognitive | Algorithmes de détection des obstacles (linéarité, temporalité, proportionnalité) |
| **dashboard** | Stockage et visualisation | Base InfluxDB, tableaux de bord Grafana, alertes |
| **docs obstacles (linéarité, temporalité, proportionnalité) |
| **dashboard** | Stockage et visualisation | Base InfluxDB, tableaux de bord Grafana, alertes |
| **docs** | Documentation technique et scientifique | Schémas d'architecture, protocoles, manuels |
| **Site Astro** | Documentation et médiation scientifique | Articles de recherche DBR, portfolio académ** | Documentation technique et scientifique | Schémas d'architecture, protocoles, manuels |
| **Site Astro** | Documentation et médiation scientifique | Articles de recherche DBR, portfolio académique |

Chaque dépôt est modulaire, documenté et réutilisable. L'ensemble forme 
un pipeline complet, de la captation physique des données à la 
publicationique |

Chaque dépôt est modulaire, documenté et réutilisable. L'ensemble forme 
un pipeline complet, de la captation physique des données à la 
publication des analyses.

## La modularité comme condition de la DBR

Cette architecture modulaire n'est pas un choix esthétique. C'est une 
**nécessité méthodologique** pour la Design-Based Research (DBR).

Dans une démarche DBR, le des analyses.

## La modularité comme condition de la DBR

Cette architecture modulaire n'est pas un choix esthétique. C'est une 
**nécessité méthodologique** pour la Design-Based Research (DBR).

Dans une démarche DBR, le dispositif évolue à chaque cycle d'itération 
(Brown, 1992 ; Barab et Squire, 2004). La modularité garantit que dispositif évolue à chaque cycle d'itération 
(Brown, 1992 ; Barab et Squire, 2004). La modularité garantit que 
chaque composant peut être modifié indépendamment :

- Si l'algorithme de détection des obstacles évolue après le Cycle 1, 
  le dépôt `obstacle-detection` est mis à jour sans toucher aux 
  capt 
chaque composant peut être modifié indépendamment :

- Si l'algorithme de détection des obstacles évolue après le Cycle 1, 
  le dépôt `obstacle-detection` est mis à jour sans toucher aux 
  capteurs ni au tableau de bord.
- Si le protocole de communication change, le dépôt `BDI-prototype` 
  est modifié sans réécrire le dashboard.
- Si un nouveau capteur est ajouté au Living Lab, le dépôt eurs ni au tableau de bord.
- Si le protocole de communication change, le dépôt `BDI-prototype` 
  est modifié sans réécrire le dashboard.
- Si un nouveau capteur est ajouté au Living Lab, le dépôt 
  `living-lab-sensors` est adapté sans toucher à la base de données.

Cette indépendance des composants permet au dispositif d'évoluer au 
rythme de la recherche, sans que chaque itération nécessite une 
refonte complète. C'est la condition technique de l'itérativité DB
  `living-lab-sensors` est adapté sans toucher à la base de données.

Cette indépendance des composants permet au dispositif d'évoluer au 
rythme de la recherche, sans que chaque itération néR.

## La science ouverte comme exigence de reproductibilité

Tous les dépôts sont **publics**, sous licence libre (MIT pour le code, 
CC BY-SA pour la documentation). Cecessite une 
refonte complète. C'est la condition technique de l'itérativité DBR.

## La science ouverte comme exigence de reproductibilité

Tous les dépôts sont **publics**, sous licence libre (MIT pour le code, 
CC BY-SA pour la documentation). Ce choix est fondé sur les principes 
de la science ouverte tels que promus par les organismes de financement 
de la recherche ( choix est fondé sur les principes 
de la science ouverte tels que promus par les organismes de financement 
de la recherche (FCI/CFI 2026, FRQSC, Tri-Council) :

| Principe | Mise en œuvre dans l'infrastructure |
|----------|--FCI/CFI 2026, FRQSC, Tri-Council) :

| Principe | Mise en œuvre dans l'infrastructure |
|----------|-------------------------------------|
| **Reproductibilité** | Tout chercheur peut cloner les dépôts, exécuter les scripts et reproduire les analyses |
| **Transparence** | Les algorithmes de détection sont lis-----------------------------------|
| **Reproductibilité** | Tout chercheur peut cloner les dépôts, exécuter les scripts et reproduire les analyses |
| **Transparence** | Les algorithmes de détection sont lisibles, commentés et critiquables |
| **Pérennité** | Les dépôts sont archivés suribles, commentés et critiquables |
| **Pérennité** | Les dépôts sont archivés sur Zenodo avec attribution de DOI |
| **Accessibilité** | Les schémas, protocoles et manuels sont en accès libre |
| **Réutilisabilité** | D'autres chercheurs peuvent adapter le dispositif à leurs propres terrains |

Ce choix de transparence a également une fonction épistémologique. 
Dans une recherche où le chercheur conçoit le dispositif qu Zenodo avec attribution de DOI |
| **Accessibilité** | Les schémas, protocoles et manuels sont en accès libre |
| **Réutilisabilité** | D'autres chercheurs peuvent adapter le dispositif à leurs propres terrains |

Ce choix de transparence a également une fonction épistémologique. 
Dans une recherche où le chercheur conçoit le dispositif qu'il étudie, 
la publicité du code et des algorithmes constitue une garantie contre 
le biais de confirmation : tout observateur extérieur peut vérifier 'il étudie, 
la publicité du code et des algorithmes constitue une garantie contre 
le biais de confirmation : tout observateur extérieur peut vérifier 
que les algorithmes de détection ne « fabriquent » pas les résultats 
attendus.

## De la captation à la thèse : une chaîne de traç
que les algorithmes de détection ne « fabriquent » pas les résultats 
attendus.

## De la captation à la thèse : une chaîne de traçabilité

L'infrastructure articule six niveaux, de la donnée brute à la 
synthèse théorique :

| Niveau | Support | Contenu |
|--------|---------|---------|
| **1. Captation** | `living-lab-sensors` | Code embarqué ESP32, données brutes des capteurs |
| **2. Traitementabilité

L'infrastructure articule six niveaux, de la donnée brute à la 
synthèse théorique :

| Niveau | Support | Contenu |
|--------|---------|---------|
| **1. Captation** | `** | `BDI-prototype` | Scripts de collecte, normalisation, simulation |
| **3. Analyse** | `obstacle-detection` | Algorithmes de détection et de classification des obstacles |
| **4. Stockage et visualisation** | `dashboard` | Baseliving-lab-sensors` | Code embarqué ESP32, données brutes des capteurs |
| **2. Traitement** | `BDI-prototype` | Scripts de collecte, normalisation, simulation |
| **3. Analyse** | `obstacle-detection` | Algorithmes de détection et de classification des obstacles |
| **4. Stockage et visualisation** | `dashboard` | Base temps-série InfluxDB, tableaux de bord Grafana |
| **5. Documentation** | `docs` + site Astro | Schémas d'architecture, articles de recherche DBR |
| **6. Synth temps-série InfluxDB, tableaux de bord Grafana |
| **5. Documentation** | `docs` + site Astro | Schémas d'architecture, articles de recherche DBR |
| **6. Synthèse** | Dossier doctoral | Cadre théorique, méthodologie, résultats |

Chaque niveau alimente le suivant. Les données brutes deviennent des 
séries normalisées, qui deviennent des patternsèse** | Dossier doctoral | Cadre théorique, méthodologie, résultats |

Chaque niveau alimente le suivant. Les données brutes deviennent des 
séries normalisées, qui deviennent des patterns d'obstacles détectés, 
qui deviennent des visualisations, qui alimentent les analyses 
qualitatives, qui nourrissent la théorisation. Cette traçabilité de 
bout d'obstacles détectés, 
qui deviennent des visualisations, qui alimentent les analyses 
qualitatives, qui nourrissent la théorisation. Cette traçabilité de 
bout en bout est ce qui permet à un évaluateur externe de remonter 
de la conclusion théorique à la donnée brute.

## Une infrastructure au service de la recherche

Cette précision est importante pour que le jury doctoral comprenne la 
nature en bout est ce qui permet à un évaluateur externe de remonter 
de la conclusion théorique à la donnée brute.

## Une infrastructure au service de la recherche

Cette précision est importante pour du travail présenté :

- L'objectif n'est pas de développer un logiciel commercial. C'est de 
  construire un instrument d'investigation scientifique.
- que le jury doctoral comprenne la 
nature du travail présenté :

- L'objectif n'est pas de développer un logiciel commercial. C'est de 
  construire un instrument d'investigation scientifique.
- L'objectif n'est pas de publier un site web attractif. C'est de 
  documenter une démarche DBR de manière transparente et traçable.
- L'objectif n'est pas de produ L'objectif n'est pas de publier un site web attractif. C'est de 
  documenter une démarche DBR de manière transparente et traçable.
- L'objectif n'est pas de produire un artefact technique optimisé. 
  C'est de comprendre ce que l'usageire un artefact technique optimisé. 
  C'est de comprendre ce que l'usage de cet artefact révèle sur les 
  processus d'apprentissage.

L'infrastructure est ouverte parce que la reproductibilité l'exige. Si 
un autre laboratoire souhaite adapter le dispositif à l'étude de 
systèmes complexes dans un autre domaine (gestion de l'énergie, 
agroécologie, éducation aux algorithmes), l'ensemble du code, des 
schémas et des protocoles est disponible. C'est cette propriété qui 
fonde la transférabilité technique annoncée dans le de cet artefact révèle sur les 
  processus d'apprentissage.

L'infrastructure est ouverte parce que la reproductibilité l'exige. Si 
un autre laboratoire souhaite adapter le dispositif à l'étude de 
systèmes complexes dans un autre domaine (gestion de l'énergie, 
agroécologie, éducation aux algorithmes), l'ensemble du code, des 
schémas et des protocoles est disponible. C'est cette propriété qui 
fonde la transférabilité technique annoncée dans le projet doctoral.

## En résumé

| Caractéristique | Ce que cela signifie |
|-----------------|----------------------|
| **Infrastructure** | Un ensemble de composants modulaires, pas un logiciel monolithique |
| **Recherche** | Un outil pour produire des con projet doctoral.

## En résumé

| Caractéristique | Ce que cela signifie |
|-----------------|----------------------|
| **Infrastructure** | Un ensemble de composants modulaires, pas un logiciel monolithique |
| **Recherche** | Un outil pour produire des connaissances, pas un produit pour le marché |
| **Ouverte** | Dépôts publics, licences libres, DOI Zenodo |
| **Documentée** | Schémas, manuels, protocoles accessibles |
| **Reproductible** | Scripts exécutables, données anonymisées, chaîne de traçabilité |
| **Évolutive** | La modularité permet l'itération à chaque cycle DBR |

L'infrastructure de recherche ouverte est la condition matérielle de 
la rigueur scientifique : elle rend le dispositif vérifiable, les 
analyses reproductibles et les résultats transférables.

---

*Cet article décrit l'architecture technique du dispositif de recherche. 
Pour le cadre méthodologique, voir «naissances, pas un produit pour le marché |
| **Ouverte** | Dépôts publics, licences libres, DOI Zenodo |
| **Documentée** | Schémas, manuels, protocoles accessibles |
| **Reproductible** | Scripts exécutables, données anonymisées, chaîne de traçabilité |
| **Évolutive** | La modularité permet l'itération à chaque cycle DBR |

L'infrastructure de recherche ouverte est la condition matérielle de 
la rigueur scientifique : elle rend le dispositif vérifiable, les 
analyses reproductibles et les résultats transférables.

---

*Cet article décrit l'architecture technique du dispositif de recherche. 
Pour le cadre méthodologique, voir « La Design-Based Research comme 
méthodologie de production de connaissances ». Pour le cadre 
épistémologique, voir la série « De la productique à la didactique ».*

*Références La Design-Based Research comme :*
- *Barab, S. et Squire, K. (2004). Design-Based Research: Putting a 
  stake in the ground. Journal of the Learning Sciences, 13(1), 1–14.*
- *Brown, A. L. (1992). Design experiments. Journal of the Learning 
  Sciences, 2(2), 141–178.*
