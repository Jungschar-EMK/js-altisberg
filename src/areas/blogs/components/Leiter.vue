<template>
    <v-card tile>
        <v-img :src="value.feature_image" v-if="value.feature_image" max-height="200" />

        <v-card-title v-text="value.title" />
        <v-card-text v-html="value.html" />
    </v-card>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
    props: {
        value: {
            type: Object,
            required: true
        }
    }
});
</script>
