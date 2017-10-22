import { Directive, Input } from '@angular/core';
import { ImageMapTypeManager } from '../services/managers/image-map-type-manager';
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
var AgmImageMapType = (function () {
    function AgmImageMapType(_mapTypeManager) {
        this._mapTypeManager = _mapTypeManager;
    }
    /* @internal */
    AgmImageMapType.prototype.ngOnChanges = function () { this._mapTypeManager.addMapType(this.mapLayerId, this.options); };
    /** @internal */
    AgmImageMapType.prototype.toString = function () { return 'ImageMapType-' + this.mapLayerId.toString(); };
    return AgmImageMapType;
}());
export { AgmImageMapType };
AgmImageMapType.decorators = [
    { type: Directive, args: [{
                selector: 'agm-image-map-type'
            },] },
];
/** @nocollapse */
AgmImageMapType.ctorParameters = function () { return [
    { type: ImageMapTypeManager, },
]; };
AgmImageMapType.propDecorators = {
    'options': [{ type: Input },],
    'mapLayerId': [{ type: Input },],
};
//# sourceMappingURL=image-map-type.js.map