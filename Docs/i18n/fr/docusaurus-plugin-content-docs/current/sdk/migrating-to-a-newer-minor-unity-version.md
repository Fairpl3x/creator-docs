---
title: "Migrer vers une nouvelle Version Mineure d'Unity"
slug: "migrating-to-a-newer-minor-unity-version"
hidden: false
createdAt: "2022-11-30T18:50:12.586Z"
updatedAt: "2022-11-30T18:50:12.586Z"
---
Occasionnellement, VRChat sera mis à jour sur des versions majeures d'Unity.

Mettre à jour vos projets entre celles-ci est facile comparé aux changements de versions majeures.

## Étapes de Mise à jour

### Étape 1 - Installer la nouvelle version d'Unity

Fermez tous vos projets ouverts.

Vérifiez la [Version actuellement prise en charge d'Unity](/sdk/current-unity-version) et installez la nouvelle version d'Unity via Unity Hub.

Bien que nous listions le programme d'installation autonome sur cette page, vous *devriez vraiment* utiliser Unity Hub. Nous supposons que vous l'utilisez dans ces étapes.

### Étape 2 - Faites une Copie de Votre Projet

Créez toujours un backup de votre projet avant d'apporter des modifications importantes et potentiellement destructrices. Vous pouvez le faire en copiant simplement le dossier du projet et en migrant cette copie au lieu de votre projet principal. De cette manière, si quelque chose tourne mal, vous pourrez le supprimer et recommencer.

Si vous êtes un utilisateur avancé et que vous savez comment utiliser un système de contrôle de version comme [git](https://git-scm.com/), vous devriez certainement l'utiliser. Il simplifie la gestion des sauvegardes.

### Étape 3 - Ouvrez Votre Projet

Ouvrez la copie de votre projet dans la nouvelle version.

Vous obtiendrez quelques avertissements de mise à niveau. C'est normal ! Cliquez sur "Oui", "OK" ou n'importe quel message une confirmation.

Après un certain temps, votre migration sera terminée. C'est tout !

### Étape 4 - Mettez à Jour Votre SDK

Les mises à jour du SDK ne sont pas toujours nécessaires lors de mises à niveau de version mineure. Si elles le sont, c'est à ce moment que vous devrez le faire.

Fermez votre projet après la migration et utilisez le [VCC](https://vcc.docs.vrchat.com/) pour mettre à jour votre SDK.

## Conseils et Autres Informations

Voici quelques conseils supplémentaires qui pourraient vous être utiles pendant le processus.

### Avertissements d'Unity

Il y a quelques avertissements d'Unity qui peuvent apparaissent lors de la migration et que vous pouvez ignorer en toute sécurité. En voici quelques-uns que vous pourriez rencontrer.

![migrating-to-a-newer-minor-unity-version-f3995eb-image_10.png](/img/sdk/migrating-to-a-newer-minor-unity-version-f3995eb-image_10.png)

![migrating-to-a-newer-minor-unity-version-b20553b-image_11.png](/img/sdk/migrating-to-a-newer-minor-unity-version-b20553b-image_11.png)

### Nettoyez la Copie

Si votre projet est volumineux, la migration peut prendre beaucoup de temps. Il y a quelques dossiers que vous n'avez pas besoin de migrer si le projet est particulièrement volumineux. Vous pouvez supprimer ces dossiers sans aucun souci de la copie.

Vous n'aurez probablement pas tous ces dossiers dans votre projet.
```text
/Library/
/Temp/
/Obj/
/Build/
/Builds/
/Logs/
/UserSettings/
```
## Avertissements de Version

Le SDK peut vous avertir que vous êtes sur la mauvaise version, même si vous *savez* que vous êtes sur la bonne.
![migrating-to-a-newer-minor-unity-version-1b8194d-2022-11-30_10-35-54_chrome.png](/img/sdk/migrating-to-a-newer-minor-unity-version-1b8194d-2022-11-30_10-35-54_chrome.png)

C'est Ok ! Si vous savez avec certitude que vous avez la bonne version, vous pouvez ignorer ce message.