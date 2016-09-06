"use strict";
var TagInputAccessor = (function () {
    function TagInputAccessor() {
        this._items = [];
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(items);
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagInputAccessor.prototype.onTouched = function (items) {
        this._onTouchedCallback(items);
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    return TagInputAccessor;
}());
exports.TagInputAccessor = TagInputAccessor;
//# sourceMappingURL=accessor.js.map