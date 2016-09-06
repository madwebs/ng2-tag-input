"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var constants_1 = require('./constants');
var events_actions_1 = require('./events-actions');
var ng2_material_dropdown_1 = require('ng2-material-dropdown');
var accessor_1 = require('./accessor');
var keypress_actions_1 = require('./keypress-actions');
var input_manager_1 = require('./input-manager');
var TagInputComponent = (function (_super) {
    __extends(TagInputComponent, _super);
    function TagInputComponent(element, renderer) {
        _super.call(this);
        this.element = element;
        this.renderer = renderer;
        this.separatorKeys = [];
        this.placeholder = constants_1.PLACEHOLDER;
        this.secondaryPlaceholder = constants_1.SECONDARY_PLACEHOLDER;
        this.maxItems = undefined;
        this.readonly = undefined;
        this.transform = function (item) { return item; };
        this.validators = [];
        this.autocomplete = false;
        this.autocompleteItems = undefined;
        this.onlyFromAutocomplete = false;
        this.onAdd = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.itemsMatching = [];
        this.input = Object.create(input_manager_1.input);
        this.listeners = (_a = {},
            _a[constants_1.KEYDOWN] = [],
            _a[constants_1.KEYUP] = [],
            _a.change = [],
            _a
        );
        var _a;
    }
    TagInputComponent.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (_item) { return _item !== item; }).slice(0);
        if (this.selectedTag === item) {
            this.selectedTag = undefined;
        }
        this.focus();
        this.onRemove.emit(item);
    };
    TagInputComponent.prototype.addItem = function (isFromAutocomplete) {
        if (isFromAutocomplete === void 0) { isFromAutocomplete = false; }
        if (this.autocomplete && this.dropdown.state.selectedItem && !isFromAutocomplete) {
            return;
        }
        var item = this.setInputValue(this.form.value.item);
        var isDupe = this.items.indexOf(item) !== -1;
        var isValid = this.form.valid &&
            isDupe === false &&
            !this.maxItemsReached &&
            ((isFromAutocomplete && this.onlyFromAutocomplete === true) || this.onlyFromAutocomplete === false);
        if (isValid) {
            this.items = this.items.concat([item]);
            this.onAdd.emit(item);
        }
        this.setInputValue('');
    };
    TagInputComponent.prototype.selectItem = function (item) {
        if (this.readonly) {
            var el = this.element.nativeElement;
            this.renderer.invokeElementMethod(el, constants_1.FOCUS, []);
            return;
        }
        this.selectedTag = item;
        this.onSelect.emit(item);
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function ($event, item) {
        var action = keypress_actions_1.getAction($event.keyCode || $event.which);
        var itemIndex = this.items.indexOf(item);
        action.call(this, itemIndex);
        $event.preventDefault();
    };
    TagInputComponent.prototype.setInputValue = function (value) {
        var item = value ? this.transform(value) : '';
        var control = this.getControl();
        control.setValue(item);
        return item;
    };
    TagInputComponent.prototype.getControl = function () {
        return this.form.get('item');
    };
    TagInputComponent.prototype.focus = function () {
        if (this.readonly || this.input.isFocused) {
            return;
        }
        this.input.focus.call(this);
    };
    TagInputComponent.prototype.blur = function () {
        this.input.blur.call(this);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined && this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.escapeDropdown = function ($event) {
        var isArrowUp = $event.keyCode === 38;
        var isFirstItemsSelected = this.dropdown.menu.items.first.isSelected;
        if (isArrowUp && isFirstItemsSelected) {
            this.focus();
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        events_actions_1.addListener.call(this, constants_1.KEYDOWN, events_actions_1.backSpaceListener);
        events_actions_1.addListener.call(this, constants_1.KEYDOWN, events_actions_1.customSeparatorKeys, this.separatorKeys.length > 0);
        var maxItemsReached = this.maxItems !== undefined && this.items.length > this.maxItems;
        if (maxItemsReached) {
            this.maxItems = this.items.length;
            console.warn(constants_1.MAX_ITEMS_WARNING);
        }
        this.form = new forms_1.FormGroup({
            item: new forms_1.FormControl('', forms_1.Validators.compose(this.validators))
        });
    };
    TagInputComponent.prototype.ngAfterViewChecked = function () {
        this.input.element = this.input.element || this.element.nativeElement.querySelector('input');
        this.tagElements = this.element.nativeElement.querySelectorAll('.tag');
    };
    TagInputComponent.prototype.ngAfterViewInit = function () {
        var vm = this;
        vm.hasTemplate = vm.template && vm.template.nativeElement.childElementCount > 0;
        if (vm.hasTemplate) {
            var el = vm.element.nativeElement;
            var form = el.querySelector('form');
            var customTagsContainer = el.querySelector('.tags-container--custom');
            var defaultTagsContainer = el.querySelector('.tags-container--default');
            vm.renderer.invokeElementMethod(customTagsContainer, 'appendChild', [form]);
            if (defaultTagsContainer) {
                vm.renderer.invokeElementMethod(defaultTagsContainer, 'remove', []);
            }
        }
        if (vm.autocomplete) {
            events_actions_1.addListener.call(vm, constants_1.KEYUP, events_actions_1.autoCompleteListener);
            vm.dropdown.onItemClicked.subscribe(events_actions_1.onAutocompleteItemClicked.bind(vm));
            vm.dropdown.onHide.subscribe(function () {
                vm.itemsMatching = [];
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TagInputComponent.prototype, "separatorKeys", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TagInputComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TagInputComponent.prototype, "maxItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TagInputComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], TagInputComponent.prototype, "transform", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "validators", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TagInputComponent.prototype, "autocomplete", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TagInputComponent.prototype, "autocompleteItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "onAdd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "onRemove", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "onSelect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "onBlur", void 0);
    __decorate([
        core_1.ViewChild('template'), 
        __metadata('design:type', core_1.ElementRef)
    ], TagInputComponent.prototype, "template", void 0);
    __decorate([
        core_1.ViewChild(ng2_material_dropdown_1.Ng2Dropdown), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "dropdown", void 0);
    TagInputComponent = __decorate([
        core_1.Component({
            selector: 'tag-input',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return TagInputComponent; }),
                    multi: true
                }],
            styles: [require('./style.scss').toString()],
            template: require('./template.html')
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], TagInputComponent);
    return TagInputComponent;
}(accessor_1.TagInputAccessor));
exports.TagInputComponent = TagInputComponent;
//# sourceMappingURL=tag-input.js.map