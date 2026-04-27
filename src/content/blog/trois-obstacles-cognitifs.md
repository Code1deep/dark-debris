---
title: "Trois obstacles qui bloquent l'apprentissage des systèmes complexes"
description: "Linéarité, temporalité, proportionnalité – ces trois obstacles cognitifs sont universels. Les identifier, c'est permettre l'étayage adapté."
pubDate: 2026-04-27
author: "A. Elbah"
keywords: "obstacles cognitifs, Bachelard, Astolfi, linéarité, temporalité, proportionnalité, étayage, DBR"
niveau: "intermediaire"
---

# Trois obstacles qui bloquent l’apprentissage des systèmes complexes

## L’erreur n’est pas une faute

Dans l’enseignement traditionnel, l’erreur est souvent sanctionnée. Elle est la preuve d’un manque – de travail, d’attention, de capacité.

Cette vision est stérile, et elle est scientifiquement fausse.

Dès 1938, le philosophe Gaston Bachelard montrait que l’erreur n’est pas un accident. Elle est le produit **d’un obstacle épistémologique** – une façon de penser qui fonctionne dans certains contextes mais devient un blocage face à la complexité.

L’erreur n’est pas l’absence de savoir. Elle est la présence **d’un savoir inadapté**.

Dans le sillage de Bachelard, le didacticien Jean-Pierre Astolfi (1997) a montré que ces obstacles ne se « corrigent » pas par une simple explication. Ils doivent être **dépassés** par une confrontation avec la réalité du système.

## Trois obstacles, trois blocages

Au cours de mes années d’accompagnement d’apprenants – en mathématiques, en physique, en algorithmique, en pilotage de systèmes complexes – j’ai observé trois obstacles récurrents.

Ils ne sont pas spécifiques à l’aquaponie ou à la productique. Ils sont **transversaux** à tout apprentissage de la complexité.

---

### Obstacle n°1 : La linéarité

**Formulation** : L’apprenant pense en termes de cause → effet simple, unidirectionnel, sans rétroaction.

**Manifestation concrète** (en aquaponie) :
> « J’ai ajouté plus de nourriture pour poissons. Donc, mes plantes vont pousser plus vite. »

Ce qui est ignoré : l’excès de nourriture augmente l’ammoniac, qui peut intoxiquer les poissons, ralentir la nitrification, et finalement **nuire** aux plantes.

**Pourquoi cet obstacle est résistant** :
Dans la vie quotidienne, la pensée linéaire fonctionne. Si j’appuie sur l’interrupteur, la lumière s’allume. Si je tourne le volant, la voiture tourne. Ces apprentissages précoces créent une **intuition robuste mais piégeuse** face aux systèmes complexes.

**Quand l’obstacle se lève** :
L’apprenant commence à **enchaîner plusieurs causes**, à **imaginer des boucles de rétroaction**, à se demander : « Et si j’agis sur ce paramètre, quels vont être les effets secondaires ? »

---

### Obstacle n°2 : La temporalité

**Formulation** : L’apprenant ignore les effets différés. Il attend un résultat immédiat après une action, et s’épuise quand le résultat ne vient pas.

**Manifestation concrète** (en aquaponie) :
> « J’ai ajusté le pH il y a cinq minutes. Rien ne change. Mon action n’a servi à rien. »

Ce qui est ignoré : Le pH met plusieurs heures à se stabiliser après un ajustement. Entre-temps, d’autres paramètres (température, dioxyde de carbone) peuvent le faire varier à nouveau.

**Pourquoi cet obstacle est résistant** :
Notre cognition est câblée pour la court terme. Les réseaux sociaux, les notifications, les résultats immédiats renforcent cette attente d’un retour instantané. Apprendre à **attendre**, à **observer sur la durée**, à **différer son jugement** est un travail contre-intuitif.

**Quand l’obstacle se lève** :
L’apprenant **anticipe** le délai de réponse du système. Il n’ajuste pas frénétiquement. Il observe, note, compare après un temps significatif. Il passe de la **réaction** à la **prédiction**.

---

