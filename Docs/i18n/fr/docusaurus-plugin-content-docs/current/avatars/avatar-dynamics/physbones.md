---
title: "Les PhysBones"
slug: "physbones"
hidden: false
createdAt: "2022-03-03T00:02:11.576Z"
updatedAt: "2023-05-15T15:19:43.138Z"
---
La fonctionnalité des PhysBones est un ensemble de composants qui vous permet d'ajouter des mouvements secondaires aux avatars, vous permettant d'ajouter des mouvements sur des éléments comme les cheveux, la queue, les oreilles, les habits, et bien plus encore ! Les utiliser correctement rendra votre avatar plus dynamique et vivant.

Les PhysBones sont un remplacement des Dynamic Bones. Bien que les deux systèmes partagent beaucoup de points communs, il y a quelques différences majeures avec les PhysBones, de telle sorte que les avatars ne pourront pas tous être convertis sur le système de VRChat.

Un exemple de comment utiliser Avatar Dynamics peut être trouvé dans le SDK sous `Packages > VRChat SDK - Avatars > Samples > Dynamics > Robot Avatar`.

# VRCPhysBone

Défini une chaîne d'os à animer grâce aux PhysBones. Ceux-ci peuvent être utilisés pour simuler un corps souple et un mouvement secondaire, comme des cheveux, des queues, des oreilles souples, et bien plus ! Il contient plusieurs options de configuration, et peut être configuré de plusieurs manières.

De plus, les PhysBones peuvent interagir avec vous et d'autres personnes ! Si vous avez donné la permission aux autres utilisateurs, ils pourront saisir les PhysBones configurés sur votre avatar, appuyer sur la gâchette tout en maintenant le PhysBone pour le "Poser" et maintenir sa position. Vous pouvez aussi désactiver ceci lors de la configuration afin de ne pas autoriser la pose, ne pas autoriser la saisie, ou ne pas autoriser les collisions tout court.

Bien qu'ils n'ont pas été prévus pour, les PhysBones servent également de substituts raisonnables pour les vêtements, jusqu'à ce que nous implémentions notre propre composant Cloth.

![](/img/avatars/physbones-ca9ee06-2022-05-04_18-23-09_Unity.png)

## Versions

Vous pouvez à présent sélectionner la version du composant VRCPhysBone que vous souhaitez utiliser, directement dans ce dernier. Par défaut, la dernière version sera choisie à la création d'un nouveau composant. Les avatars existants continueront d'utiliser leur ancienne version, à moins d'être manuellement mis à jour et à nouveau mis en ligne.

Version 1.0:

- La version de base du composant VRCPhysBone.

Version 1.1:

- Mise à jour des Os compressibles, permettant aux os de s'écraser et d'affecter leur longueur par mouvement.
- La gravité agit maintenant comme un ratio de degré pour la rotation des os en repos. Une valeur d'attraction positive est requise pour que les os puissent bouger dans la direction de la gravité.
- La rigidité agit maintenant comme un ratio qui garde un os dans son orientation précédente.

## Transforms

`Root Transform` - Le Transform où ce composant s'amorce. Si laissé vide, nous supposons que l'on démarre depuis ce GameObject.  
`Ignore Transforms` - Liste de Transforms ignorés, qui ne doivent pas être affectés par ce composant. Les Transforms ignorés comprennent automatiquement tous les enfants de ce Transform.  
`Endpoint Position` - Vecteur utilisé pour créer des os supplémentaires à chaque extrémité de la chaîne. Utilisé uniquement si la valeur est différente de zéro. Généralement, vous voudrez augmenter ce dernier le long de l'axe +Y, qui pointe "vers le haut" de l'os.  
`Multi-Child Type` - Comportement de l'os racine lorsque plusieurs chaînes d'os existent. Celui-ci possède trois modes :

Si défini sur **Ignore**, l'os racine ne bougera pas, et ignorera la physique. Utile pour des éléments tels que les cheveux, car vous pouvez utiliser seulement un composant PhysBone à la racine pour affecter tous les os des cheveux !

Si défini sur **First**, l'os racine va former une chaîne continue avec le premier os de la chaîne dans la hiérarchie. Toutes les autres chaînes continueront de fonctionner, mais elles commenceront à partir du premier os dans chaque chaîne respectives au lieu de la racine comme la première chaîne.

Si défini sur **Average**, le mouvement de l'os racine sera la moyenne de toutes les autres chaînes. Cela signifie que la base de chaque chaîne pourra bouger.

:::caution

Si vous utilisez un seul os racine, ou un seul os racine avec plusieurs enfants (mais pas des petits-enfants), vous **devez** définir une position de fin !

Par exemple, si vous placer le composant PhysBone sur n'importe quel `RootBone` ci-dessous, vous **devez** définir un **Endpoint Position** pour que les PhysBones puissent fonctionner. C'est différent des Dynamic > Bones !

Os Unique

- `RootBone`

Enfants multiples, Racine unique

- `RootBone`
    - `ChildBone1`
    - `ChildBone2`
    - `ChildBone3`
    - `ChildBone4`

Vous pouvez aussi adresser ceci en ajoutant des "end bones" après chaque `ChildBone`, mais cela induit d'éditer l'armature.

:::

## Forces