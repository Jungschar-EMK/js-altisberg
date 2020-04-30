<template>
    <v-row alignement="start" justify="start">
        <v-col :xs="12" :cols="12">
            <v-row>
                <template v-for="(blog, key) in blogs">
                    <v-col :md="4" :sm="6" :xs="12" :cols="12" :key="'blog-' + key">
                        <slot v-bind:value="blog" />
                    </v-col>
                </template>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang='ts'>
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

import { ALL_BLOGS } from "../store/getters";
import { BLOGS } from "../store/name";
const { mapGetters } = createNamespacedHelpers(BLOGS);

export default Vue.extend({
    computed: {
        ...mapGetters({
            blogs: ALL_BLOGS
        })
    }
});
</script>

<style>
.v-content__wrap img {
    max-width: 100%;
}
</style>
