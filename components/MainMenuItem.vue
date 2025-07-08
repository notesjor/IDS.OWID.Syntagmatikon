<template>
    <NuxtLink :to="to" class="sim_listItem" @mouseenter="mouseEnter" @mouseleave="mouseLeave" :aria-label="alabel">
        <div class="grid-container">
            <gradient style="margin:0px 10px 0px 5px; display: inline-block;" :color1="color1" :icon="icon" />
            <span class="compass" v-if="!useMobileView">
                <slot style="text-align: left;" />
            </span>
        </div>
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
        },
        alabel: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            focused: false,
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
            if (this.focused)
                return this.color2;

            const route = useRoute();
            if (this.to === "/")
                return route.path === "/" ? this.color2 : "#666";
            return route.path.includes(this.to) ? this.color2 : "#666";
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
    text-align: left;
}

.sim_listItem {
    display: block;
    margin: 0px 0px 7.5px 0px;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 90%;
    align-items: center;
}
</style>