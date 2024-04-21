---
title: "Configurer le SDK"
excerpt: "Apprenez à créer un projet Unity pour des mondes ou avatars VRChat."
sidebar_position: -1
createdAt: "2017-09-15T23:23:08.394Z"
updatedAt: "2023-02-27T18:28:17.748Z"
---
## Exigences et téléchargements.
Il existe plusieurs moyens de télécharger le SDK VRChat:
- Cliquez [ici](https://vrchat.com/download/vcc) pour télécharger le [VRChat Creator Companion](https://vcc.docs.vrchat.com/). C'est la manière la plus simple pour commencer. Le Creator Companion peut automatiquement installer Unity, le SDK Mondes, et le SDK Avatars pour vous.
- Sinon, vous pouvez utiliser l'un de nos [projets modèles sur GitHub](https://vcc.docs.vrchat.com/guides/using-project-template-repos). Si vous n'utilisez pas le Creator Companion, vous devrez également télécharger la [version actuelle d'Unity](/sdk/current-unity-version). Nous recommandons fortement d'utiliser Unity Hub pour télécharger Unity, disponible [ici](/sdk/current-unity-version).


## Étape 0 - Installer Unity
Si vous avez déjà Unity installé et opérationnel, vous pouvez passer à [l'Étape 1](#étape-1---création-dun-projet). Le [Creator Companion](https://vcc.docs.vrchat.com/) installe automatiquement Unity pour vous.

Si vous souhaitez installer Unity vous-même, consultez la page [Version d'Unity Actuellement Supportée](/sdk/current-unity-version) et installez la version d'Unity actuellement prise en charge par VRChat, de préférence en utilisant Unity Hub.


## Étape 1 - Création d'un projet
Pour notre premier projet, nous supposerons que vous créez du contenu pour un PC sous Windows. Si vous cherchez le processus pour créer du contenu VRChat sur Quest, consultez [Configuration d'Unity pour la Création de Contenu Quest](/platforms/android/setting-up-unity-for-creating-quest-content).

La manière la plus simple de créer un projet prédéfini est d'utiliser le [VRChat Creator Companion !](https://vcc.docs.vrchat.com/guides/getting-started) Nous vous **recommandons vivement** d'utiliser le VRChat Creator Companion pour cela. Si vous ne le faites pas, vous devrez effectuer de nombreuses étapes supplémentaires plus tard, ce qui pourrait être source d'erreurs.

Quelques conseils rapides :

* Enregistrez vos projets sur un disque de stockage de masse disposant de beaucoup d'espace - les projets Unity peuvent devenir assez volumineux, surtout si vous utilisez un logiciel de gestion de version.
* N'utilisez pas un seul projet pour de nombreux avatars ou mondes différents. C'est un moyen rapide de rendre les migrations futures très compliquées !
* Si vous savez comment utiliser un logiciel de contrôle de version comme [Git](https://git-scm.com/) ou [Plastic SCM](https://www.plasticscm.com/), utilisez-le ! Cela rend très facile un retour en arrière sur des modifications qui cassent votre projet.
* Si vous ne savez pas comment les utiliser, vous devriez apprendre ! Ils sont formidables. Malheureusement, un tutoriel Git est bien au-delà de la portée de notre documentation 😰

Vous pouvez créer un projet manuellement si vous le souhaitez, mais vous devrez quand même utiliser le [Creator Companion](https://vcc.docs.vrchat.com/) plus tard pour installer le SDK (à moins que vous n'ayez commencé par l'un de nos [modèles de dépôt](https://vcc.docs.vrchat.com/guides/using-project-template-repos).

Si vous utilisez Unity Hub :
* Ouvrez Unity Hub (ou simplement l'éditeur si vous avez choisi cette route).
* Créez un nouveau projet, **réglez-le en 3D et enregistrez-le**.
* N'utilisez pas HDRP ou URP. Nous ne l'utilisons pas.

## Étape 2 - Ouvrez Votre Projet
Quelle que soit la manière dont vous le créez, vous pouvez maintenant ouvrir votre projet. Si votre projet n'apparaît pas, cliquez sur "Ajouter" à l'écran du projet et sélectionnez-le. Si vous utilisez Unity Hub, cliquez sur "Ouvrir" en haut à droite, puis sélectionnez le répertoire où se trouve votre projet.

Une fois le projet ouvert, vérifiez la barre de titre pour vous assurer qu'elle se termine par `PC, Mac & Linux Standalone <DX11>`. Si ce n'est pas le cas, allez dans `File > Build Settings...`, sélectionnez `PC, Mac & Linux Standalone`, puis cliquez sur `Switch Platform` en bas à droite.

Si vous créez du contenu pour VRChat pour Meta Quest ou les téléphones Android, vous devriez également le générer pour Android. Consultez notre [documentation Android](/platforms/android/index.md) pour plus de détails.

## Étape 3 - Installation du SDK (FACULTATIF)
Si vous n'avez pas utilisé le VCC pour configurer votre projet, vous devrez installer le SDK. Faites-le via le [VRChat Creator Companion](https://vcc.docs.vrchat.com/guides/getting-started).

S'il y a des erreurs, même avec un projet vide tout neuf, [contactez notre équipe de support](https://vrch.at/support).

## Étape 4 - Se connecter
Pour utiliser le SDK, vous devrez vous connecter. Pour ce faire, accédez au menu `VRChat SDK > Show Control Panel`. Vous pouvez vous connecter à votre compte VRChat à partir de là.

Gardez à l'esprit que vous devez avoir un compte VRChat possédant un [Niveau de Confiance](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system) égale ou supérieur à "New User" pour envoyer du contenu. Vous ne pouvez pas utiliser un compte Steam, Oculus ou Viveport pour envoyer du contenu.

### Et Après ?
Votre projet est prêt ! Vous pouvez passer à [Création de Monde](/worlds) ou [Création d'Avatar](/avatars).