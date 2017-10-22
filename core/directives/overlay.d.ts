import { OnChanges } from '@angular/core';
import { OverlayManager } from '../services/managers/overlay-manager';
import * as mapTypes from '../services/google-maps-types';
/**
 * AgmOverlay renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-overlay [bounds]="bounds" [image]="image">
 *      </agm-overlay>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export declare class AgmOverlay implements OnChanges {
    private _mapTypeManager;
    /**
     * The options of google.maps.ImageMapType.
     */
    bounds: mapTypes.LatLngBounds;
    /**
     * The mapLayerId that defines the name of new layer.
     */
    image: string;
    constructor(_mapTypeManager: OverlayManager);
    ngOnChanges(): void;
}
