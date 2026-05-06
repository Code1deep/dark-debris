---
title: "Des traces d'apprentissage à l'étayage adaptatif : le rôle de la BDI"
description: "La BDI transforme les traces d'apprentissage en informations exploitables pour l'étayage. Cet article décrit cette chaîne de transformation et ses implications didactiques."
pubDate: 2026-05-05
author: "A. Elbah"
categories: ["bdi-et-donnees", "didactique-systemes"]
tags: ["BDI", "traces", "learning analytics", "étayage", "Bruner", "Rabardel", "Siemens"]
series: null
seriesOrder: null
readingTime: 7
niveau: "expert"
---

# Des traces d'apprentissage à l'étayage adaptatif : le rôle de la BDI

## Le problème de départ

L'enseignant qui accompagne un apprenant face à un système complexe 
dispose d'une ressource précieuse mais limitée : son **observation 
directe**. Il perçoit les hésitations, les erreurs, les fausses pistes. 
Mais cette perception est partielle — il ne peut pas observer 
simultanément tous les apprenants, ni mémoriser l'ensemble des 
interactions sur plusieurs semaines.

La question que pose la BDI est la suivante : **que se passe-t-il si 
l'on instrumente cette observation ?** Non pas pour remplacer 
l'enseignant, mais pour rendre visible ce que l'observation directe 
ne peut pas capter — la structure temporelle des erreurs, les 
récurrences, les dérives progressives.

Cette question s'inscrit dans le champ des **learning analytics** 
(Siemens, 2013) : l'utilisation de données produites par les 
apprenants pour comprendre et améliorer les processus d'apprentissage. 
La spécificité de cette recherche est d'appliquer cette démarche non 
pas à des environnements numériques (LMS, plateformes en ligne) mais 
à un **système physique complexe** — le Living Lab aquaponique — où 
les traces sont captées par des capteurs IoT en temps réel.

## Ce que la BDI capte : trois types de traces

Dans le dispositif de recherche, la BDI collecte trois types de traces 
complémentaires :

| Type de trace | Source | Exemple | Ce qu'elle révèle |
|---------------|--------|---------|-------------------|
| **Traces système** | Capteurs IoT (pH, température, O₂, EC) | pH = 6.2 à 14h32 | L'état objectif du système à un instant donné |
| **Traces d'action** | Interface de saisie de l'apprenant | L'apprenant ajuste l'aération à 14h35 | La décision prise par l'apprenant en réponse à l'état du système |
| **Traces de prédiction** | Formulaire de prédiction | « Je pense que le pH va remonter d'ici demain » | Le modèle mental de l'apprenant — ce qu'il croit comprendre du système |

C'est la **confrontation entre ces trois types de traces** qui produit 
l'information didactiquement exploitable. Si le système indique pH = 6.2 
(trace système), que l'apprenant ajuste l'aération (trace d'action) en 
prédisant une remontée immédiate (trace de prédiction), et que le pH ne 
remonte que cinq jours plus tard — la BDI détecte un **obstacle de 
temporalité** : l'apprenant applique un modèle temporel instantané à un 
système dont la dynamique se déploie sur plusieurs jours.

## De la trace brute à l'information didactique

La contribution de la BDI ne réside pas dans la collecte — n'importe 
quelle base de données peut stocker des mesures. Elle réside dans la 
**chaîne de transformation** qui convertit une trace brute en une 
information exploitable pour l'étayage :

**Étape 1 — Normalisation.** Chaque trace est convertie en format 
standardisé `(timestamp, variable, valeur, unité)`, indépendamment de 
sa source. Cette normalisation est ce qui rend le système agnostique 
(voir « L'architecture agnostique de la BDI »).

**Étape 2 — Corrélation temporelle.** La BDI superpose les trois 
types de traces sur le même axe temporel. Cette superposition rend 
visible ce que l'observation directe ne peut pas montrer : le décalage 
entre l'action de l'apprenant et la réponse du système, la récurrence 
d'un même type d'erreur sur plusieurs jours, l'évolution progressive 
d'un raisonnement.

**Étape 3 — Classification de l'écart.** Lorsque la prédiction de 
l'apprenant diverge du comportement réel du système, la BDI 
caractérise la **structure de l'écart** :

| Structure de l'écart | Obstacle probable | Étayage suggéré |
|----------------------|-------------------|-----------------|
| L'apprenant cherche une cause unique à un effet multifactoriel | Linéarité | Visualisation multi-paramètres : montrer les corrélations entre variables |
| L'apprenant s'attend à un résultat immédiat après son action | Temporalité | Graphique longitudinal : montrer l'évolution sur 7 jours après l'intervention |
| L'apprenant surdose ou sous-dose sa correction | Proportionnalité | Comparaison de scénarios : effet d'une correction faible vs. forte |

**Étape 4 — Alerte pédagogique.** L'écart classifié est transmis à 
l'enseignant (ou, à un stade avancé, à l'apprenant lui-même) sous 
forme d'alerte contextualisée. L'alerte ne dit pas « erreur » — elle 
dit : « l'apprenant prédit un effet immédiat ; le système ne répondra 
que dans 3 à 5 jours. Obstacle de temporalité probable. »

## Ce que la BDI ne fait pas

La distinction est cruciale : la BDI **n'automatise pas l'étayage**. 
Elle ne corrige pas l'apprenant. Elle ne lui donne pas la réponse.

Ce qu'elle fait, c'est rendre l'écart **visible et nommable** — à la 
fois pour l'enseignant et pour l'apprenant. C'est la différence entre 
un système d'automatisation (qui agit à la place de l'humain) et un 
**artefact de médiation** au sens de Rabardel (1995) : un objet 
technique qui étend les capacités d'observation sans se substituer au 
raisonnement.

