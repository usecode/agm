import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { ImageMapTypeOptions } from '../google-maps-types';
export declare class ImageMapTypeManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper);
    addMapType(id: string, options: ImageMapTypeOptions): void;
}
