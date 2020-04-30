import { IRootState } from '@/store';
import { GetterTree } from 'vuex';
import { IGalleryState } from './state';

export const ALL_COMPOSITIONS = 'allCompositions';

export const getters: GetterTree<IGalleryState, IRootState> = {
    [ALL_COMPOSITIONS]: (state) => {
        return state.compositions.reverse();
    }
};
