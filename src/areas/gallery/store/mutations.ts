import { MutationTree } from 'vuex';
import { IGalleryState } from './state';

export const COMPOSITION_ARRAY = 'compositions';

export const mutations: MutationTree<IGalleryState> = {
    [COMPOSITION_ARRAY](state, value: Array<any>) {
        state.compositions = value;
    }
};
