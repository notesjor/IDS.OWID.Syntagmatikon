<template>
    <div class="nolink">
        <NuxtLink :to="link">
            <v-card style="width:350px; margin:0.75rem" variant="flat" hover>
                <v-card-title>
                    <gradient :color1="color1" style="margin: 0px 5px 0px -13px;"/>
                    <span style="font-weight: 300; font-size: 1.25rem;" v-html="title"/>
                </v-card-title>
                <v-card-text>
                    <v-row style="padding: 0.5rem 0rem; font-weight: 400; text-align: left;">
                        <slot></slot>
                    </v-row>
                    <v-row style="font-family:var(--FF-DISPLAY);border-bottom: 1px lightgray solid; margin:1.0rem -10px 0px -10px; font-weight: 400; color:#666" v-if="filter != null">
                        Verfügbar in:
                    </v-row>
                    <v-row style="margin-top: 0rem; color:#666" v-if="filter != null">
                        <resources-list-compact :filter="filter" :showDesc="false" />
                    </v-row>
                    <v-row style="border-top: 1px lightgray solid; margin:0.75rem -10px 0px -10px;">
                        <div style="padding: 0.2rem 0.3rem 0.2rem 0.3rem; margin-left: auto;">
                            <v-icon style="margin:-2px 5px 0px 0px;">mdi-arrow-right-circle-outline</v-icon><span style="font-family:var(--FF-DISPLAY);">Mehr dazu</span></div>
                    </v-row>
                </v-card-text>
            </v-card>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        color1: {
            type: String,
            default: '#000'
        },
        title: {
            type: String,
            default: 'TITLE'
        },
        filter: {
            type: Array,
            default: null
        }
    }
}
</script>