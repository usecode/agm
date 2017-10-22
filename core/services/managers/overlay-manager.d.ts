import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
export declare class OverlayManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper);
    USGSOverlay(bounds: any, srcImage: any): void;
}
