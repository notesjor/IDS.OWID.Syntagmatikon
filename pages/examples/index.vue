<template>
    <h1>Fallbeispiele</h1>
    <div class="nolink">
        <p>Fallbeispiele zur Ansicht:</p>
        <ul class="bulb">
            <li>
                <NuxtLink to="/examples/kook-am-Ende">
                    Kookkurrenzprofile - Beispiel: <em>am Ende</em>
                </NuxtLink>
            </li>
        </ul>
        <p>Weitere Fallbeispiele sind in Vorbereitung.</p>
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
</style>