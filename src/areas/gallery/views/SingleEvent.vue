<template>
    <v-container fluid>
        <v-row>
            <v-col :cols="12">
                <v-lazy>
                    <event :composition="composition" :event="event" />
                </v-lazy>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Composition from "../components/Composition.vue";
import Event from "../components/Event.vue";

export default Vue.extend({
    components: {
        Composition,
        Event
    },
    props: {
        composition: {
            type: String,
            required: true
        },
        event: {
            type: String,
            required: true
        }
    }
});
</script>
