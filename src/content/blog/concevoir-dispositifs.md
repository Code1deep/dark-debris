---
title: "Concevoir des dispositifs qui n'automatisent pas"
description: "La BDI ne remplace ni l'enseignant ni la réflexion de l'apprenant. Elle crée les conditions pour que l'erreur devienne un objet d'investigation, pas une faute à corriger."
pubDate: 2026-05-04
author: "A. Elbah"
categories: ["Méthodologie DBR", "Didactique des systèmes complexes"]
tags: ["Rabardel", "genèse instrumentale", "artefact", "instrument", "étayage", "DBR"]
series: null
seriesOrder: null
readingTime: 7
niveau: "expert"
---

# Concevoir des dispositifs qui n'automatisent pas

## Le piège de l'automatisation

Lorsqu'un ingénieur conçoit un outil technique, son premier réflexe est 
souvent de chercher à **automatiser** : remplacer une tâche pénible, 
fiabiliser un processus, gagner en efficacité. Cette logique est légitime 
en contexte industriel.

Mais elle ne s'applique pas à la recherche en éducation.

Mon objectif n'est pas de concevoir des dispositifs qui automatisent des 
tâches. C'est de concevoir des dispositifs qui permettent de **comprendre 
comment les apprenants apprennent**. Cette différence de finalité distingue 
deux postures : celle de l'ingénieur-concepteur, qui optimise un produit, 
et celle du chercheur en technologie éducative, qui instrumente une 
investigation sur les processus d'apprentissage.

## L'artefact n'est pas l'instrument

Le psychologue et ergonome Pierre Rabardel (1995) a posé une distinction 
qui éclaire cette différence :

- **L'artefact** : l'objet technique brut, tel qu'il est livré par le 
  fabricant. Il n'a pas de signification pédagogique intrinsèque.
- **L'instrument** : l'artefact **transformé par l'usage** que l'apprenant 
  en fait. C'est l'artefact augmenté des schèmes d'utilisation que 
  l'apprenant développe à son contact.

Un capteur IoT, une interface graphique, un tableau de bord — ce ne sont 
que des artefacts. C'est **l'appropriation par l'apprenant** qui en fait 
des instruments d'apprentissage.

Le travail de conception ne s'arrête donc pas à la livraison de l'artefact. 
Il commence là où l'apprenant s'en saisit.

## La Base de Données Intelligente (BDI) : un instrument, pas un automate

La BDI que je développe dans le cadre de cette recherche ne remplace ni 
l'enseignant ni la réflexion de l'apprenant. Elle joue un rôle 
fondamentalement différent d'un système automatisé.

Elle collecte des traces. Elle analyse des erreurs. Elle propose des 
alertes. Mais elle **ne corrige jamais à la place de l'apprenant**.

Pourquoi ? Parce que l'erreur est une opportunité d'apprentissage, pas 
une faute à éliminer.

- Si la BDI corrige automatiquement une dérive de pH, l'apprenant ne 
  comprend pas ce qui s'est passé dans le système.
- Si la BDI **signale l'anomalie sans en donner la solution**, l'apprenant 
  est contraint de formuler une hypothèse, de la tester, de l'ajuster.

C'est ce que Brousseau (1998) appelle une **situation de validation** : le 
dispositif ne livre pas la réponse. Il crée les conditions pour que 
l'apprenant **se mette en recherche**.

## Trois niveaux d'étayage, trois postures cognitives

Le dispositif intègre trois niveaux d'étayage, correspondant à la 
progression de l'apprenant dans le raisonnement systémique :

| Niveau | Rôle du dispositif | Posture de l'apprenant |
|--------|--------------------|------------------------|
| **Débutant** | Guidage fort — le dispositif signale l'anomalie et indique quoi observer | L'apprenant suit les indications et observe |
| **Intermédiaire** | Guidage progressif — le dispositif montre les corrélations entre paramètres | L'apprenant interprète les liens et formule des questions |
| **Avancé** | Guidage faible — l'apprenant formule des hypothèses prédictives et les confronte aux données | L'apprenant raisonne, anticipe, valide ou invalide ses modèles |

