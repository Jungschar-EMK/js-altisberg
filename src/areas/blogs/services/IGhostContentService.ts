import { Author, Nullable, Params, PostOrPage, Settings, Tag } from '@tryghost/content-api';

export interface IGhostContentService {
    get_authors(options?: Params, memberToken?: Nullable<string>): Promise<Author>;
    get_pages(options?: Params, memberToken?: Nullable<string>): Promise<PostOrPage>;
    get_posts(options?: Params, memberToken?: Nullable<string>): Promise<PostOrPage>;
    get_settings(options?: Params, memberToken?: Nullable<string>): Promise<Settings>;
    get_tags(options?: Params, memberToken?: Nullable<string>): Promise<Tag>;
}
