<template>
    <v-btn density="comfortable" prepend-icon="mdi-step-backward" variant="plain">
        <div class="nolink">
            <NuxtLink to="/datatypes">
                Zurück zu "Informationstypen"
            </NuxtLink>
        </div>
    </v-btn>
    <h1>Belege</h1>
    <p>Belege sind vom Lexikografen ausgewählte Textausschnitte auf der Basis von Korpusdaten. Belege können manuell
        ausgewählte KWICs sein, aber ebenso mehrere Sätze oder ganze Textabschnitte. Ihre Auswahl ist eine der
        anspruchsvollsten Aufgaben in der lexikografischen Praxis. In der oft riesigen Anzahl automatisch ermittelter
        Textfragmente müssen diejenigen gefunden werden, die die jeweiligen Gebrauchsaspekte treffsicher und anschaulich
        illustrieren und dabei aber gut verständlich sind, ohne weitere Erklärungen oder Hintergrundwissen hinzuziehen
        zu müssen. Diese Arbeit kann ein Computer nicht leisten.</p>
    <p>
        Im <hi>Syntagmatikon</hi> finden sich Belege unterschiedlicher Natur in nahezu allen Ressourcen.
    </p>

    <div>
        <compare title="">

            <!-- NOTE: Zuerst muss ein <template #headers> erstellt werden -->
            <!-- NOTE: dieses sollte mehrerer Tabs: <v-tab value="ALL" class="nocaps"> enthalten -->
            <!-- NOTE: value = ist der Name für den Tab, dessen Inhalt später referenziert wird -->
            <!-- NOTE: class="nocaps" = wird benötigt, damit der Tab nicht in Großbuchstaben dargestellt wird -->
            <!-- NOTE: Der Tab kann belieibig benannt werden -->

            <template #headers>
                <v-tab value="ALL" class="nocaps">alle Ressourcen</v-tab>
                <v-tab value="1" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_temp']"></resources-list-compact> </v-tab>
                <v-tab value="2" class="nocaps"><resources-list-compact
                        :filter="['PREPCON_kon']"></resources-list-compact></v-tab>
                <v-tab value="3" class="nocaps"><resources-list-compact
                        :filter="['PhrasKomp']"></resources-list-compact></v-tab>
                <v-tab value="4" class="nocaps"><resources-list-compact
                        :filter="['Redeeinleiter']"></resources-list-compact></v-tab>
                <v-tab value="5" class="nocaps"><resources-list-compact
                        :filter="['Verlaufsformen']"></resources-list-compact></v-tab>
                <v-tab value="6" class="nocaps"><resources-list-compact
                        :filter="['FesteWV']"></resources-list-compact></v-tab>
                <v-tab value="7" class="nocaps"><resources-list-compact
                        :filter="['SPRW']"></resources-list-compact></v-tab>
                <v-tab value="8" class="nocaps"><resources-list-compact
                        :filter="['DTWW']"></resources-list-compact></v-tab>
                <v-tab value="9" class="nocaps"><resources-list-compact
                        :filter="['WVBF']"></resources-list-compact></v-tab>
            </template>
            <template #tabs>

                <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit v-tab übereinstimmen -->
                <!-- NOTE: Das compare-item für "alle Ressourcen" sollte immer auf :simple="true" gesetzt sein - damit wird nur einfacher Inhalt angezeigt -->

                <compare-item value="ALL" :simple="true">

                    <!-- NOTE: Bitte das Bild manuell erstellen - Größe: 720x480 Pixel - 300dpi -->

                    <div style="text-align: center; width:100%">
                        <img src="/img/datatypes/matches/matches_all.png" style="text-align: center;" />
                    </div>

                </compare-item>

                <!-- NOTE: compare-items die NICHT simple="True" sind benötigen folgende Angaben -->
                <!-- NOTE: rkey = Dies ist der key aus ressources.js (Store) -->
                <!-- NOTE: description = Eine kurze Beschreibung des compare-items - Wird diese nicht angegeben, wird die shortDesription aus ressource.js genommen -->
                <!-- NOTE: webpage = Dies ist der Link zum Screenshot für die Info "Wo finde ich diese Angabe?" -->
                <!-- NOTE: Außerdem muss ein <template #explain> angelegt werden (siehe unten) -->

                <compare-item value="1" rkey="PREPCON_temp">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['PREPCON_temp']"></resources-list-compact> werden Belege in
                        zwei Formen angeboten:
                    </p>
                    <ul>
                        <li>ausgewählte KWICs, die die Autonomie einer Präposition-Nomen-Verbindung (ohne weitere
                            Ergänzungen) dokumentieren</li>
                        <li>ausgewählte Volltextbelege, die den typischen Gebrauch illustrieren</li>
                    </ul>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/prepcon_temp_amEnde.png" alt="" />
                        </div>
                        <div class="caption">
                            KWIC-Belege im Artikel „am Ende“ (Rubrik „Kurzartikel“)
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/prepcon_temp_amEnde_volltext.png" alt="" />
                        </div>
                        <div class="caption">
                            Volltextbelege im Artikel „am Ende“ (Rubrik „Kurzartikel“)
                        </div>
                    </template>
                </compare-item>

                <compare-item value="2" rkey="PREPCON_kon">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['PREPCON_kon']"></resources-list-compact> illustrieren die
                        Belege in der
                        Ausgangssprache Deutsch und den Kontrastsprachen Spanisch und Slowakisch Gebrauchsaspekte. Bei
                        den
                        fremdsprachigen Äquivalenten wird zusätzlich eine wörtliche Übersetzung der Belege angegeben.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/prepcon_kon_kochrezepte_header.png" alt="" />

                            <img src="/img/datatypes/matches/prepcon_kon_kochrezepte_deutsch.png" alt="" />

                            <img src="/img/datatypes/matches/prepcon_kon_kochrezepte_spanisch.png" alt="" />
                        </div>
                        <div class="caption">
                            Belege zum Gebrauchsaspekt ‚Kochrezept‘ im Artikel „nach Belieben – a su gusto“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_header.png" alt="" />

                            <img src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_deutsch.png" alt="" />

                            <img src="/img/datatypes/matches/prepcon_kon_dominantesHandeln_slowakisch.png" alt="" />
                        </div>
                        <div class="caption">
                            Belege für den Gebrauchsaspekt ‚Dominantes Handeln ohne Korrektiv‘ im Artikel „nach Belieben
                            - podľa ľubovôle“
                        </div>
                    </template>
                </compare-item>

                <compare-item value="3" rkey="PhrasKomp">
                    <!-- TODO: Inhalt ergänzen -->
                    <p>
                        In <resources-list-compact :filter="['PhrasKomp']"></resources-list-compact>
                        wird zu jedem der 1.576 Phrasenkomposita des Inventars ein manuell ausgewählter Beleg angeführt, der die Verwendung und Bedeutung der jeweiligen Bildung prototypisch illustriert. Die Belege enthalten das jeweilige Phrasenkompositum, ergänzt um den engen textuellen Kontext. Die Belege sind in den Ergebnistabellen standardmäßig ausgeblendet und lassen sich für jedes Phrasenkompositum separat aufklappen.
                    </p>

                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/phraskomp_gerede.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Treffermenge zu Phrasenkomposita mit dem Zweitglied <em>Gerede</em> (mit ausgeklappten Belegen)
                        </div>
                    </template>
                </compare-item>

                <compare-item value="4" rkey="Redeeinleiter">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['Redeeinleiter']"></resources-list-compact> ist in der
                        Spalte „Beleg“ je
                        Redeeinleiter jeweils ein Beleg pro Attributekombination hinterlegt. Der Beleg besteht aus dem
                        Satz, der den
                        Redeeinleiter enthält, sowie, wenn vorhanden, den vorangehenden und nachfolgenden Satz. Auf den
                        Beleg-Satz folgt
                        darunter eine Angabe zur Attributkombination des jeweiligen Redeeinleiters. Hierunter findet
                        sich ein
                        anklickbarer Link zu der Datei aus dem Redewiedergabe-Korpus, aus dem der Beleg entnommen ist.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/rede_beleg.png" alt="" />
                        </div>
                        <div class="caption">
                            Ausschnitt aus der Belegliste des Redeeinleiters „sagen“
                        </div>

                    </template>
                </compare-item>

                <compare-item value="5" rkey="Verlaufsformen">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['Verlaufsformen']"></resources-list-compact> werden manuell
                        ausgewählte
                        Belege zum Vorkommen eines Verbs in einer, zwei oder alle drei Verlaufsformen angegeben –
                        ergänzt um den engen
                        Kontext des Belegs.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/verlaufsformen_beleg_eng.png" alt="" />
                        </div>
                        <div class="caption">
                            Beleg für eine <em>am</em>-Progressiv-Verwendung im Eintrag „staunen“
                        </div>
                    </template>
                </compare-item>


                <compare-item value="6" rkey="FesteWV">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['FesteWV']"></resources-list-compact> illustrieren die
                        ausgewählten Belege
                        unterschiedliche Aspekte des Gebrauchs.</p>
                    <p>Rubrik „Musterartikel“</p>
                    <ul>
                        <li>Bedeutung</li>
                        <li>Typische Kontextmuster</li>
                        <li>Wertungsaspekt </li>
                        <li>Funktion in der Kommunikation</li>
                    </ul>
                    <p>Rubrik „Wortverbindungen mit Adjektiven“</p>
                    <ul>
                        <li>Gebrauchsbeschreibung</li>
                        <li>Typische Kontextmuster</li>
                    </ul>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>
                        <div class="exampleHeadline">Rubrik „Musterartikel“</div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/festeWV_bedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Beleg zur Bedeutung im Stichwort „Angst vor der eigenen Courage“ (Rubrik „Musterartikel“)
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/festeWV_wertungsaspekt.png" alt="" />
                        </div>
                        <div class="caption">
                            Beleg zum negativen Wertungsaspekt im Stichwort „Angst vor der eigenen Courage“ (Rubrik
                            „Musterartikel“)
                        </div>

                        <div class="exampleHeadline">Rubrik „Wortverbindungen mit
                            Adjektiven“</div>
                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/festeWV_gebrauchsbeschreibung.png" alt="" />
                        </div>
                        <div class="caption">
                            Beleg zur Gebrauchsbeschreibung im Artikel „blinder Alarm“ (Rubrik: „Wortverbindungen mit
                            Adjektiven“)
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/festeWV_kontextmuster.png" alt="" />
                        </div>
                        <div class="caption">
                            Beleg zum typischen Kontextmuster <em>sich als blinder Alarm entpuppen</em> im Artikel
                            „blinder Alarm“ (Rubrik: „Wortverbindungen mit Adjektiven)


                        </div>


                    </template>
                </compare-item>


                <compare-item value="7" rkey="SPRW">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        Im <resources-list-compact :filter="['SPRW']"></resources-list-compact> werden Volltextbelege zu
                        folgenden
                        Aspekten angezeigt:</p>
                    <ul>
                        <li>Bedeutung</li>
                        <li>Gebrauchsbesonderheiten</li>
                        <li>Formvarianten </li>
                        <li>Ersetzung von Komponenten</li>
                        <li>Typische Verwendung im Text</li>
                    </ul>
                    <p>Im Modul „Werbeslogans“ sind zusätzlich Volltext-Belege zur Entstehungsgeschichte hinterlegt.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/sprw_bedeutung.png" alt="" />
                        </div>
                        <div class="caption">
                            Belege zur Bedeutung im Artikel „Der Ton macht die Musik“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/sprw_ersetzung.png" alt="" />
                        </div>
                        <div class="caption">
                            Belege zum Muster <em>Der/Die X macht/machen die Musik</em> (‚Ersetzung von Komponenten‘) im
                            Artikel „Der Ton macht die Musik“
                        </div>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/sprw_geschichte_gap.png" alt="" />
                        </div>
                        <div class="caption">
                            Beleg zur Angabe ‚Geschichte‘ im Artikel „Geiz ist geil“
                        </div>

                    </template>
                </compare-item>

                <compare-item value="8" rkey="DTWW">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['SPRW']"></resources-list-compact> illustrieren bis zu drei
                        ausgewählte
                        Belege den Gebrauch der deutschen Wortverbindungen in der Domäne Wirtschaft.
                    </p>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/dtww_belege.png" alt="" />
                        </div>
                        <div class="caption">
                            Belege zum Eintrag „durchlaufender Posten“
                        </div>

                    </template>
                </compare-item>

                <compare-item value="9" rkey="WVBF">

                    <!-- NOTE: Der Inhalt des compare-items kann beliebig befüllt werden. -->
                    <p>
                        In <resources-list-compact :filter="['WVBF']"></resources-list-compact>werden Volltextbelege in
                        folgenden Knoten
                        und Subangaben angezeigt:</p>
                    <ul>
                        <li>Wortverbindungsknoten: für ‚Allgemeine Beschreibung‘; ‚Kontextanalyse‘; Kontrastanalyse</li>
                        <li>Musterknoten: für die Füller der Slots</li>
                    </ul>

                    <!-- NOTE: Dieses Template ist der Inhalt für "Beispiele und Interpretation?" -->

                    <template #explain>

                        <div class="exampleImg">
                            <img src="/img/datatypes/matches/wvGrund.png" alt="" />
                        </div>
                        <div class="caption">
                            Belege für die allgemeine Beschreibung des Knoten „mit Grund“
                        </div>

                    </template>
                </compare-item>






            </template>
        </compare>
    </div>





</template>