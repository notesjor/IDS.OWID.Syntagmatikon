<template>
    <div>
        <compare>
            <template #headers>
                <v-tab value="one">KoMuX</v-tab>
                <v-tab value="two">Sprichwörterbuch</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </template>
            <template #tabs>
                <v-tabs-window-item value="one">
                    One
                </v-tabs-window-item>

                <v-tabs-window-item value="two">
                    Two
                </v-tabs-window-item>

                <v-tabs-window-item value="three">
                    Three
                </v-tabs-window-item>
            </template>
        </compare>
    </div>
</template>