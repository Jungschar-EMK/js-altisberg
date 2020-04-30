import { PostOrPage } from '@tryghost/content-api';

export interface IBlogsState {
    pages: PostOrPage[];
    posts: PostOrPage[];
}

export const state: IBlogsState = {
    pages: new Array<PostOrPage>(),
    posts: new Array<PostOrPage>()
};
