<template>
    <h1>Fallbeispiele</h1>
    <div class="nolink">
        <p style="margin-bottom:40px">In dieser <hi>Syntagmatikon</hi>-Rubrik werden kurze linguistische Fallbeispiele
            zu den unterschiedlichen
            Rubriken veröffentlicht.</p>

        <div>
            Kookkurrenzprofile
        </div>
        <div>
            <NuxtLink to="/examples/kook-am-Ende"><v-icon icon="mdi-lightbulb-on" />
                <span style="margin-left: 8px; margin-right: 8px;">Das Umgebungsprofil von <em>am Ende</em></span>
            </NuxtLink>
        </div>

        <div class="comment-text" style="margin-top:30px; margin-bottom: 10px;">In Arbeit:</div>
        <div style="color:grey">
         <div>
            Frequenzen
        </div>
        <div>
           <v-icon icon="mdi-lightbulb-on" />
                <span style="margin-left: 8px; margin-right: 8px;">Häufigkeitsverteilungen beim Präposition-Nomen-Verbindungen</span>       
        </div>
         <div>
           <v-icon icon="mdi-lightbulb-on" />
                <span style="margin-left: 8px; margin-right: 8px;">Spruchfrequenzen und Suchstrategien</span>       
        </div>
        </div>

    </div>
</template>

<script>
export default {
    setup() {
        useHead({
            htmlAttrs: {
                lang: 'de'
            },
            title: 'Syntagmatikon - Fallbeispiele',
            meta: [
                {
                    name: 'description',
                    content: 'Das korpusbasierte Portal Syntagmatikon bietet Informationen zum Gebrauch von sprachlichen Ausdrücken, die durch ihre wiederkehrende lineare Abfolge zu mehr oder weniger festen Wortschatzeinheiten geworden sind.'
                }
            ]
        });
    },
}
</script>

<style scoped>
ul.bulb li {
    list-style-type: none;
    position: relative;
    padding-left: 25px;
}

ul.bulb li::before {
    content: "\F06E9";
    font-family: "Material Design Icons";
    position: absolute;
    left: 0;
    top: 0;
}

a:hover .v-icon {
    color: rgb(41, 98, 255) !important;
}
</style>