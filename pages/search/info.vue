<template>
    <NuxtImage src="/img/resources/db_desc.png" alt="Deskriptive Datenbanken"
        style="float:right; margin: 1em 1em 0 1em; width: 40%;" />
    <p>Die deskriptiven Datenbanken im <hi>Syntagmatikon</hi> stellen eine Kombination aus automatisch erstellten
        Datenmengen und qualitativ erarbeiteten Informationen dar. Die Basis bilden Korpuserhebungen, bei denen
       Frequenzen ermittelt und 
            Korpusbelege extrahiert wurden. Diese empirische Basis wurde im weiteren Arbeitsverlauf nach
        spezifischen
        linguistischen Modellen manuell ausgewertet und annotiert.
    </p>
    <p>Solche Datenbanken bieten automatische Suchfunktionen an, mit denen die sprachlichen Ausdrucksgruppen
        und -muster nach unterschiedlichen linguistischen Kriterien zusammengestellt werden
        können.</p>
    <resources-list :filter="['MAP', 'Verlaufsformen', 'Redeeinleiter']" :showDesc="false"></resources-list>
</template>