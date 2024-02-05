<template>
    <h1>Deskriptive Datenbank</h1>
    <img src="/img/resources/02.png" alt="Explorative Datenbank" style="float:left; margin: 1em 1em 0 0; width: 40%;" />
    <p>Die deskriptiven Datenbanken im Syntagmatikon stellen eine Kombination aus automatisch erstellten
        Datenmengen und qualitativ erarbeiteten Informationen dar. Die Basis bilden Korpuserhebungen, bei denen
        <a href="../../2.2_DatenInformationstypen/2.2.1_Frequenz/2.2.1_Frequenz.docx">Frequenzen</a> ermittelt
        und <a href="../../2.2_DatenInformationstypen/2.2.6_Belege/2.2.6_ManuellBelegAuswahl.docx">Korpusbelege</a>
        extrahiert wurden. Diese empirische Basis wurde im weiteren Arbeitsverlauf nach spezifischen
        linguistischen Modellen manuell ausgewertet und <u>annotiert</u>.
    </p>
    <p>Solche Datenbanken bieten automatische Suchfunktionen an, mit denen die sprachlichen Ausdrucksgruppen
        und -muster (<u>Muster</u>) nach unterschiedlichen linguistischen Kriterien zusammengestellt werden
        können.</p>
    <resources-list :filter="['MAP', 'WÖRE']" :showDesc="true"></resources-list>
</template>