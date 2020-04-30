import { IRootState } from '@/store';
import { GetterTree } from 'vuex';
import { IBlogsState } from './state';

export const ALL_BLOGS = 'allBlogs';

export const getters: GetterTree<IBlogsState, IRootState> = {
    [ALL_BLOGS]: (state) => state.pages.concat(state.posts)
};
