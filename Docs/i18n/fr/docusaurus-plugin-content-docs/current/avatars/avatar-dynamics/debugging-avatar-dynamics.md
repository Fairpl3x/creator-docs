---
title: "Déboguer les Avatar Dynamics"
slug: "debugging-avatar-dynamics"
hidden: false
createdAt: "2022-03-03T00:20:06.462Z"
updatedAt: "2022-03-04T00:41:09.121Z"
---
Comme les Avatar Dynamics est un système complexe, il est tout à fait compréhensible de faire une erreur pendant la création de votre avatar. Pour faciliter les tests et la résolution de problèmes, nous avons fourni aux utilisateurs quelques outils pour rendre le processus plus facile.

### Débogage en Jeu

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8hqDquZWvhY?si=Mp7pM80fCYZPei81" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

En utilisant le Menu Action, vous pouvez à présent utiliser l'option "Avatar Overlay", afin d'avoir une représentation visuelle des [PhysBones](/avatars/avatar-dynamics/physbones) et des [Contacts](/avatars/avatar-dynamics/contacts) directement dans le jeu. Ceux-ci sont utiles afin de voir exactement ce qu'il se passe, ou pour vérifier si les objets ont été correctement configurés.

### Débogage dans l'Éditeur
Les [PhysBones](/avatars/avatar-dynamics/physbones) et des [Contacts](/avatars/avatar-dynamics/contacts) s'exécutent tous deux dans l'éditeur comme ils le feraient dans le client. En entrant en mode Play, vous êtes en mesure de simuler ces systèmes et de voir comment votre avatar va réagir sans avoir besoin de le mettre en ligne.

Dans la mesure où un Animator Controller à été ajouté dans le composant Animator de votre avatar, les paramètres seront mis à jour tel qu'ils le seraient dans le jeu. Rappelez-vous d'ajouter un Animator Controller avant d'enter en mode Play !

De plus, même si aucun Animator Controller n'est configuré, vous pouvez tout de même examiner chaque composant et voir les valeurs qu'ils donneraient pour chaque paramètre.