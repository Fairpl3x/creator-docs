---
title: "Chargement de String"
slug: "string-loading"
excerpt: "Charger des fichiers texte depuis Internet dans vos mondes VRChat"
hidden: false
createdAt: "2023-02-07T01:10:57.067Z"
updatedAt: "2023-03-26T00:35:05.784Z"
---

Le Chargement de String vous permet de télécharger des fichiers textes depuis internet et de les utiliser dans votre monde VRChat. Vous pouvez soit utiliser le script `DownloadString` inclut dans le SDK, ou créer votre propre script en utilisant la fonction `VRCStringDownloader.LoadUrl`.

- Vos fichiers textes peuvent être dans n'importe quel format, comme par exemple`.txt` ou `.json`.
* Un String peut être téléchargé toutes les cinq secondes. Si cette limite est dépassée, les téléchargements de images seront mis en file d'attente et téléchargés dans un ordre aléatoire.
* Un String peut seulement avoir une taille maximale de 100 Mo.
* Vous ne pouvez avoir que 1000 éléments en file d'attente.

# URLs de Confiance

Si un site n'est pas dans la liste, il n'y aura pas de téléchargements à moins d'avoir activé **Allow Untrusted URLs** dans les paramètres d'utilisateur.

Les URLs suivantes sont disponibles :

* GitHub (`*.github.io`)
* Pastebin (`pastebin.com`)
* Github Gist (`gist.githubusercontent.com`)

# Guides
## Utiliser le script `DownloadString` pour télécharger un String

Le SDK inclut un script pour télécharger des Strings facilement :

1. Créez un nouveau GameObject dans votre scène.
2. Ajoutez un composant `UdonBehaviour`.
3. Sélectionnez `DownloadString` comme programme source.
4. Entrez l'URL et sélectionnez le composant texte où vous désirez y afficher le texte téléchargé.

## Créer votre propre script pour LoadUrl

Vous pouvez utiliser la fonction `VRCStringDownloader.LoadUrl` pour télécharger des Strings dans vos propres graphs.

1. Exécutez `VRCStringDownloader.LoadUrl` à l'aide d'une URL et spécifiez un UdonBehaviour.
2. Attendez que l'événement `OnStringLoadSuccess` ou `OnStringLoadError` soit appelé sur l'UdonBehaviour spécifié.
3. Utilisez l'événement `IVRCStringDownload` pour obtenir le `Résultat` du téléchargement du String.

# Nouveaux nœuds UdonGraph
## Nouveaux événements
### OnStringLoadSuccess

Retourne `IVRCStringDownload`. Appelé lorsque la fonction `LoadUrl` a téléchargé avec succès le String depuis internet.

### OnStringLoadError

Retourne `IVRCStringDownload`. Appelé lorsque la fonction `LoadUrl` a échoué à télécharger le String.

## Nouveaux types
### VRCStringDownloader

Utilisez cette classe statique pour télécharger des Strings depuis le web.

#### VRCStringDownloader.LoadUrl

* **Url** : l'URL à charger depuis internet.
* **UdonBehaviour** : le UdonBehaviour auquel envoyer les événements.
    * Dans Udon Graph, cela est par défaut le UdonBehaviour actuel
    * Dans UdonSharp, vous pouvez utiliser `(IUdonEventReceiver)this`

### IVRCStringDownload

Résultat des événements de chargement du String.

* **Get Error (`string`)** : Le message d'erreur pour `OnStringLoadError`.
* **Get ErrorCode (`int`)** : Le code d'erreur HTTP pour `OnStringLoadError`.
* **Get Response (`string`)** : Le String qui a été téléchargée.
* **Get UdonBehaviour (`UdonBehaviour`)** : Le UdonBehaviour auquel les événements sont envoyés.
* **Get Url (`VRCUrl`)** : Obtient l'URL à partir de laquelle le téléchargement a été tenté.