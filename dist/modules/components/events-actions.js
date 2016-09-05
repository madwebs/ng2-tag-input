"use strict";
function customSeparatorKeys($event) {
    if (this.separatorKeys.indexOf($event.keyCode) >= 0) {
        $event.preventDefault();
        this.addItem();
    }
}
exports.customSeparatorKeys = customSeparatorKeys;
function backSpaceListener($event) {
    var itemsLength = this.items.length, inputValue = this.form.get('item').value, isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
    if (isCorrectKey && !inputValue && itemsLength) {
        this.selectItem(this.items[itemsLength - 1]);
        this.renderer.invokeElementMethod(this.tagElements[itemsLength - 1], 'focus', []);
    }
}
exports.backSpaceListener = backSpaceListener;
function addListener(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}
exports.addListener = addListener;
function getMatchingItems(value) {
    var _this = this;
    var itemsMatching = [];
    var items = this.autocompleteItems;
    var lowercaseValue = value.toLowerCase();
    items.forEach(function (item) {
        var condition = item.toLowerCase().indexOf(lowercaseValue) === 0 &&
            _this.items.indexOf(item) === -1;
        if (condition) {
            itemsMatching.push(item);
        }
    });
    return itemsMatching;
}
function autoCompleteListener(ev) {
    var vm = this;
    var value = vm.form.value.item;
    var position = vm.input.element.getBoundingClientRect();
    var key = ev.keyCode;
    if (!value) {
        this.itemsMatching = [];
        this.dropdown.hide();
        return;
    }
    var itemsMatching = getMatchingItems.call(vm, value);
    this.itemsMatching = itemsMatching;
    if (itemsMatching.length) {
        var focus_1 = key === 40 ? true : false;
        vm.dropdown.show(position, focus_1);
    }
    if (!itemsMatching.length && vm.dropdown.menu.state.isVisible) {
        vm.dropdown.hide();
    }
}
exports.autoCompleteListener = autoCompleteListener;
function onAutocompleteItemClicked(item) {
    if (!item) {
        return;
    }
    this.setInputValue(item.value);
    this.addItem(true);
    this.focus();
    this.dropdown.hide();
}
exports.onAutocompleteItemClicked = onAutocompleteItemClicked;
//# sourceMappingURL=events-actions.js.map