### Obstacle n°3 : La proportionnalité

**Formulation** : L’apprenant applique des règles de proportionnalité simples à des systèmes non linéaires.

**Manifestation concrète** (en aquaponie) :
> « J’ai doublé le nombre de poissons. Donc, je dois doubler la filtration. »

Ce qui est ignoré : La biologie n’est pas linéaire. Doubler la population de poissons peut saturer le biofiltre, créer un pic d’ammoniac, et faire basculer tout l’écosystème. La réponse « double filtration » n’est ni suffisante (car le temps de colonisation bactérienne ne double pas) ni pertinente (car d’autres paramètres – oxygène, espace – deviennent critiques).

**Pourquoi cet obstacle est résistant** :
La proportionnalité est enseignée très tôt (règle de trois, pourcentages) comme une vérité mathématique universelle. L’école oublie souvent de préciser qu’elle ne s’applique qu’aux **systèmes linéaires**. Hors de ce cadre, elle devient un piège.

**Quand l’obstacle se lève** :
L’apprenant **questionne** la proportionnalité. Il cherche les **seuils**, les **effets de saturation**, les **interactions**. Il comprend que le système a sa propre logique, qui n’est pas réductible à des ratios simples.

---

## Les trois obstacles en synthèse

| Obstacle | Piège | Dépassement |
|----------|-------|-------------|
| **Linéarité** | Chercher une cause unique | Enchaîner les causalités multiples |
| **Temporalité** | Attendre un résultat immédiat | Anticiper les effets différés |
| **Proportionnalité** | Appliquer des ratios simples | Questionner les seuils et saturation |

## Comment la BDI détecte ces obstacles

Dans ma Base de Données Intelligente, ces trois obstacles sont **modélisés sous forme d’algorithmes**.

Le dépôt `obstacle-detection` (open source, sur GitHub) contient des fonctions qui analysent en continu les traces d’apprentissage :

- `detect_linearite.py` : repère les raisonnements où l’apprenant ignore les interactions entre variables
- `detect_temporalite.py` : identifie les ajustements trop rapprochés, signes d’une attente de réponse immédiate
- `detect_proportionnalite.py` : alerte sur les décisions qui appliquent une règle linéaire à un contexte non linéaire

**L’obstacle n’est plus une intuition vague. C’est une variable que je peux calculer, suivre dans le temps, et transformer en alerte pédagogique.**

## Ce que cela change pour l’étayage

La typologie des obstacles n’est pas une simple grille d’observation. Elle est le **cœur de mon dispositif d’étayage**.

- Si l’obstacle est **linéaire**, l’étayage consistera à **déplier les interactions** : montrer les rétroactions, provoquer l’hypothèse d’effets secondaires.
- Si l’obstacle est **temporel**, l’étayage consistera à **ralentir le rythme** : faire observer sur une durée significative, différer l’action.
- Si l’obstacle est **proportionnel**, l’étayage consistera à **introduire les seuils** : chercher les points de bascule, questionner la saturation.

**L’étayage n’est plus aveugle. Il est ciblé, précis, fondé sur une analyse des traces réelles de l’apprenant.**

## En résumé

| Obstacle | Ce que l’apprenant croit | Ce que le système fait réellement |
|----------|--------------------------|-----------------------------------|
| Linéarité | Une cause → un effet | Des causes multiples en rétroaction |
| Temporalité | L’effet est immédiat | L’effet est différé |
| Proportionnalité | Double cause → double effet | Le système a des seuils, il se sature |

**Lever un obstacle, ce n’est pas « faire disparaître l’erreur ». C’est aider l’apprenant à passer d’un modèle intuitif qui fonctionne dans le quotidien à un modèle systémique qui fonctionne dans la complexité.**

---

📚 *Article précédent : « L’intervalle de tolérance : de la machine à l’apprenant »*  
📚 *Article suivant : Phase 3 – « La productique comme science des flux universels » – à venir.*

*Cette série (Phase 2) établit les fondements didactiques de mon dispositif. La Phase 3 déploiera la portée épistémologique et universelle de la méthode.*