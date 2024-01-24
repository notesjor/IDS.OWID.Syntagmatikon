# IDS.OWID.Syntagmatikon

## Was liegt wo? - Für Autor*innen
- layouts > default.vue
    - Layout / Template
    - Kopfzeile / Fußzeile
    - Menü
- stores > resources
    - Informationen zu verfügbaren Ressourcen
    - Kurz-/Langnamen für Ressourcen z. B. KoMuX / Kompositamuster-Explorer
    - Beschreibungen, Bilder-Links, Schlagworte für Ressourcen
- public
    - Hier liegen alle Assets, die 1-zu-1 in die Ausgabe kopiert werden.
    - Im Wurzelverzeichnis /public sollten nur allgemeine Assets liegen, z. B. ids-logo / favicon
    - In Unterordnern können Bilder abgelegt werden.
    - Der Ordner public dient als Wurzelverzeichnis. Wenn also ein Bild im Ordner /public/img/picture.png liegt, dann kann dieses Bild mit /img/picture.png referenziert werden. <img src="/img/picture.png"></img>
- pages
    - Hier liegen alle Seiten.
    - Der Ordner pages dient als Wurzelverzeichnis. Wenn als eine Seite im Ordner /pages/guide/mypage.vue liegt, dann kann diese Seite mit /guide/mypage referenziert werden. <NuxtLink to="/guide/mypage">Klick mich</NuxtLink>

## Was liegt wo? - Für Entwickler*innen (ZUSATZ)
- assets
    - Hier liegen Assets, die kompiliert werden (im Gegensatz zu 'public' - siehe oben).
- artwort
    - Hier liegen Assets, die zum Erstellen von Assets verwendet werden. z. B. Vorlagen für Grafiken.
- components
    - Hier liegen Komponenten. Komponenten lassen sich als XML-Tag einbinden.
    - Namenskonvention: ResourcesList.vue - wird zu <resources-list></resources-list> aufgelöst.
    - Attribute für XML-Tags z. B. title <tile title="Ein Titel"></tile> sind als props realisiert (siehe Komponente).