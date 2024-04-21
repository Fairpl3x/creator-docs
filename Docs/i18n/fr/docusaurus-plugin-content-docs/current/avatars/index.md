---
title: "Avatars"
excerpt: "Découvrez le SDK pour les avatars 3.0 de VRChat"
hidden: false
createdAt: "2020-07-08T17:39:44.315Z"
updatedAt: "2023-04-03T18:46:53.072Z"
sidebar_position: 0
---

VRChat vous permet de créer et de mettre en ligne des avatars personnalisés!

# Créer des Avatars

Pour commencer, consultez [Créer votre premier avatar](/avatars/creating-your-first-avatar).

Il y a toute une catégorie "Avatars" dans la barre latérale à explorer. Voici quelques-unes des pages les plus importantes et impactantes:

- [Exigences de l'Armature](/avatars/rig-requirements) explique comment configurer la hiérarchie de votre modèle 3D pour VRChat.
- Le [Système de Classement des Performances des Avatars](/avatars/avatar-performance-ranking-system) explique comment certains avatars obtiennent un niveau de performance "Excellent", et d'autres "Very Poor".
- [Conseils d'Optimisation des Avatars](/avatars/avatar-optimizing-tips) - Maintenant que vous savez `pourquoi`, consultez cette page pour apprendre comment récupérer tous vos FPS.
- Continuez à lire cette page pour en savoir plus sur les concepts importants du SDK Avatars 3.0.

## C'est quoi Avatars 3.0?

**Avatars 3.0** est notre nom pour toutes les fonctionnalités disponibles pour les avatars dans VRChat. Les fonctionnalités d'AV3 sont axées sur l'amélioration des expression, des performances et des capacités des avatars dans VRChat.

Avatars 3.0 est lourdement intégré avec le [Menu d'Action](https://docs.vrchat.com/docs/action-menu) pour contrôler et interagir avec l'avatar que vous portez. Il est probablement préférable de jouer et d'essayer le Menu d'Action avant de créer un avatar AV3!

## Prérequis

- [Installer et configurer le SDK Avatars VRChat](/sdk)
- [Créer votre premier avatar](/avatars/creating-your-first-avatar)

## Comprendre les Concepts

Pour comprendre et utiliser Avatars 3.0, vous devez connaître quelques concepts. Ces concepts vous aideront à comprendre la construction des avatars, comment les assembler au mieux, et l'utilisation prévue de différents systèmes.

### Systèmes Unity

Ce document est rédigé en supposant que vous avez quelques connaissances sur les [Animators Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html). En particulier, vous devez vous assurer d'avoir une connaissance de base du fonctionnement pour:

- Les Animateurs et les animations
- Les Layers d'Animateur, les layer weights, et les blending
- Les States et les transitions
- Les paramètres de l'Animateur
- Les State behaviors
- Les masques d'Avatar

Il peut également être utile de connaître des choses comme:

- Le temps de sortie d'un State
- Le temps de boucle pour les animations
- (Avancé) La synchronisation du temps entre les Layers
- (Avancé) Les Blend trees

### Bases

Avec Avatars 3.0, vous pouvez créer rapidement un avatar de base avec un mouvement simulé des yeux et des visèmes.

1. Importez votre avatar, riggé en tant qu'humanoïde. Configurez vos matériaux, etc.
2. Ajoutez le composant Avatar Descriptor.
3. Définissez les os des yeux, si vous souhaitez un mouvement simulé des yeux.
4. Définissez le type de visèmes, si vous souhaitez des visèmes. Attribuez l'os de la mâchoire dans l'écran de configuration du rig, ou définissez vos visèmes par blendshapes. Comme dans Avatar 2.0.
5. Configurez votre point de vue.
6. Générez et envoyez!

Si vous créez un avatar non-humanoïde, veuillez lire la section sur les avatars génériques ci-dessous.

Vous avez terminé! Cela créera un avatar basique avec des gestures et des actions par défaut. Il y a quelques fonctionnalités intégrées que vous pouvez exploiter, donc même si quelqu'un intègre un avatar avec des blendshapes/os nommés d'une certaine manière, vous obtiendrez quelques fonctionnalités de base d'Avatar 3.0.

Cependant, même avec ces systèmes de base améliorés, il existe de nouvelles fonctionnalités.

### Test Local d'un Avatar

Avez-vous déjà voulu itérer et tester un avatar sans avoir à le téléverser? Eh bien, avec les Avatars 3.0, c'est désormais possible!

Dans l'onglet `Builder` du panneau de contrôle du SDK VRChat, vous pouvez maintenant sélectionner `Build & Test` dans la section `Offline Testing`. Lorsque vous cliquez dessus, votre avatar sera généré, puis copié dans un dossier.

Lorsque vous lancez VRChat, vous pourrez accéder à cet avatar localement en regardant dans la section `Other` du menu des Avatars! Uniquement vous serez en mesure de le voir, mais vous pouvez apporter des modifications à votre avatar, cliquer à nouveau sur `Build & Test`, et après une courte génération, votre avatar sera mis à jour. Il vous suffit de re-sélectionner l'avatar dans votre menu et de cliquer à nouveau sur `Change`, et vous passerez sur la nouvelle version de l'avatar.

Cet avatar est _uniquement_ visible par vous! Pour les autres, vous aurez l'apparence du dernier avatar que vous portiez avant de passer à l'avatar de test local. Pour nos testeurs d'AV3, cela a considérablement accéléré le processus d'itération. On espère que vous aimez ça!

Pour supprimer l'avatar de test local copié, allez dans l'onglet `Content Manager` du panneau de contrôle du SDK VRChat. Vous verrez votre avatar dans la section `Test Avatars` en bas. Cliquez sur `Delete` et il disparaîtra de la section `Other` du menu des avatars lorsque vous le rouvrirez.

### Mouvement des Yeux Simulé

Le mouvement des yeux simulé consiste à faire bouger vos yeux en regardant les choses autour de vous. Ceci n'est pas du *eye tracking* à proprement parler, c'est-à-dire que nous n'avons pas de moyen pour vous d'entrer des données à partir de dispositifs de suivi oculaire, mais c'est une manière assez efficace de rendre votre avatar plus "vivant".

Vous pouvez prévisualiser votre configuration dans l'éditeur et ajuster l'apparence des yeux de votre avatar dans une combinaison d'états, qui sont utilisés pour déterminer comment vos os oculaires sont configurés.

Le clignement des yeux peut être géré via des Blendshapes ou des os. Les Blendshapes sont la méthode habituelle, mais nous avons également inclus des os pour permettre davantage de configurations.

Les Blendshapes pour le clignement des yeux sont définis par trois Blendshapes, décrits ci-dessous :
Le clignement des yeux sont définis par trois Blendshapes, décrites ci-dessous:

- `Blink` - Les deux yeux clignent
- `Looking Up` - Blendshape utilisé lorsqu'on regarde vers le haut, utilisez celle-ci pour ajuster la position de l'œil/iris/paupière/sourcil
- `Looking Down` - Blendshape utilisé lorsqu'on regarde vers le bas, utilisez celle-ci de manière similaire à LookUp

Vous pouvez les régler ces Blendshapes sur `-none-` si vous ne souhaitez pas les utiliser.

De plus, vous remarquerez deux curseurs : l'un va de `Calm` (Calme) à `Excited` (Excité), et l'autre va de `Shy` (Timide) à `Confident` (Confiant). Calm / Excited affecte la fréquence à laquelle vous clignez des yeux. Shy / Confident affecte la fréquence à laquelle vous regardez les autres joueurs et la durée pendant laquelle votre regard reste sur le visage des autres joueurs avant de détourner le regard.

Vous en apprendrez davantage à ce sujet lorsque nous parlerons des state behaviors, mais vous pouvez définir des états dans votre animator pour **désactiver les animations des yeux** lorsque vous atteignez cet état. Vous pouvez le configurer de telle manière que vous n'ayez pas à vous soucier du surmenage de vos blendshapes parce que votre humeur "heureuse" ferme vos yeux, et votre clignement des yeux continue de s'activer.

### Blendshapes / Visèmes basés sur Os

Si vous souhaitez simplement utiliser les visèmes standard basés sur les os jaw-flap ou les blendshapes, nous avons ce qu'il vous faut. Les deux sont toujours présents et fonctionnent très bien.

De plus, vous pouvez désormais configurer l'angle du visème basé sur l'os jaw-flap pour une personnalisation supplémentaire!

Cependant, avec Avatars 3.0, vous pouvez également accéder à un paramètre de l'Animator indiquant quel visème doit être actuellement en cours de lecture! Cela signifie que si vous pouvez l'animer, **vous pouvez l'utiliser dans un visème.** Plus besoin de subterfuges pour les bouches 2D, les robots, ou qu'importe-- vous pouvez simplement animer ce que vous voulez pour vos visèmes.

Le paramètre de l'Animator `Viseme` est mis à jour dans tous les modes de visème.

### Animations Proxy

Vous remarquerez probablement que le SDK inclut un ensemble d'animations nommées `proxy_ nom de l'animation`. Ces animations sont des "placeholders" pour diverses animations par défaut de VRChat. Si vous utilisez une animation qui commence par `proxy_`, VRChat tentera de la remplacer par une animation intégrée. Cela peut être fait dans n'importe quelle layer lisible.

Bien que nous ne remplacerons pas une animation avec le préfixe `proxy_` si le suffixe ne correspond pas à l'une de nos animations intégrées, il est probablement préférable de ne pas nommer vos animations avec le préfixe `proxy_`.

### Use Auto Footstep

Il s'agit d'une option dans le Descripteur d'Avatar AV3. Elle est activée par défaut.

**"Use Auto Footstep"** s'applique uniquement aux systèmes de tracking à 3 points ou 4 points. Désactiver cette option signifie que vous désactivez l'animation procédurale du bas du corps pour les déplacements Roomscale. Cette animation procédurale est celle qui se déclenche lorsque vous vous déplacez en Roomscale tout en utilisant un tracking à 3 ou 4 points.

Laisser l'option `Auto Footsteps` activée (ce qui est l'état par défaut) vous permettra toujours d'activer/désactiver le suivi depuis le State Behavior "Tracking Control".

Si l'option `Auto Footsteps` est désactivée, activer/désactiver le suivi au niveau des jambes et des hanches n'aura aucun effet, et vous devrez compter sur vos animations pour contrôler votre bas du corps en permanence.

### Force Locomotion Animations

Il s'agit d'une option dans le Descripteur d'Avatar AV3. Elle est activée par défaut.

**"Force Locomotion Animations"** est activé par défaut. Il s'applique uniquement au suivi à 6 points (Full-Body Tracking). Lorsque "Force Locomotion Animations" est activé, le déplacement en FBT (c'est-à-dire, le déplacement avec les joysticks) déclenchera une animation de marche/course déterminée par votre Base playable layer.

Lorsque "Force Locomotion Animations" est désactivé, le déplacement en FBT ne déclenchera PAS l'animation de marche/course. Ceci est utile si vous souhaitez "imiter" votre marche avec votre mouvement en full-body tracking. **Si vous désactivez "Force Locomotion Animations", n'utilisez pas les layers Base et Additive par défaut.** Vous êtes censé les créer vous-même!

### Write Defaults dans les States

[Write Defaults](https://docs.unity3d.com/2019.4/Documentation/Manual/class-State.html) est une option disponible sur les states dans les Animators d'Unity.

Write Default sur "ON" permet d'écrire les valeurs par défaut de **toutes les propriétés animées** (_au niveau du Controller dans son ensemble!_) qui ne sont pas animées dans ce state en particulier. Cela peut provoquer des interactions très étranges si vous n'y prenez pas garde.

Cette fonctionnalité a été ajoutée par Unity lors de la migration vers la version 5.0. Cela a été fait pour que les assets et les projets existants qui dépendaient de la propriété "Write-all-default" puissent continuer de fonctionner.

Normalement, lorsque vous travaillez avec d'autres développeurs sur un projet de jeu-vidéo, vous convenez d'une norme. Dans VRChat, nous sommes _tous_ des développeurs, alors on va devoir définir un standard.

VRChat n'utilise pas "Write Defaults" dans nos animateurs intégrés et exemples. Cela signifie que seules les propriétés réellement présentes dans les animations sont jouées par un nœud d'animation donné. Nous recommandons que les créateurs suivent également ce workflow, car il est plus facile de suivre les propriétés qui seront animées par le biais de n'importe quelle couche spécifique, et cela correspond également à l'utilisation prévue d'Unity dans son ensemble.

La valeur de Write Defaults est activée par défaut lors de la création d'un nouveau nœud, les créateurs doivent être conscients qu'ils devront décocher cette option. Si vous souhaitez utiliser Write Defaults, vous devrez surveiller toutes les propriétés possibles qui peuvent être écrites par un nœud avec cette option activée.

**Nous recommandons de laisser Write Defaults désactivé et d'animer explicitement tout paramètre qui doit être défini par l'animation.** Notez que cela peut nécessiter l'ajout d'animations de "réinitialisation" ou de propriétés à l'animation pour "initialiser" les transformations dans une orientation spécifique.

Cela étant dit, dans des cas d'utilisation et des configurations plus avancés, il peut être avantageux d'utiliser Write Defaults On.

### Avatars Générique

Avatar 3.0 prend également en charge les avatars génériques non-humanoïdes. Si vous souhaitez accéder aux fonctionnalités similaires à celles auxquelles ont accès les AV3 humanoïdes, vous devrez suivre quelques directives :

- Importez votre modèle générique sous forme de fichier FBX et attribuez-lui le type d'armature "Generic", de manière à ce qu'un objet "avatar" soit créé.
- Assurez-vous que cet objet avatar est référencé dans le champ avatar du composant Animator situé à la racine de votre avatar (le même GameObject que le descripteur d'avatar).
- Laissez l'Animator Controller vide (il sera supprimé à l'exécution) et utilisez les couches lisibles pour définir vos contrôleurs d'animation personnalisés. Les avatars génériques disposent de 3 couches lisibles : Base, Action et FX, car les autres couches sont spécifiques aux avatars humains.

Si vous ne suivez pas ces étapes, votre avatar générique n'aura pas accès à de nombreuses fonctionnalités d'Avatars 3.0, telles que les Paramètres d'Expression et les State Behaviours. Si cela ne vous dérange pas, vous pouvez ajouter un contrôleur d'animation directement à la racine de l'animator, en laissant le champ avatar vide. Cette méthode peut être utile si vous construisez simplement une hiérarchie d'objets statiques dans Unity et que vous souhaitez une animation simple.