Le dispositif ne se contente pas de « s'adapter » au niveau de 
l'apprenant. Il **accompagne une transformation cognitive**. C'est ce que 
Rabardel (1995) appelle la **genèse instrumentale** : l'apprenant passe 
progressivement de l'usage guidé à l'usage autonome, puis à l'usage 
créatif — détournant l'artefact pour poser ses propres questions.

## Pourquoi la DBR est indispensable

Un tel dispositif ne peut pas être conçu en une seule version figée, 
dans un bureau d'études. Il repose sur une méthodologie itérative 
spécifique : la **Design-Based Research** (DBR).

La DBR, formalisée par Brown (1992), Collins (1999) et le Design-Based 
Research Collective (2003), articule cinq étapes :

1. **Conception** — construire une première version du dispositif
2. **Implémentation** — la tester sur le terrain avec des apprenants réels
3. **Analyse** — observer ce qui fonctionne, ce qui bloque, ce qui 
   surprend
4. **Itération** — modifier le dispositif en fonction des observations
5. **Théorisation** — formaliser ce que l'on a appris sur les processus 
   d'apprentissage

La DBR n'est pas une méthode de conception produit. C'est une 
**méthodologie de production de connaissances** sur la façon dont les 
apprenants apprennent lorsqu'ils sont confrontés à des systèmes complexes 
instrumentés.

## La posture de l'ingénieur-pédagogue-chercheur

Cette démarche dessine une posture professionnelle spécifique. Je ne me 
définis pas comme un ingénieur qui enseigne. Je me définis comme un 
**chercheur en éducation qui utilise l'ingénierie comme instrument 
d'investigation**.

- La technique (capteurs, code, bases de données) est le **microscope** 
  qui rend observable ce qui ne l'est pas à l'œil nu : les stratégies de 
  raisonnement, les hésitations, les bifurcations cognitives.
- Le Living Lab est le **terrain d'observation** — un environnement 
  complexe et authentique, pas un laboratoire aseptisé.
- La DBR est la **méthode** — itérative, ancrée dans le terrain, 
  productrice de théorie.
- Les obstacles cognitifs (linéarité, temporalité, proportionnalité) sont 
  les **objets d'étude** — les formes de raisonnement que la thèse 
  cherche à comprendre et à modéliser.

## En résumé

| Approche par automatisation | Approche par investigation instrumentée |
|-----------------------------|-----------------------------------------|
| Remplacer la tâche humaine | Rendre le raisonnement humain observable |
| Corriger l'erreur automatiquement | Révéler l'obstacle cognitif sous-jacent |
| Donner la réponse | Créer une situation de recherche |
| Concevoir une solution figée | Itérer via la DBR |
| L'artefact technique au centre | L'instrument et l'apprenant au centre |

Concevoir des dispositifs qui n'automatisent pas, c'est reconnaître que 
l'objectif n'est pas l'efficacité technique, mais la compréhension des 
processus par lesquels les apprenants apprennent à penser en systèmes.

---

*Cet article s'inscrit dans une réflexion sur la méthodologie de 
conception des dispositifs éducatifs instrumentés. Pour le cadre 
épistémologique qui le sous-tend, voir la série « De la productique à la 
didactique ».*

*Références :*
- *Brousseau, G. (1998). Théorie des situations didactiques. La Pensée 
  Sauvage.*
- *Brown, A. L. (1992). Design experiments. Journal of the Learning 
  Sciences, 2(2), 141–178.*
- *Collins, A. (1999). The changing infrastructure of education research. 
  In E. C. Lagemann et L. S. Shulman (Eds.), Issues in education 
  research. Jossey-Bass.*
- *Design-Based Research Collective. (2003). Design-based research: An 
  emerging paradigm. Educational Researcher, 32(1), 5–8.*
- *Rabardel, P. (1995). Les hommes et les technologies : approche 
  cognitive des instruments contemporains. Armand Colin.*
