<template>
    <layout />
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "./components/Layout.vue";

export default Vue.extend({
    name: "App",
    components: {
        Layout
    }
});
</script>

<style>
.v-content__wrap {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
@media (orientation: landscape) {
    .theme--light .v-content__wrap {
        background-image: url("/background-light-landscape.jpg");
    }
    .theme--dark .v-content__wrap {
        background-image: url("/background-dark-landscape.jpg");
    }
}
@media (orientation: portrait) {
    .theme--light .v-content__wrap {
        background-image: url("/background-light-portrait.jpg");
    }
    .theme--dark .v-content__wrap {
        background-image: url("/background-dark-portrait.jpg");
    }
}
.theme--light .v-card {
    background-color: rgba(255, 255, 255, 0.7) !important;
}
.theme--dark .v-card {
    background-color: rgba(0, 0, 0, 0.7) !important;
}
figure video {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    padding-bottom: 2rem;
}
figure img {
    max-width: 100%;
}
* {
    font-size: 1.1rem;
}
figure img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2rem;
}
</style>