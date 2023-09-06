<template>
    <div>
        Folgende Visualisierungen wurden erstellt, sind aber aktuell nicht in der Anwendung enthalten:
        <ul>
            <li><router-link to="/compare">Vergleich</router-link></li>
            <li>Visualisierung der Forschungsgeschichte</li>
        </ul>
    </div>
</template>

<script>
import { NuxtLink } from '#build/components';

</script>

<style scoped>
ul {
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 25px;
}

ol {
  list-style-type: decimal;
  list-style-position: inside;
  margin-left: 25px;
}

ul ul,
ol ul {
  list-style-type: circle;
  list-style-position: inside;
  margin-left: 15px;
}

ol ol,
ul ol {
  list-style-type: lower-latin;
  list-style-position: inside;
  margin-left: 15px;
}

li {
  margin: 10px 0;
}
</style>