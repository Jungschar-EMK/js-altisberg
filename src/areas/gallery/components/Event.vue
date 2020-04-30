<template>
    <v-card xs="12" tile>
        <v-card-title v-text="event.substr(3)" @click="reflow" />

        <v-container class="fill-height" fluid>
            <stack
                ref="stack"
                :column-min-width="200"
                :gutter-width="15"
                :gutter-height="15"
                monitor-images-loaded
            >
                <stack-item
                    v-for="(image, key) in images"
                    :key="'galerie-event-' + event + key"
                    style="transition: transform 300ms"
                >
                    <v-hover v-slot:default="{ hover }" open-delay="100">
                        <v-card :elevation="hover ? 16 : 2" @click="openSlider(key)" tile>
                            <!-- todo ? :src="baseUrl + image" 
                                :lazy-src="`${baseUrl}/thumbs/thumbs_${image}`"
                            -->
                            <v-img
                                :src="`http://beta.jsaltsiberg.ofuvedad.myhostpoint.ch/content/thumbs/${composition}/${event}/${image}`"
                                v-intersect="reflow"
                            >
                                <template v-slot:placeholder>
                                    <v-row align="center" class="fill-height ma-0" justify="center">
                                        <v-progress-circular color="primary" indeterminate />
                                    </v-row>
                                </template>
                            </v-img>
                        </v-card>
                    </v-hover>
                </stack-item>
            </stack>
        </v-container>

        <slider
            :baseUrl="`http://burkhalter.internet-box.ch:31901/original/${composition}/${event}/`"
            :images="images"
            :position="sliderPosition"
            :visible.sync="sliderVisible"
        />
    </v-card>
</template>

<script>
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";

import { Stack, StackItem } from "vue-stack-grid";

import { GALLERY } from "../store/name";
import { GET_IMAGES } from "../store/actions";

import Slider from "./Slider.vue";

const { mapActions } = createNamespacedHelpers(GALLERY);
export default Vue.extend({
    beforeDestroy: function() {
        clearInterval(this.interval);
    },
    components: {
        Slider,
        Stack,
        StackItem
    },
    props: {
        composition: {
            type: String,
            required: false,
            default: ""
        },
        event: {
            type: String,
            required: false,
            default: ""
        }
    },
    data: () => ({
        images: [],
        interval: {},

        sliderPosition: 0,
        sliderVisible: false
    }),
    mounted() {
        // TODO
        this.images = [];
        this.get(this.composition + "/" + this.event).then(response => {
            this.images = response;
        });

        this.interval = window.setInterval(this.reflow.bind(this), 500);
    },
    methods: {
        ...mapActions({
            get: GET_IMAGES
        }),
        openSlider(position) {
            this.sliderPosition = position;
            this.sliderVisible = true;
        },
        reflow() {
            console.debug("reflow");
            // TODO
            // this.$nextTick(() => {
            this.$refs.stack.reflow();
            // });
        }
    },
    watch: {
        composition: function() {
            this.images = [];
            this.get(this.composition + "/" + this.event).then(response => {
                this.images = response;
            });
        },
        event: function() {
            this.images = [];
            this.get(this.composition + "/" + this.event).then(response => {
                this.images = response;
            });
        }
    }
});
</script>
