<script setup>
definePageMeta({
  layout: "subpage",
})
</script>
<script>
import { useLayoutStore } from '~/stores/layout';
export default {
  mounted() {
    const props = useLayoutStore();
    props.title = 'Nomina';
    props.parent = 'Wort- und Ausdrucksarten';
  },
}
</script>

<template>
  <div>
    <!-- NOTE: in Filter werden die Ressourcen angegeben -->
    <!-- NOTE: Es wird automatisch ein "Übersicht"-Tab angelegt - dieser hat den value="0" -->
    <!-- NOTE: Für jeden v-tab muss es ein <compare-item> geben - der value muss mit der Reihe in :filter übereinstimmen -->
    <compare
      :filter="['PREPCON_ex', 'PREPCON_temp', 'PREPCON_kon', 'KoMuX', 'PhrasKomp', 'Redeeinleiter', 'Verlaufsformen', 'WVBF', 'DTWW']">
      <compare-item value="0">
        <div style="text-align: center; width:100%">
          <img src="/img/pos/nouns/nouns_all.png" style="text-align: center;" />
        </div>
      </compare-item>

      <compare-item value="1" rkey="PREPCON_ex" description="Feldangaben im OWID-Sprichwörterbuch">
        <p>
          <r rkey="PREPCON_ex" /> bietet einen gesonderten Zugang
          über Nomen-Tabellen an.
        </p>
        <template #explain>

          <div style="margin-bottom: 20px; width: 100%;">
            <ul>
              <li> (an) <m>Bord</m>
              </li>
              <li> (in) <m>Ruhe</m>
              </li>
              <li> (auf) <m>Nachfrage</m>
              </li>
              <li> (ohne) <m>Zweifel</m>
              </li>
            </ul>
          </div>
        </template>
      </compare-item>

      <compare-item value="2" rkey="PREPCON_temp"
        description="Feste Wortverbindungen des Deutschen - Modul: Wortverbindungen mit Adjektiv">
        <p>
          In
          <r rkey="PREPCON_temp" /> kann man ein Inventar von
          Präposition-Nomen-Verbindungen mit Zeit-Nomina abrufen.
        </p>

        <template #explain>
          <div>

            <ul>
              <li>(am) <m>Anfang</m>
              </li>
              <li>(vor) <m>Sonnenaufgang</m>
              </li>
              <li>(über) <m>Nacht</m>
              </li>
              <li>(ohne) <m>Unterlass</m>
              </li>
            </ul>
          </div>
        </template>
      </compare-item>

      <compare-item value="3" rkey="PREPCON_kon"
        description="Musterbank argumentmarkierender Präpositionen - Information: Prädikate (Verbalprädikate und Prädikatsgefüge)">
        <p>
          In
          <r rkey="PREPCON_kon" /> bilden vier Nomina in
          Verbindung mit
          einer Präposition den Ausgangspunkt für die kontrastive Beschreibung deutsch – spanisch; deutsch-slowakisch.
        </p>

        <template #explain>
          <ul>
            <li>(am) <m>Anfang</m> - al <m>principio</m> - na
              <m>začiatku</m>
            </li>
            <li>(auf) <m>Anhieb</m> - de <m>inmediato</m> - na
              prvý <m>pokus</m>
            </li>
            <li>(mit) <m>Genugtuung</m> - con <m>satisfacción</m> - so <m>zadosťučinením</m>
            </li>
            <li>(nach) <m>Belieben</m> - a su <m>gusto</m> -
              podľa <m>ľubovôle</m>
            </li>
          </ul>

        </template>
      </compare-item>

      <compare-item value="4" rkey="KoMuX" description="">
        <p>
          In
          <r rkey="KoMuX" /> bilden Nomina die Gruppe der
          Zweitglieder.
          Zum anderen können sie neben anderen Wort- und Ausdrucksarten auch als Erstglieder fungieren.
        </p>

        <template #explain>
          <ul>
            <li>
              <m>Fußball</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: <m>Fuß</m> + <m>ball</m>
              </li>
            </ul>
            <li>
              <m>Kleinkind</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: Klein + <m>kind</m>
              </li>
            </ul>
            <li>
              <m>Fahrrad</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: Fahr + <m>rad</m>
              </li>
            </ul>
            <li>
              <m>Ich-Erzähler</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: Ich + <m>Erzähler</m>
              </li>
            </ul>
          </ul>
        </template>
      </compare-item>

      <compare-item value="5" rkey="PhrasKomp">
        <p>
          In
          <r rkey="PhrasKomp" />
          bilden Nomina die Gruppe der Zweitglieder. Auch bei den Gesamtbildungen handelt es sich somit um Nomina.
        </p>

        <template #explain>
          <ul>
            <li>
              <m>Wer-kriegt-wen-Albernheit</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: Wer-kriegt-wen + <m>Albernheit</m>
              </li>
            </ul>

            <li>
              <m>"Schau'mer-mal"-Franz</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: "Schau'mer-mal" + <m>Franz</m>
              </li>
            </ul>
            <li>
              <m>"Der tut nichts"-Hund</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: "Der tut nichts" + <m>Hund</m>
              </li>
            </ul>
            <li>
              <m>Hin-und-her-Gerede</m>
            </li>
            <ul>
              <li> <em>Konstituenten</em>: Hin-und-her + <m>Gerede</m>
              </li>
            </ul>
          </ul>
        </template>
      </compare-item>

      <compare-item value="6" rkey="Redeeinleiter">
        <p>
          In
          <r rkey="Redeeinleiter" /> kann man alle Nomen aus dem
          Redewiedergabe-Korpus abrufen, die als Rede- oder Gedankeneinleiter genutzt werden.
        </p>

        <template #explain>
          <ul>
            <li>
              <m>Absicht</m>, sie zu beleidigen...
            </li>
            <li>
              <m>Ahnung</m>, es werde ihm vielleicht nicht gegönnt sein...
            </li>
            <li>Aber er hält das dem Vater gegebne <m>Wort</m>, seine Traute nicht mehr zu
              besuchen.</li>
            <li>Eine dumpfe <m>Angst</m>: Sie mißgönnen mir die Erlösung, sind hinter mir,
              verfolgen mich, jagte ihn vorwärts.</li>
          </ul>
        </template>
      </compare-item>

      <compare-item value="7" rkey="Verlaufsformen">
        <p>
          In
          <r rkey="Verlaufsformen" /> wird der Gebrauch
          nominalisierter
          deutscher Verben hinsichtlich ihres Vorkommens in drei Verlaufsformen dokumentiert.
        </p>

        <template #explain>
          <ul>
            <li>(am) <m>Anrollen</m>
            </li>
            <li>(am) <m>Verfallen</m>
            </li>
            <li>(beim) <m>Pflücken</m>
            </li>
            <li>(beim) <m>Testen</m>
            </li>
          </ul>
        </template>
      </compare-item>

      <compare-item value="8" rkey="WVBF">
        <p>
          In
          <r rkey="WVBF" /> ist das Nomen <em>Grund</em> der
          zentrale
          Knoten für das Netz präpositionaler Verbindungen.
        </p>

        <template #explain>
          <ul>
            <li>(aus) <m>Grund</m>
            </li>
            <li>(auf) <m>Grund</m>
            </li>
            <li>(im) <m>Grund</m>
            </li>
            <li>(mit) <m>Grund</m>
            </li>
            <li>(ohne) <m>Grund</m>
            </li>
          </ul>
        </template>
      </compare-item>

      <compare-item value="9" rkey="DTWW">
        <p>
          In
          <r rkey="DTWW" /> sind Nomina sowohl Basiskomponenten
          von
          Kollokationen als auch eigene Einträge verzeichnet.
        </p>

        <template #explain>
          <ul>
            <li>(abnehmende) <m>Nachfrage</m>
            </li>
            <li>(anziehende) <m>Kurse</m>
            </li>
            <li>
              <m>Barausschüttung</m>
            </li>
            <li>
              <m>Deckungsschutz</m>
            </li>
          </ul>
        </template>
      </compare-item>
    </compare>
  </div>

</template>