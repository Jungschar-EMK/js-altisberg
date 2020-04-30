import { MutationTree } from 'vuex';
import { IBlogsState } from './state';
import { PostOrPage } from '@tryghost/content-api';

export const PAGE_ARRAY = 'pages';
export const POST_ARRAY = 'posts';

export const mutations: MutationTree<IBlogsState> = {
    [PAGE_ARRAY](state, value: Array<PostOrPage>) {
        if (value) {
            state.pages = value;
        }
    },
    [POST_ARRAY](state, value: Array<PostOrPage>) {
        if (value) {
            state.posts = value;
        }
    }
};
