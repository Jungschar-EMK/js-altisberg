import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import de from 'vuetify/src/locale/de';

// import de from '@/assets/translation/de';

// import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icon: {
        iconfont: 'mdi'
    },
    // todo
    lang: {
        locales: { de },
        current: 'de'
    },
    theme: {
        themes: {
            dark: {
                primary: colors.green.darken3,
                // secondary: not set (dark),
                // background: not set (dark),
                text: {
                    content: colors.yellow.lighten4,
                    header: colors.yellow.lighten1
                },

                accent: colors.yellow.lighten4,

                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            },
            light: {
                primary: colors.green.darken3,
                secondary: colors.yellow.lighten1,
                background: colors.yellow.lighten5,
                text: {
                    content: colors.green.darken4,
                    header: colors.yellow.lighten1
                },

                accent: colors.green.darken4,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            }
        }
    }
});
