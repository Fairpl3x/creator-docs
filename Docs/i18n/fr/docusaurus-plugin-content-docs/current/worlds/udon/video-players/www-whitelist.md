---
title: "Liste blanche pour les Lecteurs Vidéo"
slug: "www-whitelist"
hidden: false
createdAt: "2020-09-10T18:56:07.748Z"
updatedAt: "2023-03-09T22:55:53.659Z"
---
:::note

VRChat sur Quest peut lire des vidéos à partir de liens directs vers des fichiers vidéo. Ces URLs se terminent généralement avec un nom de fichier vidéo supporté, comme par exemple http://something.com/video.mp4 ou http://test.com/cats.webm. Si vous visitez le lien et voyez tout un site autour de la vidéo, ce lien ne se lira probablement pas sur Android /  Quest car l'application que VRChat utilise pour résoudre ces liens vers des vidéos ne s'exécute pas sur Android. Les créateurs devront déplacer la vidéo vers un hôte qui supporte les liens directs, ou devront trouver une solution pour contourner ce problème.

Quelque solutions de contournement existent pour les utilisateurs avancés. VRChat n'a pas examiné ces méthodes, ne les approuve pas et ne peut garantir leur fonctionnement continuel, mais elles ont été recommandées par des modifications suggérées à notre documentation.

* [Streamlink](https://streamlink.github.io)
* [ArchiTechAnon's "Understanding URLs in VRChat" post](https://ask.vrchat.com/t/protv-by-architechanon-usage-guides-and-walkthroughs/7029/11)"

De futures mises à jour pourront améliorer cette fonctionnalité.

:::

Les services suivants sont sur la liste blanche du lecteur vidéo.

Si un service n'est pas dans cette liste, il n'y a aura pas de lecture à moins d'avoir activé "Allow Untrusted URLs" dans les paramètres.

VRChat sur Android ne lira pas de vidéos si l'hôte n'utilise pas le protocole HTTPS.

:::caution

Le lecteur vidéo en exemple dans le SDK ne gérera pas les cas où le Master a désactivé "Untrusted URLs", ce qui empêchera la lecture des vidéos. Les lecteurs vidéo créés par les joueurs devront avoir un code Udon modifié pour donner la propriété de synchronisation à l'utilisateur demandant la vidéo.
:::

## Services sur Liste Blanche

Les services listés ci-dessous sont intrinsèquement dignes de confiance et sont autorisés avec notre liste blanche d'URL par défaut. La ressource accédée (c'est-à-dire l'URL que vous entrez/utilisez dans le lecteur vidéo) doit résider dans le service de domaine listé à côté du nom du service. Cela signifie que les réducteur d'URL peuvent ne pas fonctionner !

:::note

*Le listage ci-dessous ne constitue pas des partenariats ou des endossements et peut changer à tout moments sans préavis*.
:::

| Service | Domaine |
| --- | --- |
| --- | --- |
| Soundcloud | `soundcloud.com` |
| Facebook Video | `*.facebook.com` |
| NicoNico | `*.nicovideo.jp` |
| Twitch.TV | `*.twitch.tv` |
| Vimeo | `*.vimeo.com` |
| Youku | `*.youku.com` |
| YouTube | `*.youtube.com`,`youtu.be` |
| VRCDN | `*.vrcdn.live`,`*.vrcdn.video` |
| Topaz Chat | `ciel.topaz.chat` |
