---
title: "VRCPipelineManager"
slug: "vrcpipelinemanager"
hidden: false
createdAt: "2017-11-22T18:54:45.512Z"
updatedAt: "2019-10-28T19:23:09.669Z"
---
Utilisé pour stocker l'identifiant d'un monde ou d'un avatar.

:::note Ajouté automatiquement
Ce composant est ajouté automatiquement lorsque le composant dont il dépend est ajouté à un objet. Vous ne devriez pas avoir besoin d'ajouter ce composant manuellement.
:::

| Paramètre    | Description                                  |
|--------------|----------------------------------------------|
| Blueprint ID | L'identifiant unique de l'avatar ou du monde |

Si vous souhaitez téléverser le monde ou l'avatar vers un autre ID Blueprint, vous pouvez appuyer sur le bouton `Détacher (Facultatif)`

:::danger Format de Blueprint Requis
Les Blueprint ne peuvent être que dans le format suivant, où 0 est remplacé par [0-9] [a-f] :

`avtr_00000000-0000-0000-0000-000000000000`

`wrld_00000000-0000-0000-0000-000000000000`

Tout autre format d'ID ne sera pas accepté. Cela se fait normalement automatiquement, vous n'avez donc jamais à créer votre propre Blueprint.
:::

![vrcpipelinemanager-7d57e76-Unity_2017-12-10_01-35-44.png](/img/sdk/vrcpipelinemanager-7d57e76-Unity_2017-12-10_01-35-44.png)

Si vous avez un Blueprint ID auquel vous souhaitez téléverser, vous pouvez en attacher un nouveau avec le bouton `Attach (Optional)`

![vrcpipelinemanager-db63e77-Unity_2017-12-10_01-37-47.png](/img/sdk/vrcpipelinemanager-db63e77-Unity_2017-12-10_01-37-47.png)

:::caution CONSEIL
N'ayez pas plus d'un PipelineManager dans la scène lors de la génération d'un monde ! Vous pourriez finir par téléverser vers le mauvais Blueprint ID.
:::