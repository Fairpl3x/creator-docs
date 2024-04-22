---
title: "Contacts"
slug: "contacts"
hidden: false
createdAt: "2022-03-03T00:07:46.847Z"
updatedAt: "2022-05-03T19:31:41.007Z"
---

Les Contacts sont un système qui autorise les avatars à détecter des collisions sur soi-même ou d'autres avatars. Ces collisions peuvent ensuite être utilisées pour gouverner un Animator Controller et effectuer toutes sortes d'effets amusants.

Ces contacts sont distincts des Colliders généraux d'Unity. Les Contacts sont divisés en émetteurs (Senders) et en récepteurs (Receivers).  Les émetteurs sont juste là pour être détectés. Les récepteurs détectent les émetteurs, puis mettent à jour les paramètres en conséquence.

La quantité de contacts sur votre avatar affectent son [niveau de performance](/avatars/avatar-performance-ranking-system#pc-limits).

## VRCContactSender
Le composant Contact Sender définit un volume qui enverra un signal de contact sur un Contact Receiver.  
![contacts-59b6e82-2022-04-19_11-53-01_Unity.png](/img/avatars/contacts-59b6e82-2022-04-19_11-53-01_Unity.png)
- `Root Transform` - Le Transform où ce contact est placé. Si vide, nous utilisons le Transform de cet objet.

### Shape
Cette section contient les paramètres qui définissent la forme du Contact Sender.

- `Shape Type` - Type de forme de collision utilisé par ce contact. Vous pouvez choisir entre une sphère et une capsule.
- `Radius` - Taille du Collider s'étendant depuis son origine.
- `Height` - Hauteur de la capsule le long de l'axe choisi.
- `Position` - Décalage de position par rapport au Transform de base.
- `Rotation` - Décalage de rotation par rapport au Transform de base.

### Filtering
Cette section contient les paramètres qui vous autorisent à ajuster et à définir comment ce Contact Sender va interagir avec le [Contact Receiver](/avatars/avatar-dynamics/contacts/#vrccontactreceiver).

- `Collision Tags` - Liste de chaînes qui spécifie ce qu'elle peut affecter, ou par quoi elle est affectée. Pour qu'une collision réussisse, l'émetteur ainsi que le récepteur doivent tous les deux posséder au moins une paire de chaînes correspondante.

Comme exemple, les Tags ci-dessous vont entraîner le Sender à envoyer un signal de contact lorsqu'ils seront en contact avec le [Contact Receiver](/avatars/avatar-dynamics/contacts#VRCContactReceiver) par défaut pour la tête, ou tout autre [Contact Receiver](/avatars/avatar-dynamics/contacts/#vrccontactreceiver) personnalisé avec le tag `Face` -- Notez le F majuscule !
![contacts-de34d55-2022-04-19_11-53-34_NVIDIA_Share.png](/img/avatars/contacts-de34d55-2022-04-19_11-53-34_NVIDIA_Share.png)

## Colliders Standards
Un ensemble de Colliders standards sont définis dans l'Avatar Descriptor, dans une nouvelle section appelée "Colliders". Cette section vous laisse définir un nombre de Colliders standards qui existent sur chaque avatar.

- Head (Tête)
- Torso (Torse)
- Hands L/R (Main G/D)
- Feet L/R (Pieds G/D)
- Fingers L/R (Doigts G/D)
  - Index (Index)
  - Middle (Majeur)
  - Ring (Annulaire)
  - Little (Auriculaire)

Ces Colliders agissent premièrement comme des Contact Senders que les autres personnes peuvent détecter avec leurs avatars. Cependant, les Colliders des doigts et de la main sont aussi utilisés pour créer des Colliders [PhysBone](/avatars/avatar-dynamics/physbones) globaux qui peuvent être utilisés pour affecter les PhysBones des autres personnes.

## VRCContactReceiver
Le composant Contact Receiver défini un volume qui va recevoir un signal de Contact sur un contact avec un Contact Sender. Il va ensuite définir un [Animator Parameter](/avatars/animator-parameters) d'une certaine manière, tel que défini par l'utilisateur.
![contacts-6f84ac4-2022-04-19_11-57-25_NVIDIA_Share.png](/img/avatars/contacts-6f84ac4-2022-04-19_11-57-25_NVIDIA_Share.png)
- `Root Transform` - Transform où est placé ce contact. Si vide, on utilise le Transform de cet objet.

### Shape
Cette section contient des paramètres qui définissent la forme du Contact Receiver.

- `Shape Type` - Type de forme de collision utilisé par ce contact.
- `Radius` - Taille du Collider s'étendant depuis son origine.
- `Height` - Hauteur de la capsule le long de l'axe choisi.
- `Position` - Décalage de position par rapport au Transform de base.
- `Rotation` - Décalage de rotation par rapport au Transform de base.
- `Collision Tags` - Liste de chaînes qui spécifie ce qu'elle peut affecter, ou par quoi elle est affectée. Pour qu'une collision réussisse, l'émetteur ainsi que le récepteur doivent tous les deux posséder au moins une paire de chaînes correspondante. Les Tags de collision sont sensibles à la case.

### Filtering
Cette section contient des paramètres qui vous permettent d'ajuster et de définir comment ce Contact Receiver va interagir avec des [ContactSenders](/avatars/avatar-dynamics/contacts#VRCContactSender).

- `Allow Self` - Autorise ce contact à être affecté par vous-même.
- `Allow Others` - Autorise ce contact à être affecté par d'autres personnes.
- `Local Only` - Limite ce contact à ne fonctionner que sur le client local.
- `Collision Tags` - Liste de chaînes qui spécifie ce qu'elle peut affecter, ou par quoi elle est affectée. Pour qu'une collision réussisse, l'émetteur ainsi que le récepteur doivent tous les deux posséder au moins une paire de chaînes correspondante. Les Tags de collision sont sensibles à la case.

### Receiver
Cette section contient des paramètres qui définissent ce que fait le Receiver quand il reçoit un signal.

`Receiver Type` défini le comportement du réglage du paramètre quand un signal et reçu.
- `Constant` Vous informe lorsque n'importe quels Contacts sont présents. Se réinitialise lorsque aucun contact n'est détecté. Idéalement, utilisez ici un paramètre Bool. Est défini sur `1.0` pour un Float, `True` pour un Bool, et `1` pour un Int.
- `OnEnter` - Vous informe à l'instant où un contact est détecté. Se réinitialise immédiatement à la prochaine frame. Idéalement, utilisez ici un paramètre Bool. Est défini sur `1.0` pour un Float, `True` pour un Bool, et `1` pour un Int. Il peut optionnellement avoir une `Min Velocity` (vélocité minimum) définie ici.
- `Proximity` - Vous donne une valeur Float entre `0.0-1.0` en fonction de la proximité d'un contact avec le centre du déclencheur. Ceci est calculé comme le point le plus proche de l'émetteur à l'intérieur du récepteur. Vous devez utiliser un Float. Si plusieurs contacts sont détectés, il vous retournera le plus proche.

:::note
Si vous voulez avoir une mesure de proximité plus précise, vous devez ajuster le rayon de l'émetteur pour qu'il soit très petit.
:::

- `Parameter` - Le paramètre mis à jour dans l'Animator Controller. Ce paramètre N'A PAS besoin d'être défini sur la liste des paramètres synchronisés de l'avatar. Le paramètre peut être un Float, Bool, ou Int, selon le type de récepteur utilisé.
- `Value` - Valeur du paramètre mis à jours lorsqu'une collision est détectée. Le paramètre sera réinitialisé à zéro quand aucunes collisions ne seront présentes.
- `Min Velocity` - Vélocité minimum nécessaire pour qu'un Collider survenant puisse affecter ce déclencheur, uniquement actif dans le type `OnEnter`.