import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
var ImageMapTypeManager = (function () {
    function ImageMapTypeManager(_mapsWrapper) {
        this._mapsWrapper = _mapsWrapper;
    }
    ImageMapTypeManager.prototype.addMapType = function (id, options) {
        this._mapsWrapper.setMapTypes(id, options);
    };
    return ImageMapTypeManager;
}());
export { ImageMapTypeManager };
ImageMapTypeManager.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ImageMapTypeManager.ctorParameters = function () { return [
    { type: GoogleMapsAPIWrapper, },
]; };
//# sourceMappingURL=image-map-type-manager.js.map