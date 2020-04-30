import GhostContentAPI, { GhostAPI, Params } from '@tryghost/content-api';
import { IGhostContentService } from './IGhostContentService';

export default class GhostContentService implements IGhostContentService {
    private api: GhostAPI;

    constructor(key: string = '', url: string = '') {
        console.debug('ghostContentService::constructor', url);
        this.api = GhostContentAPI({
            key: key,
            url: url,
            version: 'v3'
        });
    }

    public async get_authors(options?: Params, memberToken?: string): Promise<any> {
        console.debug('ghostContentService::authors', options, memberToken);

        try {
            const response = await this.api.authors.browse(options, memberToken);
            console.info('ghostContentService::authors', 'response', response);
            return response;
        } catch (error) {
            this.errorHandling(error);
        }
    }

    // TODO any vs Params
    public async get_pages(options?: any, memberToken?: string): Promise<any> {
        console.debug('ghostContentService::pages', options, memberToken);

        try {
            const response = await this.api.pages.browse(options, memberToken);
            console.info('ghostContentService::pages', 'response', response);
            return response;
        } catch (error) {
            this.errorHandling(error);
        }
    }

    // TODO any vs Params
    public async get_posts(options?: any, memberToken?: string): Promise<any> {
        console.debug('ghostContentService::posts', options, memberToken);

        try {
            const response = await this.api.posts.browse(options, memberToken);
            console.info('ghostContentService::posts', 'response', response);
            return response;
        } catch (error) {
            this.errorHandling(error);
        }
    }

    public async get_settings(options?: Params, memberToken?: string): Promise<any> {
        console.debug('ghostContentService::settings', options, memberToken);

        try {
            const response = await this.api.settings.browse(options, memberToken);
            console.info('ghostContentService::settings', 'response', response);
            return response;
        } catch (error) {
            this.errorHandling(error);
        }
    }

    public async get_tags(options?: Params, memberToken?: string): Promise<any> {
        console.debug('ghostContentService::tags', options, memberToken);

        try {
            const response = await await this.api.tags.browse(options, memberToken);
            console.info('ghostContentService::tags', 'response', response);
            return response;
        } catch (error) {
            this.errorHandling(error);
        }
    }

    private errorHandling(error: any) {
        // TODO - Errorhandling
        console.error('ghostContentService::errorHandling', error);
        throw error;
    }
}

export const ghostContentService = new GhostContentService(process.env.VUE_APP_GHOST_CONTENT_API_KEY, process.env.VUE_APP_GHOST_CONTENT_API_URL);
