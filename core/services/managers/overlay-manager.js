import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
var OverlayManager = (function () {
    function OverlayManager(_mapsWrapper) {
        this._mapsWrapper = _mapsWrapper;
    }
    OverlayManager.prototype.USGSOverlay = function (bounds, srcImage) {
        this._mapsWrapper.USGSOverlay(bounds, srcImage);
    };
    return OverlayManager;
}());
export { OverlayManager };
OverlayManager.decorators = [
    { type: Injectable },
];
/** @nocollapse */
OverlayManager.ctorParameters = function () { return [
    { type: GoogleMapsAPIWrapper, },
]; };
//# sourceMappingURL=overlay-manager.js.map