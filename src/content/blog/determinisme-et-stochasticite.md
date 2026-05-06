---
title: "Déterminisme et stochasticité : apprendre à raisonner sous incertitude"
description: "Les systèmes complexes ne sont pas déterministes. L'apprenant doit passer d'un raisonnement fondé sur la certitude à un raisonnement fondé sur la probabilité."
pubDate: 2026-05-04
author: "A. Elbah"
categories: ["bdi-et-donnees", "obstacles-cognitifs"]
tags: ["stochasticite", "incertitude", "determinisme", "Prigogine", "Morin", "Kahneman", "BDI"]
series: null
seriesOrder: null
readingTime: 7
niveau: "expert"
---

# Déterminisme et stochasticité : apprendre à raisonner sous incertitude

## Le présupposé déterministe dans l'apprentissage

Les articles précédents de ce blog ont exploré trois obstacles cognitifs 
récurrents face aux systèmes complexes : la linéarité, la temporalité et 
la proportionnalité. Ces trois obstacles partagent un présupposé commun, 
rarement nommé : le **déterminisme**.

L'apprenant qui cherche une cause unique, qui attend un effet immédiat, 
qui applique une règle de proportionnalité, raisonne implicitement dans 
un cadre où **chaque cause produit un effet prévisible, mesurable et 
reproductible**. C'est le cadre de la mécanique classique — un cadre qui 
fonctionne pour la chute d'un corps ou le mouvement d'un piston.

Mais les systèmes complexes — qu'il s'agisse d'un écosystème aquaponique, 
d'un réseau de transport ou d'un marché économique — ne fonctionnent pas 
ainsi. Ils comportent une part irréductible d'**aléa**.

## La stochasticité : une propriété des systèmes complexes

En physique et en sciences des systèmes, un flux est dit **stochastique** 
lorsque son évolution future ne peut être prédite avec certitude, mais que 
ses comportements moyens obéissent à des régularités statistiques 
(Prigogine et Stengers, 1984).

Cette distinction est fondamentale :

| Système déterministe | Système stochastique |
|----------------------|----------------------|
| La même entrée produit toujours la même sortie | La même entrée peut produire des sorties différentes |
| L'erreur est attribuable à une cause identifiable | La variation est partiellement irréductible |
| La prédiction est exacte (aux erreurs de mesure près) | La prédiction est probabiliste (intervalles de confiance) |
| Le modèle vise la précision | Le modèle vise la robustesse |

En aquaponie, par exemple :

- On ne peut pas prédire **exactement** le pH du bassin dans 24 heures, 
  car il dépend de dizaines de variables interconnectées (température, 
  alimentation, activité bactérienne, ensoleillement).
- On peut prédire que le pH restera **probablement** entre 6.5 et 7.5 si 
  les paramètres principaux sont maintenus dans leurs intervalles de 
  tolérance.

Passer de la première attente (prédiction exacte) à la seconde (prédiction 
probabiliste) constitue un **changement de cadre épistémique** — et c'est 
l'un des apprentissages les plus difficiles pour les apprenants confrontés 
à la complexité.

## Un quatrième obstacle : l'intolérance à l'incertitude

Les trois obstacles cognitifs déjà identifiés (linéarité, temporalité, 
proportionnalité) peuvent être complétés par un quatrième, transversal :
l'**intolérance à l'incertitude**.

| Obstacle | Manifestation | Lien avec le déterminisme |
|----------|---------------|---------------------------|
| Linéarité | L'apprenant cherche UNE cause | Il présuppose que le système est déterministe (une cause → un effet) |
| Temporalité | L'apprenant attend un résultat immédiat | Il présuppose que le système répond instantanément et de manière prévisible |
| Proportionnalité | L'apprenant applique une règle linéaire | Il présuppose que la relation entrée-sortie est stable et reproductible |
| **Incertitude** | L'apprenant refuse la variabilité comme « normale » | **Il présuppose que toute variation est un dysfonctionnement à corriger** |

Kahneman (2011) a montré que le cerveau humain est naturellement 
« allergique » à l'incertitude : il préfère une explication fausse mais 
déterministe à une explication juste mais probabiliste. Morin (1990) 
ajoute que la pensée complexe exige précisément cette capacité à 
**penser avec l'incertitude** plutôt que contre elle.

L'apprenant qui voit le pH fluctuer entre 6.6 et 7.1 d'une heure à 
l'autre n'est pas face à un système défaillant. Il est face à un 
**système stochastique dont la variabilité est normale**. Mais son 
réflexe est de chercher « ce qui ne va pas » — c'est l'obstacle 
d'incertitude en action.

