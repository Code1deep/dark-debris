---
title: "Les obstacles cognitifs comme invariants : une hypothèse de transférabilité"
description: "Les obstacles de linéarité, de temporalité et de proportionnalité se manifestent de manière structurellement identique dans des domaines très différents. Cette invariance cognitive est ce qui rend les résultats de la recherche potentiellement transférables au-delà de l'aquaponie."
pubDate: 2026-05-04
author: "A. Elbah"
categories: ["Obstacles cognitifs", "Didactique des systèmes complexes"]
tags: ["linéarité", "temporalité", "proportionnalité", "invariants", "Bachelard", "Astolfi", "transférabilité"]
series: "Agnosticisme technologique"
seriesOrder: 2
readingTime: 7
niveau: "expert"
---

# Les obstacles cognitifs comme invariants : une hypothèse de 
transférabilité

## Le constat de départ

L'article précédent a montré que la BDI est techniquement agnostique : 
son architecture traite tout flux temporel de manière identique, 
indépendamment de la nature physique des données. Cette propriété 
fonde la transférabilité technique du dispositif.

Mais la transférabilité technique ne suffit pas. Pour que les résultats 
de la recherche doctorale soient généralisables au-delà de l'aquaponie, 
il faut établir que les **obstacles cognitifs** eux-mêmes présentent 
une forme d'invariance — qu'ils se manifestent de manière 
structurellement comparable dans des domaines différents.

C'est cette hypothèse que cet article explore.

## Trois obstacles, une même forme logique

Les travaux de Bachelard (1938) et d'Astolfi (1997) ont montré que les 
obstacles cognitifs ne sont pas des erreurs accidentelles. Ce sont des 
formes de raisonnement qui fonctionnent dans des contextes simples 
mais deviennent des sources d'erreur systématique face à la complexité.

Dix années d'accompagnement longitudinal ont permis d'en identifier 
trois qui se manifestent avec une régularité particulière. Le tableau 
suivant les présente à travers quatre domaines distincts :

| Obstacle | En aquaponie | En électronique | En gestion du trafic | En acoustique |
|----------|-------------|-----------------|---------------------|---------------|
| **Linéarité** | « Plus de nourriture = plus de croissance » (ignore la saturation et la toxicité) | « Plus de tension = plus de courant » (ignore la résistance non linéaire) | « Plus de voies = moins d'embouteillages » (ignore le paradoxe de Braess) | « Plus de puissance = plus de volume perçu » (ignore la courbe logarithmique) |
| **Temporalité** | Ajuste le pH et attend un résultat immédiat (le cycle de l'azote prend 3 à 7 jours) | Modifie un circuit et attend un changement instantané (ignore les constantes de temps RC) | Ajoute une voie et s'attend à un effet immédiat (l'adaptation du trafic prend des semaines) | Baisse le volume et s'attend à un silence immédiat (ignore la réverbération) |
| **Proportionnalité** | Double les poissons, s'attend à devoir doubler la filtration (relation non linéaire) | Double la puissance, s'attend à doubler la chaleur (relation quadratique) | Double les voies, s'attend à doubler le débit (effets de convergence) | Double la distance, s'attend à diviser le son par deux (loi en 1/r²) |

Ce qui frappe dans ce tableau, c'est que **le contenu de l'erreur 
change d'un domaine à l'autre, mais sa forme logique reste 
identique**. L'apprenant en aquaponie qui croit que « plus d'engrais 
= plus de plantes » commet structurellement la même erreur que 
l'apprenant en trafic qui croit que « plus de voies = moins de 
congestion ». Dans les deux cas, il applique un raisonnement linéaire 
à un système non linéaire.

## Ce que l'invariance des obstacles implique

Si cette invariance se confirme empiriquement — ce qui fait partie des 
objectifs de la recherche doctorale — elle a deux implications majeures.

**Première implication : la détection algorithmique est transposable.** 
Si l'obstacle de linéarité a la même signature comportementale quel 
que soit le domaine (l'apprenant cherche une cause unique, ignore les 
rétroactions, prédit un effet proportionnel), alors l'algorithme de 
détection développé pour l'aquaponie peut être adapté à d'autres 
terrains sans être reconstruit. Ce n'est pas le contenu de l'erreur 
que la BDI détecte — c'est sa **structure**.

**Deuxième implication : les KPI systémiques sont génériques.** Les 
indicateurs de performance pédagogique développés dans cette 
recherche — taux d'anticipation, indice de corrélation cognitive, 
trajectoire de transfert — ne mesurent pas des compétences spécifiques 
à l'aquaponie. Ils mesurent des **compétences de raisonnement 
systémique** qui se manifestent face à tout système complexe.

## La transférabilité comme programme de recherche

Il est important de préciser les limites de cette proposition. 
L'invariance des obstacles cognitifs à travers les domaines est, à ce 
stade, une **hypothèse de travail** fondée sur dix ans d'observations 
empiriques, mais qui n'a pas encore été validée par un protocole 
expérimental contrôlé. C'est précisément l'un des objectifs de la 
thèse.

La recherche doctorale vise à :

1. **Documenter** la manifestation des trois obstacles sur le terrain 
   de l'aquaponie (avec des données instrumentées via la BDI)
2. **Caractériser** leur structure formelle (sont-ils réductibles à 
   des patterns identifiables dans les traces d'apprentissage ?)
3. **Tester** — dans un premier temps qualitativement, via le double 
   terrain rural/urbain — si la même structure se retrouve dans des 
   contextes socioculturels différents

L'extension à d'autres domaines de complexité (énergie, algorithmes, 
agroécologie) relève d'un programme post-doctoral. La thèse pose les 
fondements théoriques et méthodologiques ; elle ne prétend pas à une 
démonstration universelle.

## En résumé

| Ce qui varie d'un domaine à l'autre | Ce qui reste invariant |
|--------------------------------------|------------------------|
| La nature physique du flux (pH, volts, véhicules, dB) | La structure temporelle de la donnée (série, seuil, dérive) |
| Le contenu spécifique de l'erreur | La forme logique de l'obstacle (linéarité, temporalité, proportionnalité) |
| Le contexte d'apprentissage (Living Lab, atelier, route, studio) | Les KPI de raisonnement systémique |
| Les capteurs et interfaces | Le pipeline de détection et d'étayage de la BDI |

La transférabilité de cette recherche repose sur une double 
invariance : **technique** (l'architecture agnostique de la BDI) et 
**cognitive** (la forme structurelle des obstacles). Vérifier cette 
double invariance est l'un des enjeux centraux de la thèse doctorale.

---

*Cet article conclut le diptyque sur l'agnosticisme technologique. 
L'article précédent décrit l'architecture technique de la BDI. Pour 
le cadre épistémologique, voir la série « De la productique à la 
didactique ».*

*Références :*
- *Astolfi, J.-P. (1997). L'erreur, un outil pour enseigner. ESF.*
- *Bachelard, G. (1938). La formation de l'esprit scientifique. Vrin.*
