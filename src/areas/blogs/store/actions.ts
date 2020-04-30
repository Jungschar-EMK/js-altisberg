import { IRootState } from '@/store';
import { ActionTree } from 'vuex';
import { IBlogsState } from './state';

import { ghostContentService } from '../services/GhostContentService';
import { PAGE_ARRAY, POST_ARRAY } from './mutations';
import { BLOGS } from './name';
import { PostOrPage } from '@tryghost/content-api';

export const INITIALIZE = 'initialize';

export const actions: ActionTree<IBlogsState, IRootState> = {
    [INITIALIZE]({ commit }: any, tags: string) {
        console.debug(BLOGS + '::' + INITIALIZE, tags);

        ghostContentService
            .get_pages({
                filter: 'tags:[' + tags.toLowerCase() + ']',
                limit: 'all'
            })
            .then((response: PostOrPage) => {
                commit(PAGE_ARRAY, response);
            });
        ghostContentService
            .get_posts({
                filter: 'tags:[' + tags.toLocaleLowerCase() + ']',
                limit: 'all'
            })
            .then((response: PostOrPage) => {
                commit(POST_ARRAY, response);
            });
    }
};
