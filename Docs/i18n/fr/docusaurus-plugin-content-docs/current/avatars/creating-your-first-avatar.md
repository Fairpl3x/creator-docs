---
title: "Créer Votre Premier Avatar"
slug: "creating-your-first-avatar"
hidden: false
createdAt: "2017-09-10T16:36:41.979Z"
updatedAt: "2023-03-15T23:26:32.023Z"
sidebar_position: -1
---
## Prérequis : Configurez d'abord le SDK !

Avant de commencer, assurez-vous d'avoir un [projet Unity avec le SDK configuré](/sdk).

Après avoir configuré le SDK, consultez notre **exemple d'avatar**. Ouvrez votre projet d'avatar et allez dans `Packages > VRChat SDK - Avatars > Samples > Dynamics > Robot Avatar`.

![L'exemple d'avatar peut vous aider à comprendre à quoi pourrait ressembler un projet d'avatar VRChat complet.](/img/avatars/creating-your-first-avatar-3dfc191-Unity_YrUFLEWWDe.png)

:::note Besoin d'aide ?

Créer votre premier avatar peut être difficile. Si vous êtes bloqué, voici où vous pouvez obtenir de l'aide :
- Lisez notre documentation (vous êtes en train de le faire !)
- Visitez notre [forum officiel](https://ask.vrchat.com/)
- Rejoignez notre [serveur Discord](https://discord.com/invite/vrchat)
:::

## Étape 0 - Créer un modèle !

Bien que la plupart des utilisateurs choisissent plutôt de trouver un modèle (voir étape 1), il est TOTALEMENT possible de créer un modèle d'avatar à partir de zéro. Vous pouvez utiliser n'importe quel logiciel 3D que vous voulez, du moment qu'il prend en charge l'exportation d'un fichier FBX avec une armature ! Blender et Maya sont des choix très courants.

Soyons tout à fait clairs : pour les personnes qui n'ont jamais fait de modélisation 3D auparavant, c'est le début d'un long voyage. Apprendre à modéliser en 3D est complexe, tout comme apprendre à riguer et texturer. Créer un personnage rigué combine _toutes ces compétences_!

Si vous choisissez de créer votre modèle, nous vous suggérons de commencer par quelque chose de simple. Même si vous n'avez pas l'air aussi impressionnant que les modèles préfabriqués, c'est _votre_ modèle, et vous pouvez en faire ce que vous voulez.

Pour vous aider à démarrer, voici un tutoriel axé sur VRChat créé par l'un de nos membres de la communauté:

- [Rainhet's Blender 3D Virtual Avatar Tutorial 2022](https://www.youtube.com/watch?v=OKWsUAIsgpg&list=PL2EEbgwoJzdsC9wfKA2ZO2kAf4HDqC8a8&index=1) - Le tutoriel de Rainhet est détaillé, et elle explique tout en détail tout au long du processus.
- [Rainhet's 3D Avatar Class](https://www.youtube.com/watch?v=w-yhjgnhaNw) - Une version plus ancienne de la série de tutoriels de Rainhet. Il existe également une [version de 10 minutes](https://www.youtube.com/watch?v=in9rNze4FD4) qui vous donne une vue d'ensemble du processus.

Si vous avez un tutoriel que vous aimeriez suggérer, veuillez le soumettre à nos documents via le lien `Éditer cette page` !

## Étape 0.5 - Utiliser un créateur d'avatar !

Vous pouvez également essayer d'utiliser un créateur d'avatar ! Il en existe plusieurs, de différentes complexités.

### Je veux basiquement un créateur de personnage RPG, puis cliquer sur envoyer

[Page des systèmes d'avatar VRChat](https://hello.vrchat.com/avatar-systems) - Nous répertorions plusieurs créateurs faciles à utiliser sur cette page. Elle est gardée à jour.

### OK, donnez-moi quelques curseurs et la possibilité de peindre des éléments

Vous voudrez peut-être jeter un coup d'œil à [VRoid Studio](https://vroid.com/en/studio), qui est également disponible sur Steam. Il s'agit d'un créateur de personnages anime principalement destiné à créer des modèles de style VTuber, mais il est très flexible ! Pour quelques exemples de ce qu'il peut faire, consultez le [subreddit VRoid](https://www.reddit.com/r/VRoid/).

:::note Une note à propose de VRoid Studio

VRoid Studio génère des avatars au format **.vrm**, qui n'est pas nativement pris en charge par Unity ! Si vous souhaitez importer directement un modèle de VRoid Studio pour l'utiliser dans VRChat, vous voudrez peut-être vous renseigner sur le convertisseur [VRMtoVRChat converter](https://github.com/esperecyan/VRMConverterForVRChat) créé par la communauté pour les avatars .vrm. Assurez-vous de [lire la documentation de ce plugin](https://www.store.vket.com/ec/items/122/detail/) si vous l'utilisez.
:::

## Étape 1 - Trouver un modèle

Discutablement la partie la plus importante, vous devez trouver un modèle 3D à utiliser comme avatar. Comme il s'agit de votre premier avatar, nous vous recommandons d'en obtenir un depuis l'[Asset Store d'Unity](https://assetstore.unity.com/), car ils sont généralement entièrement riggés, ce qui signifie que vous n'avez rien de spécial à faire pour les envoyer. Si vous décidez d'obtenir votre modèle en dehors de l'asset store, assurez-vous que le modèle est entièrement riggé et qu'il est dans un format accepté par Unity.

**Assurez-vous d'obtenir une licence d'utilisation du modèle que vous souhaitez utiliser.** Les artistes passent des centaines d'heures sur leurs modèles. Les utiliser sans licence constitue une violation des Conditions d'utilisation de VRChat, ainsi qu'une violation des droits de l'auteur du modèle.

Vérifiez que le modèle que vous utilisez comporte moins de 70'000 triangles (20'000 pour VRChat sur Meta Quest). Sur PC, vous pouvez téléverser des modèles dépassant cette limite, mais l'avatar sera automatiquement marqué comme ayant des performances "Very Poor", car un nombre excessif de polygones peut entraîner des problèmes de performance.

## Étape 2 - Importer le modèle dans votre projet

Maintenant que vous avez trouvé le modèle que vous souhaitez, il est temps de l'importer dans votre projet. Si vous l'avez acquis depuis l'asset store, vous pouvez le télécharger et l'importer directement dans votre projet. Si vous avez obtenu le modèle ailleurs, vous devez l'importer, ainsi que toutes les textures associées, dans votre dossier "Assets".

Si vous importez votre modèle depuis un éditeur 3D, veuillez vous assurer de prendre en compte la différence entre les systèmes de coordonnées. Par exemple, le système de coordonnées par défaut de [**Blender**](https://blender.org) diffère de celui de Unity. Vous devez exporter les fichiers FBX depuis Blender et définir l'export tel quel:

![image](/img/avatars/creating-your-first-avatar-b066a1b-2022-05-27_11-13-48_blender.png)

Une fois que le model est dans vos assets, sélectionnez-le et assurez-vous que les paramètres sont corrects. Sous l'onglet "Rig" de l'inspecteur, assurez-vous que **Animation Type** est défini sur `Humanoid`.

## Étape 3 - Ajoutez le modèle à une scène

Avec le modèle dans vos assets et et avec les paramètres correctes sur celui-ci, vous voudrez ensuite l'ajouter dans une scène. Pour ce faire, faites-le glisser dans la hiérarchie ou dans la scène. Nous vous recommandons d'avoir une scène par avatar et de le placer à la position 0, 0, 0. Si l'avatar n'est pas droit, pivotez-le pour qu'il le soit. Par ailleurs, assurez-vous que l'avatar ne soit pas trop petit, ou plus grand que 5x5x5 mètres, vous pouvez utiliser un cube Unity par défaut, qui mesure 1x1x1 mètre, pour comparer.

:::caution Optimisation de l'Avatar

Il est très important que votre avatar soit optimisé pour ne pas causer de baisse de FPS, autant pour vous que pour les autres. Le SDK vous avertira si quelque chose est de travers. Consultez nos [Conseils d'Optimisation d'Avatar](/avatars/avatar-optimizing-tips) pour découvrir des méthodes visant à améliorer le classement de performance de votre avatar.
:::
## Étape 4 - Ajouter un Avatar Descriptor

Après l'avoir ajouté dans la scène, on va ajouter un composant `VRC Avatar Descriptor` et configurer ses paramètres.
1. Sélectionnez l'avatar dans votre hiérarchie.
2. Cliquez sur `Add Component` dans l'inspecteur.
3. Recherchez le composant `VRC Avatar Descriptor` et ajoutez-le.
4. Personnalisez ses paramètres, expliqués ci-dessous.

![Ajoutez un `VRC Avatar Descriptor` pour commencer avec votre avatar.](/img/avatars/creating-your-first-avatar-fd027ea-Unity_qH7NJfAzzn.png)

### Position de la vue

Tout d'abord, vous voudrez définir la position de la vue. C'est là que votre caméra sera positionnée dans VRChat. Vous pouvez le voir sous forme d'une petite sphère blanche dans la scène. Si votre avatar a une tête, la meilleure position pour la vue se situe entre les yeux. Si votre avatar n'a pas de tête, placez-la où vous le jugez approprié.
![Utilisez le composant Avatar Descriptor pour configurer votre avatar pour VRChat. Assurez-vous d'ajuster la position de la vue !](/img/avatars/creating-your-first-avatar-5afcbf1-Unity_lsTjP8qDqO.png)

### Mode de synchronisation labiale

Lorsque vous parlez, vous pouvez faire réagir automatiquement la bouche de votre avatar (ou tout autre chose). Ouvrez votre `VRC Avatar Descriptor` et développez le menu déroulant `LipSync`. Il y a cinq modes parmi lesquels choisir :

#### Default

![Appuyer sur `Auto Detect !` est généralement suffisant pour permettre à votre avatar VRChat de réagir à votre parole.](/img/avatars/creating-your-first-avatar-d69289f-Unity_FgsAtEU75F.png)

Appuyez sur `Auto Detect!` pour permettre au SDK VRChat de détecter automatiquement le mode de synchronisation labiale approprié. Le mode passera ensuite à l'un des modes ci-dessous.

#### Jaw Flap Bone

Si votre avatar utilise un seul os pour animer la mâchoire, vous pouvez le spécifier ici. La mâchoire de votre personnage s'ouvrira en fonction du volume de votre voix dans VRChat. Assurez-vous d'avoir configuré l'os de la mâchoire dans le rig humanoïde d'Unity pour votre avatar.

#### Viseme Blend Shape (recommandé)

Les Blendshapes/shape keys (nommés différemment en fonction du logiciel que vous utilisez) modifient le maillage en fonction des positions des sommets. De nombreux modèles utilisent cela pour des animations détaillées lors de la parole. Si votre modèle en dispose, vous devriez les utiliser !

Nous utilisons la bibliothèque audio Oculus pour détecter et définir les visèmes. [Vous pouvez voir une référence de à quoi ressemblent tous les visèmes et les sons qui les déclenchent ici](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference).

VRChat peut généralement détecter automatiquement les visèmes de votre avatar. Sinon, vous pouvez choisir les visèmes dans la liste déroulante.  
![Le mode `Viseme Blend Shape` est la méthode la plus courante pour faire bouger le visage de votre personnage lorsque vous parlez.](/img/avatars/creating-your-first-avatar-6272723-Unity_w5nQONGtcb.png)

:::caution Forme SIL

Unity supprimera les shape keys/blendshapes vides lors de l'importation, alors assurez-vous que votre clé de forme "SIL" (la clé de forme que fait votre bouche lorsque aucun son n'est détecté, mais microphone actif - comme l'espace entre les mots) déplace un seul sommet d'une quantité très petite et imperceptible. Cela empêchera Unity de supprimer cette clé.
:::

:::note Conseil de performance pour les visèmes !

Si vous êtes un créateur d'avatars, envisagez de diviser votre avatar en deux skinned meshes - un pour votre corps et un pour votre tête/visage. Le coût en performances des blendshapes dépend de la quantité de sommets qu'ils affectent. Garder les blendshapes sur un maillage de tête séparé et avoir moins de blendshapes sur le maillage du corps peut améliorer les performances de votre avatar.
:::

##### Jaw Flap Blend Shape

Si votre avatar utilise uniquement une blendshape pour animer sa bouche, configurez-le ici. Il fonctionnera de manière similaire à `Jaw Flap Bone` en animant la blendshape de la mâchoire au lieu d'un os de la mâchoire.

##### Viseme Parameter Only

Si vous êtes un créateur avancé, vous pouvez utiliser ce mode pour contrôler la réaction de votre avatar à la parole avec les [Paramètres d'Animator](/avatars/animator-parameters) intégrés à VRChat.

## Étape 5 - Accéder à l'onglet de génération / Vérifier si l'avatar est ok

Ensuite, nous voudrons vérifier que tout est en ordre dans la fenêtre de génération. Pour ce faire, ouvrez `VRChat SDK > Show Control Panel`. À l'intérieur, vous devriez voir le GameObject de l'avatar mentionné, avec un bouton **Build & Publish** en dessous. Entre les deux, vous verrez des paramètres, des balises de contenu, un rank de "Performance globale", des erreurs et des avertissements.

![Le panneau de génération du SDK VRChat.](/img/avatars/build-panel-avatars-2023.png)

Suivez simplement les étapes du panneau de génération du SDK VRChat :
- Donnez un nom à votre avatar. Vous pouvez également ajouter une description.
- Assurez-vous d'ajouter les balises de contenu appropriées à votre avatar pour respecter le [système de filtrage de contenu de VRChat](https://hello.vrchat.com/blog/content-gating).
- Choisissez la visibilité de votre avatar. Les avatars privés ne peuvent pas être clonés ou utilisés par d'autres utilisateurs de VRChat.
- Sélectionnez une image miniature. Vous pouvez choisir une image ou utiliser une capture de votre scène Unity.
- Lisez la section `Validation`. Elle contient de nombreuses erreurs et avertissements utiles. Par exemple, le SDK peut vous avertir si votre avatar a trop de polygones, que vous pouvez corriger en optimisant le(s) maillage(s). Si vous ne parvenez pas à optimiser le maillage, vous devrez peut-être revenir en arrière et choisir un autre modèle.
- Lorsque vous êtes prêt, continuez avec la génération de votre avatar.

## Étape 6 - Générer et mettre en ligne l'avatar !

Maintenant, tout est prêt. Appuyez sur le bouton **Build & Publish**, et le SDK commencera à construire et à mettre en ligne votre avatar. Avant d'envoyer votre avatar, assurez-vous qu'il est conforme aux [Conditions d'utilisation](https://hello.vrchat.com/legal) et aux [Règles de la communauté](https://hello.vrchat.com/community-guidelines) de VRChat.

Après avoir mis en ligne votre avatar, il devrait être disponible dans VRChat. Vous pouvez également voir votre avatar dans `VRChat SDK > Show Control Panel > Content Manager`.

Vous pouvez également tester votre avatar sans l'envoyer. Pour ce faire, cliquez plutôt sur **Build & Test**. Votre avatar apparaîtra dans la section "Other" dans le menu Avatars de VRChat. Les avatars de test ne sont visibles que par vous. Pour que les autres joueurs puissent voir votre avatar, vous devez l'envoyer.

## Étape 7 - Profitez de votre avatar !

Félicitations pour la création de votre premier avatar ! Nous espérons que tout s'est déroulé comme il faut. Si vous avez besoin d'aide, n'hésitez pas à visiter notre [Forum de questions](https://ask.vrchat.com/) ou notre [serveur Discord](https://discord.com/invite/vrchat).

Créer et mettre en ligne des avatars VRChat peut être fun et créativement gratifiantes. Si vous souhaitez améliorer vos compétences en création d'avatars, consultez le reste de notre [documentation sur les avatars](https://creators.vrchat.com/avatars/).

Pourquoi ne pas en apprendre davantage sur :
- [L'optimisation de votre avatar ?](/avatars/avatar-optimizing-tips)
- [Le système de classement des performances de VRChat ?](/avatars/avatar-performance-ranking-system)
- [Avatar Dynamics ?](/avatars/avatar-dynamics/)
- [La création de votre premier monde ?](/worlds/creating-your-first-world)