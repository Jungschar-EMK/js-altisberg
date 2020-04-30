<template>
    <v-list-group prepend-icon="mdi-image-multiple" no-action :value="false">
        <template v-slot:activator>
            <v-list-item-title v-text="$t('common.application.navigation.galerie')" />
        </template>

        <template v-for="(item, key) in compositions">
            <v-list-group
                :key="item.composition + '-' + key"
                no-action
                sub-group
                v-model="item.subactive"
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.composition" />
                    </v-list-item-content>
                </template>
                <template v-show="item.subactive">
                    <template v-for="(event, key) in item.events">
                        <v-list-item
                            router
                            exact
                            :key="key"
                            :to="`/gallery/${item.composition}/${event}`"
                        >
                            <v-list-item-title v-text="event.substr(3)" />
                        </v-list-item>
                    </template>
                </template>
            </v-list-group>
        </template>
    </v-list-group>
</template>


<script >
import { createNamespacedHelpers } from "vuex";
import { GET_COMPOSITIONS, GET_EVENTS } from "@/areas/gallery/store/actions";
import { GALLERY } from "@/areas/gallery/store/name";
const { mapActions } = createNamespacedHelpers(GALLERY);

export default {
    computed: {
        compositions: function() {
            return this.gallery.sort(function(a, b) {
                return b.composition.localeCompare(a.composition);
            });
        }
    },
    data: () => ({
        gallery: []
    }),
    methods: {
        ...mapActions({
            getCompositions: GET_COMPOSITIONS,
            getEvents: GET_EVENTS
        }),
        setActive: function(item) {
            item.active = true;
        }
    },
    mounted() {
        this.getCompositions().then(compositions => {
            compositions.forEach(composition => {
                this.getEvents(composition).then(events => {
                    this.gallery.push({
                        composition: composition,
                        events: events
                    });
                });
            });
        });
    }
};
</script>

