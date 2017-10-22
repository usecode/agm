import { OnChanges } from '@angular/core';
import { ImageMapTypeManager } from '../services/managers/image-map-type-manager';
import * as mapTypes from '../services/google-maps-types';
/**
 * AgmImageMapType renders a map marker inside a {@link AgmMap}.
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
 *      <agm-image-map-type [mapLayerId]="'openstreetmap'" [options]=imageMapOptions>
 *      </agm-image-map-type>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export declare class AgmImageMapType implements OnChanges {
    private _mapTypeManager;
    /**
     * The options of google.maps.ImageMapType.
     */
    options: mapTypes.ImageMapTypeOptions;
    /**
     * The mapLayerId that defines the name of new layer.
     */
    mapLayerId: string;
    constructor(_mapTypeManager: ImageMapTypeManager);
    ngOnChanges(): void;
    /** @internal */
    toString(): string;
}
