<template>
    <div class="nolink">
        <NuxtLink :to="href">
        <v-card style="width:350px; margin:20px" variant="flat" hover>
            <v-card-title>
                <signee :color1="color1" :color2="color2" style="margin: 0px 10px 5px -10px;"/>
                <span v-html="title"/>
            </v-card-title>
            <v-card-text>
                <v-row style="padding: 0.5rem 0rem;">
                    <slot></slot>
                </v-row>
                <v-row style="border-bottom: 1px lightgray solid; margin:1.0rem -10px 0px -10px;">
                    <div style="background-color: lightgray; padding: 0px 0.3rem 0px 0.3rem;">Verknüpfte Ressourcen:</div>
                </v-row>
                <v-row>
                    <resources-list-compact :filter="filter" :showDesc="false" />
                </v-row>
                <v-row style="border-top: 1px lightgray solid; margin:1.5rem -10px 0px -10px;">
                    <div style="background-color: lightgray; padding: 0.2rem 0.3rem 0.2rem 0.3rem; margin-left: auto;"><v-icon>mdi-arrow-right-circle-outline</v-icon> Mehr dazu</div>
                </v-row>
            </v-card-text>
        </v-card>
    </NuxtLink>
    </div>
</template>

<script>
export default{
    props: {
        href: {
            type: String,
            required: true
        },
        color1: {
            type: String,
            default: '#000'
        },
        color2: {
            type: String,
            default: '#000'
        },
        title: {
            type: String,
            default: 'TITLE'
        },
        filter: {
            type: Array,
            default: () => []
        }
    }
}
</script>