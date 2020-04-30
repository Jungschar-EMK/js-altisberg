import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// RootState
export interface IRootState {
    version: string;
}
export const RootState: IRootState = {
    version: '0.0.1'
};

// Modules
import blogs from '@/areas/blogs/store';
import { BLOGS } from '@/areas/blogs/store/name';

import gallery from '@/areas/gallery/store';
import { GALLERY } from '@/areas/gallery/store/name';

export const store = new Vuex.Store({
    modules: {
        [BLOGS]: blogs,
        [GALLERY]: gallery
    },
    state: RootState
});

export default store;
