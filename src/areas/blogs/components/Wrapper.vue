<template>
    <v-container fluid style="max-width:1200px">
        <slot />
    </v-container>
</template>

<script lang='ts'>
import Vue from "vue";

import { createNamespacedHelpers } from "vuex";
import { INITIALIZE } from "../store/actions";
import { BLOGS } from "../store/name";
const { mapActions } = createNamespacedHelpers(BLOGS);

export default Vue.extend({
    methods: {
        ...mapActions({
            initialize: INITIALIZE
        })
    },
    mounted() {
        this.initialize(this.tags);
    },
    props: {
        tags: {
            type: String,
            required: true
        }
    },
    watch: {
        tags: function() {
            this.initialize(this.tags);
        }
    }
});
</script>