Bruner (1983) a montré que l'étayage efficace consiste à « réduire 
les degrés de liberté » de la tâche — non pas en simplifiant le 
problème, mais en rendant visibles les aspects pertinents que 
l'apprenant ne perçoit pas encore. La BDI opérationnalise cette 
définition : elle réduit les degrés de liberté en rendant visibles 
les dynamiques temporelles, les corrélations multi-paramètres et les 
écarts entre prédiction et réalité.

## Implications pour la recherche

Cette chaîne de transformation (trace → corrélation → classification 
→ alerte) constitue l'un des axes opérationnels de la thèse doctorale. 
Elle soulève trois questions de recherche :

1. **Fidélité.** Les classifications d'obstacles produites par la BDI 
   correspondent-elles aux obstacles identifiés par l'observation 
   qualitative de l'enseignant ? (validation croisée)

2. **Effet sur l'étayage.** Les enseignants qui disposent des alertes 
   de la BDI modifient-ils effectivement leurs stratégies d'étayage ? 
   Comment ?

3. **Effet sur l'apprenant.** Lorsque l'apprenant accède directement 
   à la visualisation de ses propres écarts (stade avancé de la genèse 
   instrumentale), cela favorise-t-il l'auto-régulation de son 
   apprentissage ?

Ces questions seront traitées dans les trois cycles DBR du projet 
doctoral.

## En résumé

| Ce que la BDI capte | Ce que la BDI produit | Ce que la BDI ne fait pas |
|----------------------|-----------------------|---------------------------|
| Traces système (capteurs IoT) | Corrélations temporelles multi-paramètres | Corriger l'apprenant |
| Traces d'action (interventions de l'apprenant) | Classification des obstacles (linéarité, temporalité, proportionnalité) | Donner la réponse |
| Traces de prédiction (modèle mental explicité) | Alertes pédagogiques contextualisées | Se substituer à l'enseignant |

La BDI transforme des traces brutes en informations didactiques 
exploitables. Elle ne remplace ni l'enseignant ni le raisonnement de 
l'apprenant : elle rend observable ce qui ne l'est pas à l'œil nu — 
la structure temporelle des erreurs et la nature des obstacles qui les 
produisent.

---

*Cet article décrit le fonctionnement de la BDI en tant qu'instrument 
de médiation didactique. Pour l'architecture technique, voir 
« L'architecture agnostique de la BDI ». Pour le rôle de l'étayage, 
voir « Concevoir des dispositifs qui n'automatisent pas ».*

*Références :*
- *Bruner, J. S. (1983). Le développement de l'enfant : savoir faire, 
  savoir dire. PUF.*
- *Rabardel, P. (1995). Les hommes et les technologies : approche 
  cognitive des instruments contemporains. Armand Colin.*
- *Siemens, G. (2013). Learning analytics: The emergence of a 
  discipline. American Behavioral Scientist, 57(10), 1380–1400.*
