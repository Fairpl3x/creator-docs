---
title: "Imposteurs"
slug: "avatar-impostors"
hidden: false
---

# Imposteurs
## Que sont des Imposteurs ?
Un Imposteur est un double du corps de votre avatar. C'est ce que les autres verront lorsque votre avatar ne peut pas charger pour quelconque raison, comme par exemple, si votre avatar à été mis en ligne uniquement sur PC, mais que votre ami utilise un Quest. Typiquement, vous auriez dû être visible avec un fallback ou un robot, mais créer un imposteur vous permettra de garder votre style unique.

## Créer un Imposteur
Vous ne pouvez créer des imposteurs que pour les avatars que vous [possédez et avez mis en ligne](/avatars/creating-your-first-avatar), et les imposteurs ne supportent actuellement que les avatars humanoïdes.

Pour créer votre premier imposteur :

1. Connectez-vous au site VRChat.

2. Naviguez sur "Avatars", puis sur "My Avatars", puis cliquez sur le nom ou l'icône de l'avatar pour lequel vous souhaitez créer un imposteur.

3. Cliquez sur "Generate Impostors", ou si l'avatar possède déjà un imposteur que vous aimeriez mettre à jour, sur "Regenerate Impostors".

4. Patientez.

5. Rafraîchissez la page, après quelques instants, vous devriez voir que votre avatar possède des imposteurs pour Quest et PC.

![image](/img/avatars/impostors/generation.png)

Vous pouvez activer ou désactiver les imposteurs. Lorsque désactivés, votre fallback sera visible à la place.

## Prévisualiser un Imposteur
Une fois que votre imposteur est généré, vous serez certainement très excité de voir à quoi il ressemble !

1. Connectez-vous à VRChat.

2. Ouvrez le menu Avatar depuis le menu principal.

3. Cliquez sur l'avatar pour lequel vous avez généré un imposteur.

4. Vous devriez remarquer que les "Features" de l'avatar intègrent maintenant "Impostor".

![image](/img/avatars/impostors/features-row.png)

Vous devriez également voir un nouveau bouton en dessous de l'aperçu de l'avatar, qui vous permettra de basculer la prévisualisation entre l'imposteur et l'avatar normal.

**Note : Les Imposteurs qui sont prévisualisés dans ce menu peuvent exhiber des bogues qui ne sont pas visibles pour les autres joueurs.**

![image](/img/avatars/impostors/preview-avatar.png)
![image](/img/avatars/impostors/preview-impostor.png)

## Personnaliser un Imposteur
Les Imposteurs se révèlent être très bons par défaut, mais les avatars complexes peuvent bénéficier de quelques personnalisations en utilisation le SDK VRChat.

Pour personnaliser, ajoutez simplement un script VRCImpostorSettings sur votre avatar avant de le mettre en ligne.

## VRCImpostorSettings

### Resolution Scale (Taille de Résolution)
Change la quantité d'espace sur la texture atlas des imposteurs dédiée à la texture de cette partie du corps.

Par exemple, vous pouvez placer ce script sur l'os de la tête et modifier cette valeur afin que la tête prenne plus ou moins de place sur la texture atlas, ce qui va augmenter ou diminuer la qualité globale de la texture. Notez que cela peut réduire les autres parties du corps sur l'atlas si nécessaire.

_Ceci est relatif à l'os sur lequel est placé VRCImpostorSettings._

### Transforms To Ignore (Transforms à Ignorer)
Ignore ces Transforms lors de la capture de données pour l'imposteur. Cela va les cacher sur le résultat final.

_Ceci est indépendant de l'os sur lequel VRCImpostorSettings est placé._

### Extra Child Transforms (Transforms Enfants Supplémentaires)
C'est bien pour les choses comme les ailes et les queues, car il indique au générateur de l'imposteur de créer un sprite séparé pour l'os où est placé ce script.

On ne recommande pas son utilisation sur des petites choses comme les doigts, car tous les sprites se partagent une seule texture. Le faire causerait une baisse de qualité partout ailleurs.

_Ceci est indépendant de l'os sur lequel VRCImpostorSettings est placé._

### Re-parent Here (Reparenter Ici)
Reparente un autre os sur ce sprite d'imposteur. Cela signifie qu'il sera ajouté avec cette partie du corps et fera parti de ce sprite.

Par exemple, si vous souhaitez que vos ailes fassent parti du haut du corps, vous pouvez reparenter la base de l'os des ailes sur le buste pendant la génération de l'imposteur grâce à ce dernier.

_Ceci est relatif à l'os sur lequel est placé VRCImpostorSettings._

### Quand est-ce qu'un imposteur est visible ?
Actuellement, il n'y a que trois manières de voir un imposteur :

- Prévisualisation de l'avatar.

- Blocage de performance (p. ex. l'avatar est "Very Poor", mais vous avez défini votre limite de performance sur "Medium")

- Plateforme inadéquate (p. ex. l'avatar est mis en ligne pour PC, mais vous êtes sur Quest)

**Note : La génération automatique de l'imposteur et le support pour les avatars non-humanoïdes arrive dans le futur !**