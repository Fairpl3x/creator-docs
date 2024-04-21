---
title: "Mises à jour mineures d'Unity"
---
Occasionnellement, VRChat sera mis à jour sur des versions mineures d'Unity. Par exemple, VRChat pourrait être mis à jour depuis Unity 2022.1.**1** vers Unity 2022.1.**2**.

## Installer la nouvelle version d'Unity

1. Fermez tous vos projets ouverts.

2. Vérifiez la [Version actuellement prise en charge d'Unity](/sdk/upgrade/current-unity-version) et installez la nouvelle version d'Unity via Unity Hub.
    - Bien que nous listions le programme d'installation autonome sur cette page, nous recommandons fortement d'utiliser Unity Hub. Dans cette documentation, nous supposons que vous l'utilisez.

## Copier votre projet

1. Copiez ou sauvegardez votre projet.
    - Si vous utilisez le [VRChat Creator Companion](https://creators.vrchat.com/), il va automatiquement vous suggérer de copier votre projet avant de le mettre à jour. Vous pouvez faire une sauvegarde de votre projet grâce au bouton "Make Backup".
    - Sinon, dupliquez votre dossier de projet tout entier et donnez-lui un nouveau nom.
    - Exportez votre projet tout entier comme package Unity. Cela prend beaucoup de temps et peut causer des erreurs.

:::danger Ne sautez pas cette étape !
Les mises à jour peuvent peuvent échouer. Si vous garder vos fichier de projet initial en lieu sûr, vous pouvez les restaurer, ressayer, et trouver ce qu'il s'est mal passé.

Sans sauvegarde, vous n'aurez pas de seconde chance. Si vous faites une erreur ou si la mise à jour échoue, le réparer peut être difficile, voir impossible.

## Ouvrez Votre Projet

1. Ouvrez la copie de votre projet dans la nouvelle version.
    - Vous obtiendrez quelques avertissements de mise à niveau. C'est normal ! Cliquez sur le bouton de confirmation.

2. Après un certain temps, votre migration sera terminée. C'est tout !

## Conseils et Information optionnels

Les mises à jour du SDK ne sont pas toujours nécessaires lors de mises à niveau de version mineure. Si elles le sont, c'est à ce moment que vous devrez les faire.

1. Fermez votre projet après la migration.
2. Utilisez le [VCC](https://vcc.docs.vrchat.com/) pour mettre à jour votre SDK.

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
#### Avertissements de Version

Le SDK peut vous avertir que vous êtes sur la mauvaise version, même si vous *savez* que vous êtes sur la bonne.

![migrating-to-a-newer-minor-unity-version-1b8194d-2022-11-30_10-35-54_chrome.png](/img/sdk/migrating-to-a-newer-minor-unity-version-1b8194d-2022-11-30_10-35-54_chrome.png)

C'est Ok ! Si vous savez avec certitude que vous avez la bonne version, vous pouvez ignorer ce message.