## Comment la BDI traite l'incertitude

La Base de Données Intelligente (BDI) intègre la dimension stochastique 
par deux mécanismes :

**1. Les intervalles de tolérance dynamiques**

La BDI ne cherche pas la valeur « parfaite ». Elle définit pour chaque 
paramètre un intervalle de tolérance (voir l'article « L'intervalle de 
tolérance cognitif ») à l'intérieur duquel la variation est considérée 
comme normale. Seul le franchissement d'un seuil déclenche une alerte.

Cette logique enseigne implicitement à l'apprenant que **la variabilité 
n'est pas un problème — c'est une propriété du système**.

**2. L'analyse de tendances vs. l'analyse de points**

La BDI ne réagit pas à un point de mesure isolé. Elle distingue :

| Type de signal | Ce qu'il signifie | Réponse de la BDI |
|----------------|-------------------|--------------------|
| **Fluctuation** (variation aléatoire autour de la moyenne) | Bruit normal du système stochastique | Pas d'alerte — la variation est absorbée dans la tolérance |
| **Tendance** (dérive lente et continue) | Changement structurel en cours (usure, déséquilibre) | Alerte progressive — l'étayage est renforcé |
| **Pic** (valeur extrême isolée) | Événement ponctuel, possiblement aberrant | Signalé mais non traité comme une urgence sans confirmation |

Cette distinction — fluctuation vs. tendance vs. pic — est exactement 
ce que l'apprenant doit apprendre à faire avec ses propres observations. 
Le tableau de bord de la BDI rend cette distinction **visible** : 
l'apprenant peut constater que certaines variations sont normales, que 
d'autres signalent un problème, et que la différence dépend du **temps** 
et du **contexte**, pas d'un seuil absolu.

## Ce que cela change pour la didactique

L'intégration de la stochasticité dans le dispositif a trois 
implications didactiques :

**1. Apprendre à lire la variabilité, pas à la supprimer.** 
L'objectif n'est pas que l'apprenant élimine toute variation du système, 
mais qu'il distingue la variation normale (bruit) de la variation 
significative (signal). C'est une compétence fondamentale en science des 
données et en pensée systémique.

**2. Passer de « c'est faux » à « c'est probable ».** 
Le dispositif encourage l'apprenant à formuler ses prédictions sous forme 
d'intervalles (« le pH sera probablement entre 6.5 et 7.0 demain ») 
plutôt que de valeurs exactes (« le pH sera de 6.8 »). Ce passage du 
déterminisme au probabilisme est une transformation cognitive profonde.

**3. Accepter l'incertitude comme condition de la complexité.** 
Morin (1990) rappelle que la pensée complexe n'est pas la pensée 
complète : elle est la pensée qui accepte de fonctionner avec de 
l'incertitude résiduelle. Le dispositif, en rendant visible la part 
d'aléa irréductible du système, aide l'apprenant à développer cette 
tolérance cognitive à l'incertitude.

## En résumé

| Raisonnement déterministe (obstacle) | Raisonnement sous incertitude (objectif) |
|--------------------------------------|------------------------------------------|
| Chaque variation a une cause identifiable | Certaines variations sont du bruit normal |
| La prédiction doit être exacte | La prédiction est un intervalle de confiance |
| La variabilité est un problème à corriger | La variabilité est une propriété du système |
| L'erreur signifie que quelque chose est cassé | La fluctuation est une information sur l'état du système |
| On agit sur chaque écart | On agit sur les tendances, pas sur les fluctuations |

Apprendre à raisonner sous incertitude — distinguer le bruit du signal, 
accepter la variabilité comme normale, formuler des prédictions 
probabilistes — constitue l'un des apprentissages les plus exigeants 
face aux systèmes complexes, et l'un des objectifs de l'étayage 
instrumenté par la BDI.

---

*Cet article complète la réflexion sur les obstacles cognitifs en 
ajoutant une dimension transversale : l'intolérance à l'incertitude. 
Pour les trois obstacles principaux, voir « Trois obstacles qui bloquent 
l'apprentissage ». Pour le cadre épistémologique, voir la série « De la 
productique à la didactique ».*

*Références :*
- *Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and 
  Giroux.*
- *Morin, E. (1990). Introduction à la pensée complexe. Seuil.*
- *Prigogine, I. et Stengers, I. (1984). Order Out of Chaos: Man's 
  New Dialogue with Nature. Bantam Books.*
