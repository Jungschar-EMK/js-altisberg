<template>
    <v-container fluid>
        <composition :composition="composition" />
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Composition from "../components/Composition.vue";

export default Vue.extend({
    components: {
        Composition
    },
    props: {
        composition: {
            type: String,
            required: false,
            default: ""
        }
    }
});
</script>
