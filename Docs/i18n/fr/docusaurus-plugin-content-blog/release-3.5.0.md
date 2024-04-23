---
slug: release-3-5-0
date: 2023-12-08
title: Version 3.5.0
authors: [momo]
tags: [release]
draft: false
---

:::warning Traduction incomplète !
:::

## Résumé

C'est le tout premier SDK qui fonctionne avec Unity 2022 !

<!--truncate-->

## Notes sur l'Utilisation

Vous aurez besoin de mettre à jour votre Creator Companion à la version 2.2.0 afin de pouvoir gérer l'éditeur Unity 2022 pour créer des projets compatibles Unity 2022. Vous pouvez vérifier votre version actuelle en cliquant sur "Settings", puis en regardant dans le coins supérieur droit.

## Nouvelles Fonctionnalités

* Il y a une nouvelle "Scène par Défaut VRChat" que vous pouvez choisir lors de la création d'une nouvelle scène avec tout les éléments de base nécessaires pour un monde VRChat.
* `OnScreenUpdateEvent` est un nouvelle événement déclenché dans Udon lorsque un utilisateur visite depuis un appareil mobile. Il contient des informations sur l'Orientation et la Résolution de l'écran lorsque qu'il entre dans un monde, ou à chaque fois que l'Orientation de leur appareil change.

## Changements

* Passe de .NET Framework 4.x à .NET Standard 2.1.
* Restaure les exemples UdonSharp, désormais répertoriés sous World Samples.
* Restaure les anciens fichiers d'UdonSharp et de ClientSim.

## Problèmes Connus

* La première fois que vous ouvrez une Scène et sélectionnez un GameObject dans un prefab avec un U# Behaviour, l'interface graphique pour le composant situé directement au dessous du U# Behaviour n'affichera pas son interface graphique. Désélectionner et re-sélectionner le prefab règle cela.
* les particules tampons (Buffer Particles) ne fonctionne pas comme elles le faisait dans Unity 2019, [il y a une solution de contournement pour les réparer, par hfcRed, un membre de la communauté, ici](https://x.com/hfcRedddd/status/1696915379090604179).
* L'editor peut planter si on met à jour une référence d'un shader graph avec un autre shader en utilisant UsePass. C'est une problème avec Unity 2022.3.6f1 et c'est réglé dans Unity 2022.3.14f1.
* Unity 2022 cause parfois un l'arrêt du debugger de Rider pour une exceptions non gérée dans l'IMGUI d'Unity.
	* Veuillez vous référer à [cette solution de contournement](https://forum.unity.com/threads/rider-debugger-breaks-on-unhandled-exception.1135879/#post-7305256) et au [bug tracker de Jetbrains](https://youtrack.jetbrains.com/issue/RIDER-64944) pour plus d'information.
* Les Audio Sources spatialisées peuvent créer des avertissements en entrant en mode Play, ou en ajustant leur paramètres.