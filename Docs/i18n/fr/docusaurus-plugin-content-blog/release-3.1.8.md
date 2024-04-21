---
slug: release-3-1-8
date: 2022-9-18
title: Version 3.1.8
authors: [momo]
tags: [release]
draft: false
---
### Résumé

Ajoute de nouveaux Shader Globals et méthodes VRCGraphics

<!--truncate-->

### Changements

Ajout de 3 Shader Globals accessibles par n'importe quel shader d'avatar ou de monde :
* float _VRChatCameraMode :
    * 0 - Rendu normal
    * 1 - Rendu dans une caméra portative VR
    * 2 - Rendu dans une caméra portative de bureau
    * 3 - Rendu pour une capture d'écran

* float _VRChatMirrorMode :
    * 0 - Rendu normalement, pas dans un miroir
    * 1 - Rendu dans un miroir vu en VR
    * 2 - Rendu dans un miroir vu en mode bureau


* float3 _VRChatMirrorCameraPos - Position dans l'espace mondial de la caméra du miroir (indépendante des yeux, "centrée" en VR)

* Les champs d'entrée World s'ouvriront désormais avec le clavier modal lorsqu'ils sont interagis. Si ce comportement n'est pas souhaité, ajoutez le composant nouvellement créé `VRCInputFieldKeyboardOverride` pour spécifier comment remplacer ce comportement. Définir son paramètre sur `Default` ouvrira le modal tactile tandis que `Override` ne l'ouvrira pas.
* Nouvelle option `cameraClearFlags` sur VRCMirrorReflection qui remplace les indicateurs de suppression de caméra utilisés dans le miroir
    * La valeur par défaut est `MirrorClearFlags.FromReferenceCamera` qui conserve le comportement actuel du rendu identique à la caméra active
* Les options `customSkybox` et `customClearColor` permettent des couleurs et des ciels spécifiques au miroir
* Vous pouvez maintenant définir la gravité dans un monde à 0 ou à des valeurs négatives
* Correction : les masques fournis par l'utilisateur sur la couche FX étaient ignorés et empêchaient les animations de transformation des gestes de fonctionner. [Docs mises à jour](https://docs.vrchat.com/docs/playable-layers#fx).
* Ajout de plusieurs nouveaux nœuds Udon liés à la manipulation des graphiques et des shaders :
    * VRCGraphics.DrawMeshInstanced
    * VRCShader.SetGlobalFloat
    * VRCShader.SetGlobalFloatArray
    * VRCShader.SetGlobalVector
    * VRCShader.SetGlobalVectorArray
    * VRCShader.SetGlobalMatrix
    * VRCShader.SetGlobalMatrixArray
    * VRCShader.SetGlobalInteger
    * VRCShader.SetGlobalTexture
    * VRCShader.SetGlobalColor
* Les fonctions VRCShader acceptent une entrée de type chaîne dans certains cas (pour les noms de texture, principalement). Vous devez utiliser le préfixe _Udon pour ces entrées
    * Il y a une exception. Les fonctions VRCShader accepteront également la chaîne exacte _AudioTexture pour accommoder le système AudioLink déjà largement utilisé par la communauté.