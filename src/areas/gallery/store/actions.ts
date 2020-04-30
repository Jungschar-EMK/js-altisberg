import { IRootState } from '@/store';
import { ActionTree } from 'vuex';
import { IGalleryState } from './state';

import { galleryService } from '../services/GalleryService';
import { COMPOSITION_ARRAY } from './mutations';
import { GALLERY } from './name';

export const GET_COMPOSITIONS = 'getCompositions';
export const GET_EVENTS = 'getEvents';
export const GET_IMAGES = 'getImages';

export const actions: ActionTree<IGalleryState, IRootState> = {
    [GET_COMPOSITIONS]({ commit }: any): Promise<void | any[]> {
        console.debug(GALLERY + '::' + GET_COMPOSITIONS);

        return galleryService.get('').then((response: any[]) => {
            commit(COMPOSITION_ARRAY, response);
            return response;
        });
    },
    [GET_EVENTS]({}: any, composition: string) {
        console.debug(GALLERY + '::' + GET_EVENTS, composition);
        return galleryService.get(composition);
    },
    [GET_IMAGES]({}: any, event: string) {
        console.debug(GALLERY + '::' + GET_IMAGES, event);
        return galleryService.get(event);
    }
};
