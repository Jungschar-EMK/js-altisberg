<template>
    <v-dialog v-model="isOpen">
        <v-card>
            <v-carousel :continuous="false" :value="position">
                <v-carousel-item
                    v-for="(image, key) in images"
                    :key="'galerie-slider-' + key"
                    :src="baseUrl + image"
                    contain
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                />
            </v-carousel>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: {
        baseUrl: {
            type: String,
            required: false,
            default: ""
        },
        images: {
            type: Array,
            required: false,
            default: () => []
        },
        position: {
            type: Number,
            required: false,
            default: 0
        },
        visible: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: () => ({
        isOpen: false
    }),
    watch: {
        isOpen() {
            this.$emit("update:visible", this.isOpen);
        },
        visible() {
            this.isOpen = this.visible;
        }
    }
});
</script>
