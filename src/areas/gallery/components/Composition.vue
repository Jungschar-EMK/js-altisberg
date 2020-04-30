<template>
    <v-row>
        <template v-for="(event, key) in events">
            <v-col :cols="12" :key="'gallery-composition-' + key">
                <v-lazy>
                    <event :composition="composition" :event="event" />
                </v-lazy>
            </v-col>
        </template>
    </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

import { GALLERY } from "../store/name";
import { GET_EVENTS } from "../store/actions";

import Event from "./Event.vue";

const { mapActions } = createNamespacedHelpers(GALLERY);

export default Vue.extend({
    components: {
        Event
    },
    props: {
        composition: {
            type: String,
            required: false,
            default: ""
        }
    },
    data: () => ({
        events: []
    }),
    mounted() {
        this.get(this.composition).then(response => {
            this.events = response;
        });
    },
    methods: {
        ...mapActions({
            get: GET_EVENTS
        })
    },
    watch: {
        composition: function() {
            this.get(this.composition).then(response => {
                this.events = response;
            });
        }
    }
});
</script>
