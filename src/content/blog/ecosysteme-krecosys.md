---
title: "L'écosystème Krecosys : une infrastructure de recherche ouverte"
description: "Six dépôts, une architecture modulaire, une documentation publique. Krecosys n'est pas un produit, c'est un laboratoire numérique pour la recherche en éducation."
pubDate: 2026-04-27
author: "A. Elbah"
keywords: "écosystème, infrastructure, open source, science ouverte, BDI, DBR, reproductibilité, modularité"
niveau: "expert"
---

# L'écosystème Krecosys : une infrastructure de recherche ouverte

## Un laboratoire, pas un produit

Souvent, on me demande : « Quel est votre produit ? »

Je ne réponds pas à cette question, car elle est mal posée.

Krecosys n’est pas un produit. Ce n’est pas une solution clé en main, un logiciel à vendre, un service à commercialiser. **Krecosys est une infrastructure de recherche.**

Un laboratoire de physique a des instruments (lasers, capteurs, enceintes blindées). Un laboratoire de biologie a des microscopes, des éprouvettes, des séquenceurs. Mon laboratoire a des dépôts GitHub, des scripts Python, des configurations Docker, des schémas d’architecture.

**L’infrastructure est ce qui rend la recherche possible. Elle n’est pas l’objet de la recherche.**

## Six briques, une cohérence

L’écosystème Krecosys repose sur six dépôts publics, chacun remplissant une fonction spécifique dans mon dispositif de recherche.

| Dépôt | Fonction dans l’infrastructure | Nature |
|-------|--------------------------------|--------|
| **living-lab-sensors** | Captation – le corps du système (ESP32, capteurs, MQTT) | Acquisition matérielle |
| **BDI-prototype** | Traitement – le cerveau (collecte, simulation, MQTT) | Backend Python |
| **obstacle-detection** | Intelligence – l’analyse cognitive (algorithmes, linéarité, temporalité) | Logique métier |
| **dashboard** | Visualisation – la conscience (Grafana, InfluxDB, alertes) | Interface & stockage |
| **docs** | Mémoire – la théorie (schémas, protocoles, manuels) | Documentation |
| **dark-debris (kreco6.com)** | Vitrine – la preuve sociale (site Astro, articles, portfolio) | Communication scientifique |

**Chaque brique est modulaire, réutilisable, documentée. L’ensemble forme un système complet, de la captation physique à la publication des résultats.**

## La modularité comme condition de la DBR

Cette architecture modulaire n’est pas un luxe d’ingénieur. C’est une nécessité épistémologique pour la Design-Based Research (DBR).

Dans une démarche DBR, le dispositif s’adapte, s’améliore, se transforme au fil des cycles d’itération.

- Si l’algorithme de détection des obstacles évolue, je modifie `obstacle-detection`, sans toucher aux capteurs.
- Si le protocole MQTT change, je modifie `BDI-prototype`, sans réécrire le dashboard.
- Si j’ajoute un nouveau capteur, je modifie `living-lab-sensors`, sans toucher à la base de données.

**La modularité permet l’apprentissage du système scientifique. Comme l’apprenant, l’infrastructure doit pouvoir évoluer sans tout casser.**

## La science ouverte comme condition de la preuve

Tous mes dépôts sont **publics**, sous licence libre (MIT pour le code, CC BY-SA pour la documentation). Ce choix n’est pas anecdotique. Il est fondé sur une conception de la science comme bien commun.

| Principe de science ouverte | Implication dans Krecosys |
|-----------------------------|---------------------------|
| **Reproductibilité** | Tout chercheur peut cloner les dépôts, exécuter les scripts, reproduire mes analyses |
| **Transparence** | Le code n’est pas une boîte noire. Les algorithmes de détection sont lisibles, commentés, critiquables |
| **Pérennité** | Les dépôts sont archivés sur Zenodo avec DOI. La recherche ne disparaît pas avec mon ordinateur |
| **Accessibilité** | Les schémas, protocoles et manuels sont en accès libre, sans paywall |
| **Communauté** | D’autres chercheurs peuvent forker, améliorer, adapter mes travaux à leurs propres terrains |


## Du code à la thèse : une chaîne de preuve

L’écosystème Krecosys ne s’arrête pas au code. Il articule technique, documentation, publication et réflexion théorique.

| Échelon | Support | Contenu |
|---------|---------|---------|
| **Captation** | `living-lab-sensors` | Le code qui tourne sur l’ESP32 |
| **Traitement** | `BDI-prototype` | Les scripts qui collectent, simulent, publient |
| **Analyse** | `obstacle-detection` | Les algorithmes qui détectent les obstacles |
| **Stockage & vue** | `dashboard` | La base InfluxDB et les graphes Grafana |
| **Doc technique** | `docs` | Les schémas, protocoles, manuels |
| **Doc scientifique** | `kreco6.com/blog` | Les articles de recherche (DBR, obstacles, agnosticisme) |
| **Preuve sociale** | `kreco6.com/links` | Les lettres d’étudiants, CV, recommandations |
| **Thèse** | Dossier ED58 | La synthèse théorique et méthodologique |

**Chaque échelon rend le suivant possible. Le code alimente les données, qui alimentent les analyses, qui alimentent les articles, qui alimentent la thèse.**

## Une infrastructure pour la recherche, pas pour le marché

Cette précision est cruciale pour que le jury (ED58, commission VAPP) comprenne la nature de mon travail.

- Je ne développe pas un logiciel pour le vendre.
- Je ne construis pas un site pour attirer des clients.
- Je ne rédige pas des articles pour du « marketing de contenu ».

**Je construis une infrastructure pour faire de la recherche. Et je la rends publique parce que la science se fait dans la transparence ou ne se fait pas.**

Si demain, un laboratoire souhaite adapter mon dispositif à l’étude des réseaux électriques, il peut le faire. Si un chercheur veut reproduire mon expérimentation d’apprentissage des obstacles cognitifs, il peut le faire. Si un étudiant veut comprendre comment fonctionne une Base de Données Intelligente, il peut cloner, lire, exécuter.

**C’est cela, une infrastructure de recherche ouverte : non pas un produit fini, mais un point de départ.**

## En résumé

| Caractéristique | Ce que cela signifie pour Krecosys |
|----------------|-----------------------------------|
| **Infrastructure** | Un ensemble de briques modulaires, pas un logiciel monolithique |
| **Recherche** | Un outil pour produire des connaissances, pas un produit pour le marché |
| **Ouverte** | Tous les dépôts sont publics, sous licence libre |
| **Documentée** | Schémas, manuels, protocoles accessibles (dépôt `docs`) |
| **Reproductible** | DOI Zenodo, scripts exécutables, données anonymisées |
| **Évolutive** | La modularité permet l’itération, cœur de la DBR |

**Krecosys, c’est mon laboratoire. Mais c’est aussi une invitation – à vérifier, à reproduire, à s’approprier, à dépasser. La science ne se construit pas dans la forteresse. Elle se construit dans l’écosystème.**

---

📚 *Article précédent : « L'agnosticisme technologique : pourquoi la BDI n'a pas besoin de savoir ce qu'elle mesure »*  
📚 *Article suivant : (Phase 3 – dernier) – « Pour une didactique des flux : vers une science de l'apprentissage systémique » – à venir.*

*Cette série (Phase 3) présente l’architecture matérielle, logicielle et épistémique de mon dispositif de recherche.*