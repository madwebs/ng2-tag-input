"use strict";
var constants_1 = require('./constants');
function getAction(KEY) {
    var ACTION_TYPE = constants_1.KEY_PRESS_ACTIONS[KEY];
    var action;
    switch (ACTION_TYPE) {
        case constants_1.ACTIONS_KEYS.DELETE:
            action = deleteSelectedTag;
            break;
        case constants_1.ACTIONS_KEYS.SWITCH_PREV:
            action = switchPrev;
            break;
        case constants_1.ACTIONS_KEYS.SWITCH_NEXT:
            action = switchNext;
            break;
        case constants_1.ACTIONS_KEYS.TAB:
            action = switchNext;
            break;
        default:
            return function () { };
    }
    return action;
}
exports.getAction = getAction;
function deleteSelectedTag() {
    if (this.selectedTag) {
        this.removeItem(this.selectedTag);
    }
}
function switchPrev(itemIndex) {
    if (itemIndex > 0) {
        var el = this.tagElements[itemIndex - 1];
        this.selectItem(this.items[itemIndex - 1]);
        this.renderer.invokeElementMethod(el, 'focus', []);
    }
    else {
        this.focus();
    }
}
function switchNext(itemIndex) {
    if (itemIndex < this.items.length - 1) {
        var el = this.tagElements[itemIndex + 1];
        this.selectItem(this.items[itemIndex + 1]);
        this.renderer.invokeElementMethod(el, 'focus', []);
    }
    else {
        this.focus();
    }
}
//# sourceMappingURL=keypress-actions.js.map