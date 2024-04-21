---
title: "Dépannage du SDK"
slug: "sdk-troubleshooting"
excerpt: "Common SDK issues and how to solve them"
hidden: false
createdAt: "2017-09-29T02:44:14.279Z"
updatedAt: "2020-04-23T03:39:19.161Z"
---
Voici des problèmes courants que vous pourriez rencontrer lors de l'utilisation du SDK, et comment les résoudre. Vous pouvez également trouver de l'aide supplémentaire sur notre [Help Knowledgebase](http://help.vrchat.com).

## Le panneau de contrôle du SDK n'apparaît pas dans le menu déroulant VRChat SDK !
Il y a deux raisons principales pour lesquelles cela pourrait se produire :

Assurez-vous d'utiliser la version recommandée pour VRChat. (Voir [Configuration du SDK](/sdk))

Vérifiez la console d'Unity pour vous assurer qu'il n'y a pas d'erreurs de compilation provenant de scripts ou de composants tiers. Si c'est le cas, vous devrez peut-être supprimer ces composants/scripts.

## J'ai envoyé mon contenu, mais je ne le vois pas en jeu !
Il y a quelques raisons pour lesquelles cela pourrait être le cas. Voici quelques éléments à vérifier :
- Assurez-vous d'utiliser la [version correcte d'Unity](/sdk/upgrade/current-unity-version).
- Assurez-vous d'utiliser le bon compte en jeu et de ne pas être connecté à un compte de plateforme.
- Vérifiez l'onglet `Content Manager` dans la fenêtre du panneau de contrôle pour voir si votre contenu s'y trouve.
- Vérifiez la console de l'éditeur pour voir s'il y a des erreurs lors de l'envoi.

## Je ne peux pas voir l'une des fenêtres, mais il n'y a pas d'erreurs !
Dans de rares cas, les onglets d'Unity peuvent sortir de l'écran et devenir inaccessibles. Vous devrez supprimer certaines clés de registre pour ramener ces fenêtres sur votre écran.

1. Fermez Unity.
2. Appuyez sur la touche Windows et tapez `regedit`. Appuyez sur Entrée. Vous serez invité par l'UAC à autoriser un accès administrateur.
3. Soyez très prudent dans `regedit` ! Cette application contient tous les paramètres de votre PC.
4. Trouvez la clé suivante : `Ordinateur\HKEY_CURRENT_USER\Software\Unity Technologies\Unity Editor 5.x`. Vous pouvez le faire en la collant dans la barre en haut de `regedit`, ou si vous n'avez pas de barre en haut de la fenêtre, en naviguant dans la liste des répertoires sur la gauche.
5. Supprimez TOUTES les clés de ce répertoire qui commencent par `VRC`, y compris `VRCSDK2` ou toutes les autres clés associées.
6. Fermez `regedit`.
7. Rouvrez Unity. Vous devriez pouvoir continuer !

## Je reçois des erreurs liées à SDK3 ou Udon dans un projet utilisant SDK2 ou VRC_SpatialAudioSource dans un projet utilisant SDK3 !

1. Suivez [les étapes correctes](/sdk/updating-the-sdk) pour supprimer votre SDK en fermant Unity et en supprimant tous les dossiers liés au SDK et leurs fichiers `.meta` associés.
2. Accédez à `Project Settings` et recherchez `Scripting Define Symbols` sous `Player > Other Settings`.
3. Supprimez les symboles qui ne sont pas associés au SDK avec lequel votre projet a été créé. Pour les projets créés avec SDK2, supprimez `UDON` et `VRC_SDK_VRCSDK3`. Pour les projets créés avec SDK3, supprimez `VRC_SDK_VRCSDK2`. Les symboles sont séparés par `;`. Ensuite, enregistrez les modifications en appuyant sur `Entrée`.
4. Importez le bon SDK dans le projet.

## J'ai un problème qui n'est pas répertorié ici !

Désolé pour ça ! Veuillez consulter notre [base de connaissances officielle](http://help.vrchat.com/) ou [envoyer une demande de support](https://help.vrchat.com/hc/en-us/requests/new). Nous seront heureux de vous aider.