import BaseService from '../../../services/BaseService';
import { IGalleryService } from './IGalleryService';

export default class GalleryService extends BaseService implements IGalleryService {
    constructor(base_url: string = '') {
        super();
        console.debug('galleryService::constructor', base_url);

        this.BASE_URL = base_url;
    }

    get(url: string) {
        return super.get_request(this.BASE_URL + '?path=' + url);
    }
}

export const galleryService = new GalleryService(process.env.VUE_APP_GALLERY_URL);
