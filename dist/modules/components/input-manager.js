"use strict";
var focus = function () {
    if (this.input.isFocused) {
        return;
    }
    this.renderer.invokeElementMethod(this.input.element, 'focus', []);
    this.input.isFocused = true;
    this.selectItem(undefined);
    this.onFocus.emit(this.form.value.item);
};
var blur = function () {
    var _this = this;
    this.input.isFocused = false;
    if (this.autocomplete) {
        setTimeout(function () { return _this.dropdown.hide(); }, 150);
    }
    this.onBlur.emit(this.form.value.item);
};
exports.input = {
    element: undefined,
    isFocused: false,
    focus: focus,
    blur: blur
};
//# sourceMappingURL=input-manager.js.map