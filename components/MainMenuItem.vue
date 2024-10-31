<template>
    <NuxtLink :to="to" class="sim_listItem" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <gradient style="margin:0px 10px 0px 5px; display: inline-block;" :color1="color1" :icon="icon" />
        <span class="compass" v-if="!useMobileView">
            <slot />
        </span>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        useMobileView: {
            type: Boolean,
            required: true
        },
        color2: {
            type: String,
            default: "#f00"
        },
        icon: {
            type: String,
            default: "mdi-information"
        },
        to: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        mouseEnter() {
            this.focused = true;
        },
        mouseLeave() {
            this.focused = false;
        }
    },
    computed: {
        color1() {
            if(this.focused)
                return this.color2;
            
            const route = useRoute();
            return route.path == this.to ? this.color2 : "#666";
        }
    }
}
</script>


<style scoped>
.compass {
    font-family: var(--FF-DISPLAY);
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.8125rem;
    display: inline-block;
}

.sim_listItem {
    display: block;
    margin-left: 3px;
}
</style>