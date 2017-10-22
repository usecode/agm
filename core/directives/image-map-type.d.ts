import { OnDestroy, OnChanges } from '@angular/core';
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
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
export declare class AgmImageMapType implements OnDestroy, OnChanges {
    private _mapTypeManager;
    /**
     *
     */
    options: mapTypes.ImageMapTypeOptions;
    /**
     *
     */
    mapLayerId: string;
    constructor(_mapTypeManager: ImageMapTypeManager);
    ngOnChanges(): void;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
}
