<template>
    <v-card tile>
        <v-img :src="value.feature_image" v-if="value.feature_image" />
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

<style>
.v-content__wrap img {
    max-width: 100%;
}
</style>
