---
title: "Démarrage"
excerpt: "Apprenez à créer un projet Unity pour des mondes ou avatars VRChat."
sidebar_position: -1
createdAt: "2017-09-15T23:23:08.394Z"
updatedAt: "2023-02-27T18:28:17.748Z"
---

Le **[VRChat Creator Companion](https://vcc.docs.vrchat.com/)** est le moyen le plus facile et rapide pour débuter dans la création d'avatars et de mondes incroyables pour VRChat.

Avant que vous ne commenciez à créer tout contenu, vous aurez besoin de configurer le kit de développement logiciel, ou **SDK**. Un SDK est comme une boîte à outils des programmes nécessaires pour construire sur une plateforme spécifique.

Le VRChat Creator Companion va s'occuper de télécharger et d'installer les deux SDK pour avatars et mondes, et va aussi installer et gérer **Unity** ! Unity est le moteur sur lequel est développé VRChat, et c'est donc le moteur que vous aurez besoin pour créer tout votre contenu.

C'est la méthode la plus facile pour démarrer, et nous recommandons fortement de l'utiliser ! si vous ne le faites pas, vous devrez effectuer d'avantage d'étapes plus tard, et vos projets seront plus enclins aux erreurs.

## Votre premier projet
Pour votre premier projet, nous assumons que vous créez du contenu pour Windows.

1. Cliquez [ici pour télécharger le VRChat Creator Companion](https://vrchat.com/download/vcc).
    - Vous pouvez accéder à la documentation du Creator Companion [ici](https://vcc.docs.vrchat.com/). 

:::note
Si vous cherchez la procédure pour construire du contenu pour Quest, consultez [Configurer Unity pour créer du contenu Quest](/platforms/android/setting-up-unity-for-creating-quest-content).
:::

2. Continuez dans la fenêtre d'installation. L'emplacement d'installation par défaut sera `:\Users\UserName\AppData\Local\Programs`, mais vous pouvez changer ceci si vous le souhaitez.

3. VCC devrait s'ouvrir automatiquement après l'installation. Sinon, rechercher **Creator Companion** dans votre recherche Windows vous aidera à le trouver.

4. Cliquez sur **Create New Project**.

5. Décidez s'il doit être un projet avatar ou world.

6. Nommez-le !

7. Assurez-vous que l'emplacement de sauvegarde soit correct.

8. Cliquez sur **Create Project!**

## Ouvrir votre projet

Vous pouvez à présent ouvrir votre nouveau projet ! Après avoir créer un nouveau projet, la page suivante dans le Creator Companion montrera un bouton **Open Project**. Vous pouvez également y accéder depuis l'onglet **Project** dans la barre latérale gauche.

Si votre projet n'est pas listé, cliquez sur le menu déroulant à côté de **Create New Project** puis sur **Add Existing Project** depuis la page project et sélectionnez-le. Une fois que le projet est ouvert:

1. Vérifiez la barre de titre et assurez-vous qu'elle se termine par `PC, Mac & Linux Standalone <DX11>`.
    - Si ce n'est pas le cas, allez dans `File > Build Settings...`, et sélectionnez `PC, Mac & Linux Standalone`, puis cliquez sur `Switch Platform` dans la partie inférieure gauche.

2. Naviguez dans `VRChat SDK > Show Control Panel > Authentication`.

3. Connectez-vous à votre compte VRChat. Vous avez besoin d'effectuer cela afin de pouvoir envoyer le contenu que vous créez.
    - Vous devez avoir un compte VRChat avec un [Classement de Confiance](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system) d'au moins "New User" pour pouvoir envoyer du contenu. Vous ne pouvez pas utiliser un compte Steam, Oculus, ou Viveport pour envoyer du contenu.

## Utiliser Unity Hub à la place

Bien que l'on ne le recommande pas, si vous souhaitez installer Unity par vous-même sans VCC, consultez la page [Version d'Unity Actuellement Prise en Charge](/sdk/upgrade/current-unity-version) et installez la version d'Unity que VRChat prend en charge actuellement en utilisant Unity Hub.


Si vous n'utilisiez pas VCC pour configurer votre projet, vous devrez aussi installer le SDK. Faites-le depuis le [VRChat Creator Companion](https://vcc.docs.vrchat.com/guides/getting-started).

Pour créer des projets en n'utilisant que Unity Hub:
* Ouvrez Unity Hub (ou juste l'éditeur, si vous choisissez cette route).
* Créer un nouveau projet, **Définissez-le sur 3D, puis sauvegardez-le**
* N'utilisez pas HDRP ou URP, VRChat ne les utilise pas.

Pour ouvrir des projets en n'utilisant que le Unity Hub:
* Cliquez sur **Open** en haut à droite, puis sélectionnez le dossier où votre projet se situe.

## Conseils

* Si vous créez du contenu pour VRChat sur Meta Quest, vous devriez aussi créer sur Android. Consultez la [documentation Android](/platforms/android/index.md) pour d'avantage de détails.
* Sauvegardez vos projets sur un disque dur avec beaucoup de place. Les projets Unity peuvent être très lourds, particulièrement si vous utilisez un logiciel de versioning.
* N'utilisez pas de projets unique pour plusieurs avatars ou mondes. C'est une manière efficace pour avoir une une grosse douleur aux fesses lors de futures migrations !
* Si vous savez comment utiliser un logiciel de gestion de versions comme [Git](https://git-scm.com/) or [Plastic SCM](https://www.plasticscm.com/), utilisez-le ! Cela rend très facile l'annulation de changements qui pourraient casser votre projet.

### Et Après ?
Votre projet est prêt ! Vous pouvez passer à la [Création de Monde](/worlds) ou la [Création d'Avatar](/avatars).

S'il y a quelconque erreur, même avec un projet vide tout neuf, [contactez notre équipe de support](https://vrch.at/support).