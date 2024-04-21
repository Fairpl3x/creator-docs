---
title: "API Publique du SDK"
slug: "public-sdk-api"
hidden: false
createdAt: "2023-08-18T21:01:07.855Z"
updatedAt: "2023-08-18T21:04:48.137Z"
---

Le SDK de VRChat fournit un ensemble d'interfaces et de méthodes que vous pouvez utiliser pour améliorer votre processus de création de mondes et d'avatars.

Vous pouvez trouver le dossier **Public SDK API** dans les deux SDK :

- Packages > com.vrchat.worlds > Editor > VRCSDK > SDK3 > Public SDK API
- Packages > com.vrchat.avatars > Editor > VRCSDK > SDK3A > Public SDK API

Cependant, la plupart des événements et méthodes sont partagés entre les SDK de mondes et d'avatars et sont définis dans:

- Packages > com.vrchat.base

## Quest-ce qui est disponible?

Pour obtenir la liste la plus à jour des événements et méthodes, nous vous recommandons de consulter directement les fichiers mentionnés ci-dessus.

Voici cependant une petite liste de ce qui est disponible :

- Événements OnEnable/OnDisable du panneau principal du SDK
- Événements de début/fin de génération
- Événements de succès/erreur d'envoi
- Méthodes de génération, de génération et de test, et de génération et d'envoi

:::note
Si vous rencontrez des exceptions lors du processus de génération, vous pouvez consulter la liste des exceptions attendues dans les définitions d'interface.
:::

## Exemples

### Obtenir une instance d'un générateur

Se connecter à `OnSdkPanelEnable` garantira que la fenêtre du SDK a été ouverte et que les générateur ont été enregistrés. Vous pouvez ensuite utiliser `TryGetBuilder` pour obtenir une instance du générateur dont vous avez besoin.

> Vous pouvez appeler `VRCSdkControlPanel.TryGetBuilder` à n'importe quel moment, mais il renverra `false` si la fenêtre du SDK n'est pas ouverte ou si le générateur que vous tentez d'accéder n'est pas disponible.

```cs
[InitializeOnLoadMethod]
public static void RegisterSDKCallback()
{
    VRCSdkControlPanel.OnSdkPanelEnable += AddBuildHook;
}

private IVRCSdkAvatarBuilderApi _builder;

private static void AddBuildHook(object sender, EventArgs e)
{
    VRCSdkControlPanel.TryGetBuilder<IVRCSdkAvatarBuilderApi>(out _builder);
}
```

### Exécution du code avant la génération

`OnSdkBuildStart` s'exécute juste avant le lancement du processus de construction par le SDK, mais après la validation et le passage des rappels de demande de construction.

```cs
[InitializeOnLoadMethod]
public static void RegisterSDKCallback()
{
    VRCSdkControlPanel.OnSdkPanelEnable += AddBuildHook;
}

private static void AddBuildHook(object sender, EventArgs e)
{
    if (VRCSdkControlPanel.TryGetBuilder<IVRCSdkAvatarBuilderApi>(out var builder))
    {
        builder.OnSdkBuildStart += OnBuildStarted;
    }
}

private static void OnBuildStarted(object sender, object target)
{
    Debug.Log("Building " + ((GameObject) target).name);
}
```

### Génération depuis un script

```cs
[MenuItem("My Tools/Build Selected Avatar")]
public static async void BuildSelectedAvatar()
{
    var avatar = Selection.activeGameObject;
    if (!VRCSdkControlPanel.TryGetBuilder<IVRCSdkAvatarBuilderApi>(out var builder)) return;
    try {
      await builder.BuildAndTest(avatar);
    } catch (Exception e) {
      Debug.LogError(e.Message);
    }
}
```

## À noter

:::caution
Si vous utilisez actuellement la réflexion pour accéder aux éléments internes du SDK, nous vous recommandons de passer à l'API publique dès que possible.
:::

Nous allons faire de notre mieux pour fournir une API stable, mais elle est encore sujette à des changements futurs. Nous vous recommandons de tirer parti de la sémantique de version pour définir avec quelle version du SDK vos outils sont compatibles. [En savoir plus ici](https://vcc.docs.vrchat.com/vpm/packages/#versions-and-ranges).