<template>
    <v-navigation-drawer app :clipped="false" fixed :style="styleNavigationDrawer" v-model="value">
        <v-list flat shaped>
            <v-list-item-group v-model="activ" color="primary">
                <template v-for="(item, key) in navigation">
                    <router-link
                        class="layout-default-router-link"
                        :key="item.to + '-' + key"
                        :to="item.to"
                    >
                        <v-list-item router exact>
                            <v-list-item-action>
                                <v-icon v-text="item.icon" />
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="$t(`common.application.navigation.${item.title}`)"
                                />
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </template>
                <navigation-gallery />
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import NavigationGallery from "./NavigationGallery.vue";

export default {
    components: {
        NavigationGallery
    },
    computed: {
        styleNavigationDrawer() {
            return {
                background: this.$vuetify.theme.themes[this.theme].secondary
            };
        }
    },
    data: () => ({
        activ: 0,
        fixed: false,
        navigation: [
            {
                icon: "mdi-home",
                title: "startseite",
                to: "/Startseite"
            },
            {
                icon: "mdi-information",
                title: "informationen",
                to: "/Informationen"
            },
            {
                icon: "mdi-calendar",
                title: "jahresplan",
                to: "/Jahresplan"
            },
            {
                icon: "mdi-account-box",
                title: "kontakt",
                to: "/Kontakt"
            },
            {
                icon: "mdi-account-multiple",
                title: "leiter",
                to: "/Leiter"
            },
            {
                icon: "mdi-account-group",
                title: "ehemaligeLeiter",
                to: "/EhemaligeLeiter"
            }
        ]
    }),
    props: {
        theme: {
            type: String,
            required: true
        },
        value: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        value(newVal) {
            // Set the activ list-item
            let position = this.navigation
                .map(function(e) {
                    return e.to;
                })
                .indexOf(this.$route.path);
            this.activ = position;

            this.$emit("input", newVal);
        }
    }
};
</script>

<style scoped>
.layout-default-router-link {
    text-decoration: none;
}
</style>
