# IDS.OWID.Syntagmatikon

## Was liegt wo? - Für Autor*innen
- layouts - hier liegen Layouts, die folgendes festlegen
    - Layout / Template
    - Kopfzeile / Fußzeile
    - Menü
    - Verfügbare Layouts:
        - base = Bitte nicht verändern. Dies ist das Basis-Layout, von dem alle anderen abgeleitet werden.
        - default = Dies ist das automatisch Standard-Layout
        - full = Layout für Seiten mit voller Breite.
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
    - Wenn es sich um eine Einzelseite im Hauptmenü handelt, dann wird diese als einzelne VUE-Page angelegt: z. B.: search-resources.vue
    - Wenn die Seite mehrere Unterseiten hat, dann:
        - wird ein Ordner angelegt mit dem Titel der Seite z. B. datatypes
        - Dieser Ordner muss eine Datei enthalten, die den Namen index.vue trägt. Diese Datei enthält den Inhalt der Seite. Sie ist dann z. B. wie folgt adressierbar: /datatypes - der Zusatz wie /datatypes/index entfällt.
        - Alle anderen Unterseiten liegen im selben Ordner. Sie können beliebige Namen enthalten z. B. myPage.vue. Diese Seiten sind dann z. B. wie folgt adressierbar: /datatypes/myPage
- tools
    - In diesem Verzeichnis liegen verschiedene Tools. z. B.:
        - convert (konvertiert DOCX-Word zu HTML): (1) Text in das Dokument "document.docx" kopieren und speichern. (2) convert.bat mit Doppelklick starten. (3) Inhalt der Datei page.txt kopieren. 

## Was liegt wo? - Für Entwickler*innen (ZUSATZ)
- assets
    - Hier liegen Assets, die kompiliert werden (im Gegensatz zu 'public' - siehe oben).
- artwort
    - Hier liegen Assets, die zum Erstellen von Assets verwendet werden. z. B. Vorlagen für Grafiken.
- components
    - Hier liegen Komponenten. Komponenten lassen sich als XML-Tag einbinden.
    - Namenskonvention: ResourcesList.vue - wird zu <resources-list></resources-list> aufgelöst.
    - Attribute für XML-Tags z. B. title <tile title="Ein Titel"></tile> sind als props realisiert (siehe Komponente).
- api - Dieser Ordner enthält verschiedene API-Clients:
    - korapJsClient - Dies ist eine Implementierung für die KorAP-API. Die Dateien bitte nicht modifizieren - hierfür gibt es ein separates GIT-Repository. Folgende Komponenten sind enthalten:
        - auth.js - zur Authentifizierung
        - kwic.js - zur Suche und Anzeige von KWIC-Daten (erforder vorherige Authentifizierung)
        - userInfo.js - zur Abfrage von Infos über angemeldete Nutzer*in (erforder vorherige Authentifizierung)
        - virtualCorpus.js - zum Anlegen und Verwalten virtueller Korpora (erforder vorherige Authentifizierung)
    - owidPlusLive - Dies ist eine einfache Implementierung der OWIDplusLIVE-API. Die Datei bitte nicht modifizieren - hierfür gibt es ein separates GIT-Repository. Folgende Komponenten sind enthalten:
        - Abfrage zur Darstellung einfacher Charts