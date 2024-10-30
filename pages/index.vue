<template>
  <div>
    <v-row>
      <v-col>
        <h1>Syntagmatikon</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Das korpusbasierte Portal <hi>Syntagmatikon</hi> bietet Informationen zum Gebrauch von sprachlichen
        Ausdrücken, die durch ihre wiederkehrende lineare Abfolge zu mehr oder weniger festen Wortschatzeinheiten
        geworden sind.
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <Sampler :items="sample"></Sampler>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Aktuell werden Phraseologismen, Sprichwörter und Sprüche; Kollokationen; Komposita und andere
        Wortbildungseinheiten; Präpositionen + Substantiv-Kombinationen; Verb + Präpositionen-Kombinationen;
        wortgruppenartige Redeeinleiter dokumentiert und beschrieben. Des Weiteren widmet sich das Portal der Analyse
        und Darstellung zugrunde liegender Schablonen und Schemata (Muster) und deren vielfachen Vernetzungen im
        deutschen Wortschatz.
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      sample: [
        {
          tokens: ["Wie", "Tag", "und", "Nacht", "oder:", "Andere", "Länder,", "andere", "Sitten.", "Während", "Jamaica-Fans", "90", "Minuten", "lang", "dem", "Reggae", "frönten,", "fleht", "man", "für", "Iran", "zu", "Allah."],
          annotations: [{
            ranges: [{
              from: 5,
              to: 9
            }
            ],
            references: [{
              color: '#0d65c2',
              source: 'OWID-Sprichwörterbuch',
              article: 'Andere Länder, andere Sitten',
              type: 'Sprichwort',
              href: 'https://www.owid.de/artikel/404233',
            }, {
              color: '#008702',
              source: 'SpruchList',
              article: 'Andere Länder, andere Sitten',
              type: 'Sprichwort',
              href: 'http://uwv.ids-mannheim.de/spruchlist/?search=Andere%20L%C3%A4nder,%20andere%20Sitten',
            }
            ]
          }
          ],
        }, {
          tokens: ["Nun", "gibt", "man", "das", "Gemüse", "und", "den", "Fond", "über", "das", "Fleisch", "in", "den", "Bräter,", "deckt", "ihn", "zu", "und", "schiebt", "alles", "bei", "160", "Grad", "für", "drei", "Stunden", "in", "den", "Ofen.", "„Das", "macht", "sich", "dann", "fast", "von", "selbst“,", "sagt", "Höfler.", "Später", "muss", "nur", "noch", "die", "Soße", "püriert", "und", "–", "je", "nach", "Belieben", "–", "mit", "etwas", "Rotwein", "oder", "Brühe", "verdünnt", "werden."],
          annotations: [{
            ranges: [{
              from: 23,
              to: 24
            }, {
              from: 25,
              to: 26
            }
            ],
            references: [{
              source: 'PREPCON <sup>temporal</sup>',
              article: 'für Stunden',
              type: 'Präposition-Nomen-Verbindung',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul2/artikel/fuer_Stunden/index.html',
              color: '#0d65c2'
            },
            ]
          }, {
            ranges: [{
              from: 48,
              to: 50
            }
            ],
            references: [{
              source: 'PREPCON <sup>kontrastiv</sup>',
              article: 'nach Belieben',
              type: 'Präposition-Nomen-Verbindung',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul3/gebrauch/nachBelieben.html',
              color: '#008702'
            }
            ]
          }
          ],
        }, {
          tokens: ["»Im-fremden-Bett-schlaf-ich-immer-schlecht-Sensibelchen«", "werden", "staunen:", "Eine", "ganze", "Auswahl", "von", "Kopfkissen", "in", "verschiedenen", "Härtegraden", "ist", "Teil", "eines", "mit", "einem", "Bettenhersteller", "ausgeklügelten", "»Schlafkonzepts«."],
          annotations: [{
            ranges: [{
              from: 0,
              to: 1
            }
            ],
            references: [{
              source: 'Phrasenkomposita-Inventar',
              article: 'Im-fremden-Bett-schlaf-ich-immer-schlecht-Sensibelchen',
              type: 'Phrasenkompositum',
              href: 'http://uwv.ids-mannheim.de/plus/phraskomp/?search=Im-fremden-Bett-schlaf-ich-immer-schlecht-Sensibelchen',
              color: '#0d65c2'
            }
            ]
          }, {
            ranges: [{
              from: 7,
              to: 8
            }
            ],
            references: [{
              source: 'Kompositamuster-Explorer',
              article: 'Kopfkissen',
              type: 'Kompositum',
              href: 'https://www.owid.de/plus/komux/?lem=kopfkissen',
              color: '#008702'
            }
            ]
          }
          ],
        }, {
          tokens: ["Deutsche", "Fans", "sind", "laut", "und", "viel", "am", "Feiern.", "Aber", "nicht", "immer", "textsicher.", "Nach", "dem", "Viertelfinalsieg", "gegen", "Argentinien", "versuchte", "ein", "weiblicher", "Teenager", "in", "der", "Straßenbahn", "die", "Nationalhymne", "anstimmen.", "Nach", "„Einigkeit", "und", "Recht”", "musste", "sie", "sich", "erkundigen:", "„Wie", "geht", "der", "Text", "nochmal?”"],
          annotations: [{
            ranges: [{
              from: 2,
              to: 3
            }, {
              from: 6,
              to: 8
            }
            ],
            references: [{
              source: 'Kleines Wörterbuch der Verlaufsformen im Deutschen',
              article: '(am) feiern',
              type: 'Verlaufsform',
              href: 'https://www.owid.de/artikel/402891',
              color: '#0d65c2'
            }
            ]
          }
          ],
        }, {
          tokens: ["Gott", "weiß,", "wohin", "er", "verschwunden", "ist.", "Ich", "begann", "über", "seine", "Worte", "nachzudenken:", "der", "Engel", "lebt", "in", "der", "Seele", "des", "Menschen", "und", "ist", "versiegelt,", "aber", "die", "Liebe", "wird", "ihn", "befreien,", "und", "plötzlich", "kommt", "mir", "in", "den", "Sinn:", "»Wenn", "er", "selbst", "der", "Engel", "war,", "und", "Gott", "ihm", "befohlen", "hat,", "mir", "in", "dieser", "Gestalt", "zu", "erscheinen,", "–", "so", "werde", "ich", "nun", "wie", "Lewontij", "sterben!«"],
          annotations: [{
            ranges: [{
              from: 31,
              to: 32
            }, {
              from: 33,
              to: 36
            }
            ],
            references: [{
              source: 'Kleines Wörterbuch der Redeeinleiter',
              article: 'in den Sinn kommen',
              type: 'Redeeinleiter',
              href: 'https://www.owid.de/plus/redeeinleiter/?search=kommen',
              color: '#0d65c2'
            }
            ]
          },
          ],
        }, {
          tokens: ["Erster", "Ansprechpartner", "sollte", "seiner", "Ansicht", "nach", "die", "Hausbank", "sein.", "\"Sie", "kann", "bei", "der", "Suche", "nach", "Finanzierungsmöglichkeiten", "für", "Liquiditätsprobleme", "behilflich", "sein.\"", "Doch", "auf", "keinen", "Fall", "sollten", "Betroffene", "in", "blinden", "Aktionismus", "verfallen,", "warnt", "er:", "\"So", "ein", "Gespräch", "muß", "inhaltlich", "gut", "vorbereitet", "sein,", "will", "man", "verhindern,", "daß", "auf", "Seiten", "der", "Bank", "Zweifel", "aufkommen.\""],
          annotations: [{
            ranges: [{
              from: 27,
              to: 29
            }
            ],
            references: [{
              source: 'Feste Wortverbindungen in OWID',
              article: 'blinder Aktionismus',
              type: 'Adjektiv-Substantiv-Kollokation',
              href: 'https://www.owid.de/artikel/309050',
              color: '#0d65c2'
            }
            ]
          }
          ],
        }, {
          tokens: ["Neben", "den", "Einzelberatungen", "stellt", "das", "Schreiblabor", "Schreibgruppen", "und", "Workshops", "mit", "vielen", "Übungen", "zusammen,", "damit", "Studenten", "nicht", "länger", "nur", "im", "eigenen", "Saft", "schmoren", "und", "gemeinsam", "über", "Texte", "diskutieren."],
          annotations: [{
            ranges: [{
              from: 18,
              to: 22
            }
            ],
            references: [{
              source: 'Feste Wortverbindungen in OWID',
              article: 'im eigenen Saft schmoren',
              type: 'Verbales Phrasem',
              href: 'https://www.owid.de/artikel/309167',
              color: '#0d65c2'
            }
            ]
          }
          ],
        }, {
          tokens: ["BMW-Einkaufsvorstand", "Markus", "Duesmann", "hat", "überraschend", "gekündigt.", "Vorstandschef", "Harald", "Krüger", "sagte", "am", "Montagabend", "vor", "leitenden", "Mitarbeitern", "in", "München,", "Duesmann", "verlasse", "das", "Unternehmen", "«aus", "persönlichen", "Gründen»."],
          annotations: [{
            ranges: [{
              from: 6,
              to: 7
            }
            ],
            references: [{
              source: 'Kompositamuster-Explorer',
              article: 'Vorstandschef',
              type: 'Kompositum',
              href: 'https://www.owid.de/plus/komux/?lem=Vorstandschef',
              color: '#0d65c2'
            }
            ]
          }, {
            ranges: [{
              from: 9,
              to: 10
            }
            ],
            references: [{
              source: 'Kleines Wörterbuch der Redeeinleiter',
              article: 'sagen',
              type: 'Redeeinleiter',
              href: 'https://www.owid.de/plus/redeeinleiter?search=sagen',
              color: '#c5049b'
            }
            ]
          }
            , {
            ranges: [{
              from: 10,
              to: 12
            }
            ],
            references: [{
              source: 'PREPCON <sup>temporal</sup>',
              article: 'am Montagabend',
              type: 'Präposition-Nomen-Verbindung',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul2/inventar/inventar_tagz_end.html#am_Montagabend',
              color: '#c5049b'
            }, {
              source: 'PREPCON <sup>explorativ</sup>',
              article: 'am Montagabend',
              type: 'Präposition-Nomen-Verbindung',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?noun=Montagabend',
              color: '#c5049b'
            }
            ]
          }, {
            ranges: [{
              from: 11,
              to: 12
            }
            ],
            references: [{
              source: 'Kompositamuster-Explorer',
              article: 'Montagabend',
              type: 'Kompositum',
              href: 'https://www.owid.de/plus/komux/?lem=Montagabend',
              color: '#0d65c2'
            },
            ]
          },
          {
            ranges: [{
              from: 15,
              to: 17
            }
            ],
            references: [{
              source: 'PREPCON <sup>explorativ</sup>',
              article: 'in München',
              type: 'Präposition-Nomen-Verbindung',
              href: 'http://uwv.ids-mannheim.de/prepcon/modul1/tables.html?noun=M%C3%BCnchen',
              color: '#0d65c2'
            }
            ]
          },
          {
            ranges: [{
              from: 21,
              to: 24
            }
            ],
            references: [{
              source: 'WV-Feld',
              article: 'aus persönlichen Gründen',
              type: 'aus-ADJEKTIV-Gründen-Muster',
              href: 'http://wvonline.ids-mannheim.de/wvfelder-v3/uwvnodes_html/aus_ADJ_Gruenden_ID1364235183677.html',
              color: '#c5049b'
            }
            ]
          },
          ],
        }, {
          tokens: ["Wo", "die", "Wirtschaft", "in", "der", "Krise", "steckt,", "da", "steigt", "die", "Angst", "der", "Geschäftsleute,", "den", "Boden", "unter", "den", "Füßen", "zu", "verlieren."],
          annotations: [{
            ranges: [{
              from: 13,
              to: 19
            }
            ],
            references: [{
              source: 'Deutsch-Russische Idiome online',
              article: 'den Boden unter den Füßen verlieren',
              type: 'Verbales Phrasem',
              href: 'http://wvonline.ids-mannheim.de/idiome_russ/BODEN_den_Boden_unter_den_Fuessen_verlieren.htm',
              color: '#0d65c2'
            }
            ]
          }
          ],
        }, {
          tokens: ["Die", "Dachgesellschaft", "der", "Eglo-Unternehmensgruppe", "-", "die", "Obwieser", "Holding", "GmbH", "mit", "Sitz", "in", "Pill", "-vereint", "auf", "internationaler", "Ebene", "12", "eigenständige", "Gesellschaften.", "Nach", "dem", "Gründungsjahr", "1969", "folgte", "die", "erste", "Auslandsniederlassung", "im", "Hauptmarkt", "Deutschland", "im", "Jahre", "1986."],
          annotations: [{
            ranges: [{
              from: 1,
              to: 2
            }
            ],
            references: [{
              source: 'Deutsch-türkische Wortverbindungen Wirtschaft',
              article: 'Dachgesellschaft',
              type: 'Kompositum',
              href: 'http://wvonline.ids-mannheim.de/dtww/dtww_d.htm',
              color: '#0d65c2'
            }
            ]
          }
          ],
        },
        {
          tokens: ["Aber", "der", "Sohn", "kam", "nicht", "nach", "dem", "Vater,", "sondern", "nach", "der", "exzentrischen,", "fantasievollen,", "unangepassten", "Mutter."],
          annotations: [{
            ranges: [{
              from: 3,
              to: 4
            },
            {
              from: 5,
              to: 6
            }
            ],
            references: [{
              source: 'MAP',
              article: 'kommen nach',
              type: 'Argumentmarkierende Präposition',
              href: 'http://lexik02.ids-mannheim.de/vas-v7/article/nach/entsprechung/aehnlichkeit',
              color: '#0d65c2'
            }
            ]
          }
          ],
        },
      ],
      list_public: ["ZUWV", "DRIO", "WVBF", "PAROWB", "KWViD", "SPRW", "DTWW", "SpruchList", "Redeeinleiter", "PREPCON", "KoMuX"],
      list_todo: ["MAP", "PhrasKomp"],
    }
  }
}
</script>