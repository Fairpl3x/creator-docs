---
title: "Chargement d'Image"
slug: "image-loading"
excerpt: "Display image files from the internet in your VRChat world"
hidden: false
createdAt: "2023-02-07T01:09:55.404Z"
updatedAt: "2023-05-15T15:20:08.022Z"
---
Le Chargement d'Image vous permet d'afficher des images depuis internet dans votre monde VRChat. Lorsque qu'un utilisateur visite votre monde, l'image peut être téléchargée depuis internet et utilisée comme une texture dans vos matériaux. Voici quelques exemples de comment peut être utilisé le Chargement d'Image :

- Pour mettre à jour des textures dans votre monde sans un ré-upload.
- Pour créer un poster dans votre monde et le mettre à jour pour des événements saisonniers ou fêtes.
- Pour réutiliser la même texture dans plusieurs mondes et tous les mettre à jour en même temps.

Le SDK inclut un script `ImageDownload` facile à utiliser, ou vous pouvez faire votre propre script avec le nouvelle objet `VRCimageDownloader`.

:::tip
Vous pouvez [voir notre exemple d'Image Loader](/worlds/examples/image-loading) pour commencer rapidement.
:::
## Avant de Commencer

Il y a quelques limites et paramètres au Chargement d'Image que vous devriez savoir :

- La résolution maximale est de 2048 x 2048. Tenter de télécharger des images plus grandes entraînera une erreur.
- Une image peut être téléchargée toutes les cinq secondes.
  - Si cette limite est dépassée, les téléchargements de images seront mis en file d'attente et téléchargés dans un ordre aléatoire.
  - Cette limite s'applique sur toute votre scène, indépendamment du nombre de composants VRCImageDownload utilisés.
- L'URL doit pointer directement un fichier image. Rediriger une URL n'est pas autorisé et entraînera une erreur.
- Les images téléchargées sont automatiquement interprétées au format RGBA, RGB ou RG.
  - Par exemple, une image en niveaux de gris avec un canal alpha est interprétée comme une image RG.
- Il y a une limite de 1000 éléments dans la file d'attente.
- Les tampons d'entrée et de sortie sont limités à un maximum de 32Mo, les images les dépassant entraîneront une erreur.

Et seulement certains domaines sont autorisées. Si un domaine n'est pas dans la liste, les images ne seront pas téléchargées à moins d'avoir activé **Allow Untrusted URLs** dans les paramètres d'utilisateur.

- Discord (`cdn.discordapp.com`)
- Dropbox (`dl.dropbox.com`)
- GitHub (`*.github.io`)
- ImageBam (`images4.imagebam.com`)
- ImgBB (`i.ibb.co`)
- imgbox (`images2.imgbox.com`)
- Imgur (`i.imgur.com`)
- Postimages (`i.postimg.cc`)
- Reddit (`i.redd.it`)
- Twitter (`pbs.twimg.com`)
- VRChat (`assets.vrchat.com`)

## Nœuds UdonGraph

#### VRCImageDownloader

Utilisez le constructeur de `VRCImageDownloader` pour créer un téléchargeur d'image, qui peut télécharger une image depuis internet, en cours d'exécution.

#### DownloadImage

Télécharge une image, puis appelle un événement indiquant une réussite ou un échec (voir les 'Événements ci-dessous').  
Retourne un `IVRCImageDownload`, qui peut être utilisé pour suivre la progression du téléchargement.

- **Instance** : Le composant `ImageDownloader` qui télécharge l'image.
- **Url** : le `VRCURL` de la texture à télécharger.
- **UdonBehavior** (optionnel) : Le `UdonBehavior` auquel envoyer les événements de `VRCImageDownloader`. Si `Udonbehavior` est vide, le UdonBehaviour actuel recevra tous les événements.
  - Notez que UdonSharp ne recevra aucun événements à moins qu'un `UdonBehavior` ne soit spécifié.
- **TextureInfo** (optionnel) : l'objet `TextureInfo` contenant les paramètres pour les textures nouvellement créée.

#### Dispose

Nettoie `VRCImageDownloader`. Libère les texture téléchargée de la mémoire. Appeler `Dispose` invalide l'objet VRCImageDownloader, et un nouveau doit être instancié pour télécharger des images.

**Note sur l'élimination et la collecte du garbage :**

- Appeler `Dispose` va invalider `VRCImageDownloader`, les `IVRCImageDownload` associés, et les texture téléchargées.
  - Après avoir appeler `Dispose`, l'état `VRCImageDownloadState` de `IVRCImageDownload` va changer en `Unloaded` jusqu'à qu'il soit collecté par le "Garbage collector".
- `VRCImageDownloader` garde les textures en mémoire jusqu'à ce que la Texture2D sous-jacente soit détruite ou éliminée, en utilisant sa fonction `Dispose`.
- Assurez-vous de sauvegarder la référence de votre `VRCImageDownloader` en tant que variable pour éviter qu'elle (et toute texture téléchargée) ne soit ramassée aléatoirement par le "Garbage collector".

#### TextureInfo

Contient des paramètres à appliquer sur une texture téléchargée.

- **GenerateMipmaps** : Active la génération de Mipmap. (Par défaut : `false`)
- **FilterMode** : Définit le `FilterMode` de la texture. (Par défaut : `Bilinear`)
- **WrapModeU** : Le `TextureWrapMode` le long de l'axe U (horizontal) (Par défaut : `Repeat`)
- **WrapModeV** : Le `TextureWrapMode` le long de l'axe V (vertical) (Par défaut : `Repeat`)
- **WrapModeW** : Le `TextureWrapMode` le long de l'axe W (profondeur, uniquement pertinent pour les Texture3D) (Par défaut : `Repeat`)
- **AnisoLevel** : Le `anisoLevel` de la texture. Une valeur de 0 désactive le filtrage, 16 équivaut à un filtrage complet. (Par défaut : `9`)
  - VRChat utilise un filtrage anisotrope forcé. Lorsque la valeur d'anisoLevel est entre 1 et 9, Unity règle anisoLevel à 9. Si la valeur est supérieure à 9, Unity la limite entre 9 et 16.
- **MaterialProperty** : Remplace `MaterialProperty` sur lequel appliquer la texture téléchargée, si un `material` a été spécifié dans `DownloadImage`. (Par défaut : `_MainTex`)

#### IVRCImageDownload

Contient des informations sur l'image téléchargée. Renvoyé par la fonction `DownloadImage` de `VRCImageDownloader`, par `OnImageLoadSuccess`, et par `OnImageLoadError`.
Notez que plusieurs de ces champs seront invalides jusqu'à ce que le téléchargement soit complété ou ait échoué.

- **Get Error** : Récupère `VRCImageDownloadError` associé à l'événement.
- **Get Errormessage** : Récupère le message d'erreur en tant que `string`.
- **Get Material** : Récupère le matériau envoyé à la fonction `DownloadImage`.
- **Get Progress** : Récupère la progression du téléchargement de l'image sous forme de `float` entre 0 et 1. Utilisez cela pour suivre la progression du téléchargement, par exemple, pour des barres de chargement personnalisées.
- **Get Result** : La `Texture2D` de l'image téléchargée.
- **Get SizeInMemoryBytes** : Récupère la taille de la texture en octets en tant qu'`int`.
- **Get State** : Récupère le `VRCImageDownloadState` indiquant l'état du téléchargement de l'image.
- **Get TextureInfo** : Les informations sur la texture données à la fonction `DownloadImage` (TextureInfo).
- **Get Udonbehavior** : Récupère le UdonBehavior auquel les événements du téléchargement de l'image sont envoyés (UdonBehavior).
- **Get URL** : Récupère le `VRCURL` du téléchargement de l'image.

#### VRCImageDownloadState

Indique l'état du téléchargement de l'image dans `IVRCImageDownload` :

- **Pending** : N'a pas démarré ou toujours en cours de progression.
- **Error** : Le téléchargement a échoué (voir [VRCImageDownloadError](#vrcimagedownloaderror))
- **Complete** : Téléchargement terminé, la texture est prête à l'emploi.
- **Unloaded** : Élimination en attente après que `Dispose` ne soit appelé sur `IVRCImageDownload`.
- **Unknown** : État inconnu.

#### VRCImageDownloadError

Lorsque le téléchargement d'une image échoue, `OnImageLoadError` est appelé. Le champ `Error` sur `IVRCImageDownload` va contenir un des états d'erreur suivants :

- **InvalidURL** : L'URL de téléchargement utilisée dans `DownloadImage` est invalide.
- **AccessDenied** : L'accès à l'URL est refusé.
- **InvalidImage** : L'image téléchargée est invalide.
- **DownloadError** : Une erreur de requête web est survenue.
- **Unknown** : État d'erreur inconnu.

## Événements

* **OnImageLoadSuccess** : Renvoie `IVRCImageDownload`. Appelé lorsqu'un `VRCImageDownloader` a réussi à télécharger une image.
* **OnImageLoadError** : Renvoie `IVRCImageDownload`. Appelé lorsqu'un `VRCImageDownloader` n'a pas réussi à télécharger une image.