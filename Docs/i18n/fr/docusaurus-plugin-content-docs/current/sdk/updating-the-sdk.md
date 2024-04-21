---
title: "Mise à jour du SDK"
slug: "updating-the-sdk"
hidden: false
createdAt: "2019-07-24T03:33:36.520Z"
updatedAt: "2023-02-17T16:00:15.490Z"
---
Si vous avez besoin de mettre à jour votre SDK, il est important de suivre ces étapes pour vous assurer que la mise à jour se déroule correctement et que vous n'avez pas de fichiers anciens ou en conflit.

## Contrôle de version
Si vous savez comment l'utiliser, vous pourriez trouver avantageux d'utiliser un logiciel de contrôle de version comme [Git](https://git-scm.com/) pour gérer votre projet. Vous n'avez pas besoin de télécharger votre dépôt sur Github ou un service similaire pour bénéficier des avantages du contrôle de version. Créez un commit avant de mettre à jour les SDK, juste pour être sûr.

## VRChat Creator Companion
Garder votre SDK est extrêmement facile avec VCC. Consultez la [documentation du VRChat Creator Companion](https://vcc.docs.vrchat.com/guides/getting-started) pour apprendre à l'utiliser !

## Migration vers le VCC
Si vous souhaitez apprendre comment migrer votre projet pour utiliser le VCC, consultez le guide [ici](https://vcc.docs.vrchat.com/vpm/migrating).

## Mises à jour manuelles
Si vous utilisez le VCC, vous n'avez pas à vous soucier des mises à jour manuelles.

## Ancien SDK3

:::caution 
Ces instructions s'appliquent uniquement aux utilisateurs de notre ancien SDK (`Assets\VRCSDK`).
Si votre SDK se trouve dans votre dossier `Packages` (`Packages\com.vrchat.base`), ne suivez pas les instructions ci-dessous.
:::

**Pour le SDK3, vous devriez pouvoir le mettre à jour en important simplement le nouveau SDK par-dessus l'ancien, également connu sous le nom de mise à niveau sur place.** Cela est particulièrement important pour le SDK3-Avatars, car vous pourriez perdre des State Behaviors sur vos animators si vous faites une mise à jour incorrecte !

Si vous voulez vraiment être prudent, sauvegardez toujours vos projets avant de mettre à jour le SDK.

### SDK3 - World
1. Fermez Unity.
2. Sauvegardez votre projet Unity ! Vous n'avez pas besoin de sauvegarder votre dossier Library, car ces fichiers sont générés automatiquement par Unity.

:::caution Mise à niveau du SDK3 antérieur à 2020.3.2

**C'est une étape peu courante et vous ne devriez probablement pas avoir à la faire.**

Si vous mettez à jour depuis un SDK plus ancien que 2020.3.2, accédez au dossier `Assets` de votre projet et supprimez les dossiers `VRCSDK` et `Udon`, ainsi que les fichiers `VRCSDK.meta` et `Udon.meta`.
:::

3. Ouvrez votre projet Unity.
4. Importez le nouveau SDK3 - World par-dessus l'ancien.

### SDK3 - Avatars
:::danger Ne faites pas de "Réinstallations par suppression" pour les SDK3 - Avatars !

***Si vous supprimez les dossiers du SDK avec Unity fermé et que vous ouvrez Unity sans le SDK installé, vous perdrez les State Behaviors.*** Ils sont fragiles et ne persistent pas aux mises à niveau complètes par suppression. Assurez-vous de sauvegarder vos projets régulièrement, et de sauvegarder/documenter vos configurations de state behavior.

Si vous **devez** effectuer une réinstallation complète par suppression de votre package SDK3 - Avatars, sauvegardez d'abord votre projet. Vous devrez ensuite configurer à nouveau vos  State Behaviors, alors assurez-vous de les avoir bien documentés.
:::
1. Fermez Unity.
2. Sauvegardez votre projet Unity ! Vous n'avez pas besoin de sauvegarder votre dossier Library, car ces fichiers sont générés automatiquement par Unity.
3. Ouvrez votre projet Unity.
4. Importez le nouveau SDK3 - Avatars par-dessus l'ancien. Si vous obtenez des erreurs après l'importation, essayez de redémarrer Unity par la suite.

:::note Erreurs attendues du SDK3 lors de la mise à niveau des Avatar Dynamics

Il est normal d'avoir une poignée d'erreurs lorsque vous mettez à jour pour la première fois le SDK3 pour les Avatars vers le SDK Avatar Dynamics. Cela est dû au fait que le SDK installe les packages Burst et Mathematics lors du processus d'installation, et Unity se précipite un peu pour les importer avant.

Si vous effacez les erreurs dans la console ou redémarrez Unity, elles devraient disparaître.
:::

### SDK3 - Avatars - Processus de Projet Séparé
Si vous rencontrez des problèmes lors de la mise à niveau via le processus ci-dessus, essayez ceci à la place :

1. Fermez Unity.
2. Créez un nouveau projet vide.
3. Importez le nouveau package SDK3 - Avatars dans ce projet.
4. Fermez ce projet Unity.
5. À l'aide de l'Explorateur (n'ouvrez pas encore Unity !), supprimez les dossiers VRCSDK3 du projet que vous mettez à niveau. Jusqu'à ce que ce guide le précise, ***n'ouvrez pas Unity.***
6. À partir de votre nouveau projet vide où vous avez importé le SDK, copiez les dossiers VRCSDK3 dans votre projet que vous mettez à niveau.
7. Une fois la copie terminée, ouvrez Unity et ouvrez votre projet mis à jour. Vous pouvez supprimer le projet vide par la suite.

### Processus de Mise à jour Avancé

Si vous réinstallez le SDK dans un projet contenant un monde avec des configurations de déclencheurs complexes, voici une manière plus sûre de mettre à jour votre SDK.

1. Fermez Unity.
2. Sauvegardez le projet dans un autre dossier (ne sauvegardez pas le dossier Library, car ces fichiers sont générés automatiquement par Unity).
3. Supprimez les dossiers SDK et Plugins, ainsi que les fichiers .META associés.
4. Créez un nouveau projet Unity vide.
5. Installez le dernier SDK sur le nouveau projet.
6. Copiez les dossiers SDK/Plugin nouvellement ajoutés ainsi que les fichiers .META associés du nouveau projet dans votre projet d'origine.
7. Terminé. Vous pouvez maintenant ouvrir votre projet mis à jour, et il ne devrait pas planter, peu importe la complexité de vos configurations de déclencheurs !

## Mise à jour d'Unity

Si vous mettez à jour à partir d'une version précédente d'Unity, nous avons un [guide de mise à jour](/sdk/migrating-to-a-newer-minor-unity-version) vers la dernière version prise en charge !