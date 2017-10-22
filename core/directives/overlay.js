import { Directive, Input } from '@angular/core';
import { OverlayManager } from '../services/managers/overlay-manager';
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
var AgmOverlay = (function () {
    function AgmOverlay(_mapTypeManager) {
        this._mapTypeManager = _mapTypeManager;
    }
    /* @internal */
    AgmOverlay.prototype.ngOnChanges = function () { this._mapTypeManager.USGSOverlay(this.bounds, this.image); };
    return AgmOverlay;
}());
export { AgmOverlay };
AgmOverlay.decorators = [
    { type: Directive, args: [{
                selector: 'agm-overlay'
            },] },
];
/** @nocollapse */
AgmOverlay.ctorParameters = function () { return [
    { type: OverlayManager, },
]; };
AgmOverlay.propDecorators = {
    'bounds': [{ type: Input },],
    'image': [{ type: Input },],
};
//# sourceMappingURL=overlay.js.map