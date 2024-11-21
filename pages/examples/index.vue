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
            <li>
                <NuxtLink to="/examples/PREPCON_temp">
                    Verwandte Wörter und Wortgruppen - Beispiel: <em>ohne Unterlass</em>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/examples/stolz-wie-oskar">
                    Anfrage Frankfurter Rundschau zu "frech wie Oskar"
                </NuxtLink>
            </li>
        </ul>
        <p>Geplante Fallbeispiele:</p>
        <ul>
            <li>Belege, Bedeutung und Gebrauch bei Sprichwörtern</li>
            <li>Lückenfüllertabellen - Beispiel: <em>aus ADJ Gründen</em></li>
            <li>Lückenfüllertabellen kontrastiv Beispiel:<br/><em style="margin-left:25px;">mit X Genugtuung / con satisfacción</em></li>
            <li>Partnerwörter kontrastiv - Beispiel: <em>nach Belieben</em></li>
        </ul>
    </div>
</template>

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