<template>
    <div v-if="name == null">
        <TreeView v-for="(item, index) in items" :key="index" :name="item.name" :items="item.items"></TreeView>
    </div>
    <ul v-else>
        <a @click="toggle()">
            <v-icon v-if="items">{{ expanded ? "mdi-chevron-up" : "mdi-chevron-down"  }}</v-icon>
            <v-icon v-else style="display:hidden">"mdi-chevron-down</v-icon>
            {{ name }}
        </a>
        <li v-for="(item, index) in items" :key="index" style="margin-left:10px" v-show="expanded">
            <TreeView :items="item.items" :name="item.name" />
        </li>
    </ul>
</template>

<script>
export default {
    name: "TreeView",
    props: {
        items: {
            type: Array,
            default: null
        },
        name: {
            type: String,
            default: null
        },
    },
    data: function () {
        return {
            expanded: true
        }
    },
    methods: {
        toggle: function () {
            this.$data.expanded = !this.$data.expanded
        }
    }
}
</script>

<style></style>