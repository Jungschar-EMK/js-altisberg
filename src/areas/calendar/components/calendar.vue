<template>
    <v-container fluid>
        <v-row alignement="center" justify="center">
            <v-col :xs="12" :cols="12">
                <v-card>
                    <v-sheet height="64">
                        <v-toolbar flat>
                            <v-btn
                                outlined
                                text
                                class="mr-4"
                                color="accent"
                                @click="setToday"
                                v-text="'heute'"
                            />
                            <v-btn fab text small color="accent" @click="prev">
                                <v-icon small>mdi-chevron-left</v-icon>
                            </v-btn>

                            <v-toolbar-title :style="styleToolbar" v-text="title" />

                            <v-btn fab text small color="accent" @click="next">
                                <v-icon small>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </v-sheet>

                    <v-sheet height="600">
                        <v-calendar
                            :style="styleCalendar"
                            v-model="focus"
                            ref="calendar"
                            color="secondary"
                            event-color="primary"
                            :events="items"
                            :locale="locale"
                            :show-month-on-first="false"
                            :weekdays="[1, 2, 3, 4, 5, 6, 0]"
                            @click:event="showEvent"
                            @change="updateRange"
                        />
                        <v-menu
                            v-model="selectedOpen"
                            :close-on-content-click="false"
                            :activator="selectedElement"
                            offset-x
                        >
                            <v-card color="grey lighten-4" min-width="350px" flat>
                                <v-toolbar :color="selectedEvent.color" dark>
                                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <span v-html="selectedEvent.details"></span>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        text
                                        color="secondary"
                                        @click="selectedOpen = false"
                                    >Cancel</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-menu>
                    </v-sheet>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: mapState({
        events: state => state.calendar.events,

        title() {
            const { start, end } = this;
            if (!start || !end) {
                return "";
            }

            const startMonth = this.monthFormatter(start);
            const startYear = start.year;

            return `${startMonth} ${startYear}`;
        },
        styleCalendar() {
            return {
                width: "98%",
                height: "98%",
                margin: "auto"
            };
        },
        styleToolbar() {
            return {
                color: this.$vuetify.theme.themes[this.theme].accent
            };
        },
        theme() {
            return this.$vuetify.theme.dark ? "dark" : "light";
        },
        monthFormatter() {
            return this.$refs.calendar.getFormatter({
                timeZone: "UTC",
                month: "long"
            });
        },
        items() {
            const test = [];

            this.events.forEach(element => {
                const item = {
                    name: element.summary,
                    start: element.start.dateTime,
                    end: element.end.dateTime
                };
                test.push(item);
            });
            return test;
        }
    }),
    data() {
        return {
            focus: "",
            start: null,
            end: null,
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            color: "secondary",
            locale: "CH",
            type: "month"
        };
    },
    mounted() {
        this.$refs.calendar.checkChange();
    },
    methods: {
        setToday() {
            this.focus = this.today;
        },
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },
        showEvent({ nativeEvent, event }) {
            // console.debug(event)
            // const open = () => {
            //   this.selectedEvent = event
            //   this.selectedElement = nativeEvent.target
            //   setTimeout(() => this.selectedOpen = true, 10)
            // }
            // if (this.selectedOpen) {
            //   this.selectedOpen = false
            //   setTimeout(open, 10)
            // } else {
            //   open()
            // }
            // nativeEvent.stopPropagation()
        },
        updateRange({ start, end }) {
            this.start = start;
            this.end = end;
        }
    }
};
</script>
