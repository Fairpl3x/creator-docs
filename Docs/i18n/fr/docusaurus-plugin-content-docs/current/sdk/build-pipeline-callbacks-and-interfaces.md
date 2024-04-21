---
title: "Fonctions de Rappels et Interfaces pour la Pipeline de Génération"
slug: "build-pipeline-callbacks-and-interfaces"
hidden: false
createdAt: "2023-04-11T21:01:07.855Z"
updatedAt: "2023-04-11T21:04:48.137Z"
---
Le SDK VRChat contient plusieurs interfaces qui peuvent être utilisées via des scripts d'éditeur pour améliorer le processus de génération de mondes et d'avatars.

## Pour les Composants de Scène

Les interfaces ci-dessous peuvent être utilisées en combinaison avec les `MonoBehaviours` et, en tant que telles, peuvent être placées directement sur des objets de scène, ce qui peut être utile dans une situation où vous devez conserver certaines références de scène spécifiques pour effectuer vos modifications.

### IEditorOnly

`VRC.SDKBase.IEditorOnly`

L'interface n'a pas de membres à implémenter.

Vous pouvez utiliser `IEditorOnly` pour marquer un script comme réservé à l'éditeur pour la validation du SDK. Cela fera en sorte que le SDK va l'ignorer lors de l'analyse de votre monde ou avatar à la recherche de scripts incompatibles.

### IPreprocessCallbackBehaviour

`VRC.SDKBase.IPreprocessCallbackBehaviour`

Membres à implémenter

```csharp
public void OnPreprocess()
{
}

public int PreprocessOrder { get; }
```

Cette interface vous permet d'exécuter du code personnalisé lorsque le processus de génération est sur le point de commencer. Cela peut être utile si vous devez effectuer des modifications avant que le contenu ne soit généré et envoyé sur VRChat.

> 🚧 Notez que cela ne permet pas d'automatiquement contourner la validation du SDK. Vous devez également utiliser `IEditorOnly` si vos scripts existent directement sur l'avatar que vous téléverser.

## Pour les Scripts à l'Échelle du Projet

Ces interfaces conviennent à tout ce qui ne dépend pas d'objets de scène particuliers et effectue des modifications en masse sur la scène/avatar avant d'être envoyé sur VRChat.

### IVRCSDKBuildRequestedCallback

`VRC.SDKBase.Editor.BuildPipeline.IVRCSDKBuildRequestedCallback`

Membres à implémenter

```csharp
    public int callbackOrder => 0;

    public bool OnBuildRequested(VRCSDKRequestedBuildType requestedBuildType)
    {
        return true;
    }
```



Où `VRCSDKRequestedBuildType` est une énumération de la forme suivante

```csharp
public enum VRCSDKRequestedBuildType
{
    Avatar,
    Scene,
}
```



Cette interface vous permet d'exécuter quelques logiques avant que le SDK VRChat ne commence à générer le contenu.

`OnBuildRequested` peut également annuler la génération en retournant `false`.