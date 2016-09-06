(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-tag-input"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["ng2-tag-input"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var icon_1 = __webpack_require__(2);
	var components_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(18);
	var TagInputModule = (function () {
	    function TagInputModule() {
	    }
	    TagInputModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                forms_1.ReactiveFormsModule
	            ],
	            declarations: [
	                components_1.TagInputComponent,
	                icon_1.DeleteIconComponent
	            ],
	            exports: [
	                components_1.TagInputComponent,
	                icon_1.DeleteIconComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TagInputModule);
	    return TagInputModule;
	}());
	exports.TagInputModule = TagInputModule;
	

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(3));
	

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var DeleteIconComponent = (function () {
	    function DeleteIconComponent() {
	    }
	    DeleteIconComponent.prototype.ngOnInit = function () { };
	    DeleteIconComponent = __decorate([
	        core_1.Component({
	            selector: 'delete-icon',
	            template: __webpack_require__(4)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DeleteIconComponent);
	    return DeleteIconComponent;
	}());
	exports.DeleteIconComponent = DeleteIconComponent;
	

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"Слой_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\" fill=\"#121313\" id=\"Close\"/><g/><g/><g/><g/><g/><g/></svg>\n";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(6));
	

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(7);
	var constants_1 = __webpack_require__(8);
	var events_actions_1 = __webpack_require__(9);
	var accessor_1 = __webpack_require__(10);
	var keypress_actions_1 = __webpack_require__(11);
	var input_manager_1 = __webpack_require__(12);
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
	    TagInputComponent = __decorate([
	        core_1.Component({
	            selector: 'tag-input',
	            providers: [{
	                    provide: forms_1.NG_VALUE_ACCESSOR,
	                    useExisting: core_1.forwardRef(function () { return TagInputComponent; }),
	                    multi: true
	                }],
	            styles: [__webpack_require__(13).toString()],
	            template: __webpack_require__(17)
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], TagInputComponent);
	    return TagInputComponent;
	}(accessor_1.TagInputAccessor));
	exports.TagInputComponent = TagInputComponent;
	

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	exports.PLACEHOLDER = '+ Tag';
	exports.SECONDARY_PLACEHOLDER = 'Enter a new tag';
	exports.KEYDOWN = 'keydown';
	exports.KEYUP = 'keyup';
	exports.FOCUS = 'focus';
	exports.MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
	exports.ACTIONS_KEYS = {
	    DELETE: 'DELETE',
	    SWITCH_PREV: 'SWITCH_PREV',
	    SWITCH_NEXT: 'SWITCH_NEXT',
	    TAB: 'TAB'
	};
	exports.KEY_PRESS_ACTIONS = {
	    8: exports.ACTIONS_KEYS.DELETE,
	    37: exports.ACTIONS_KEYS.SWITCH_PREV,
	    39: exports.ACTIONS_KEYS.SWITCH_NEXT,
	    9: exports.ACTIONS_KEYS.TAB
	};
	

/***/ },
/* 9 */
/***/ function(module, exports) {

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
	

/***/ },
/* 10 */
/***/ function(module, exports) {

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
	

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var constants_1 = __webpack_require__(8);
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
	

/***/ },
/* 12 */
/***/ function(module, exports) {

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
	

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".flex, .tag-input, .tag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tag-input {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  padding: 0.25rem 0.2rem;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n\n.tag-input:focus {\n  outline: 0; }\n\n.tag-input--focused {\n  border-bottom: 2px solid #2196F3; }\n\n.tag-input--invalid {\n  border-bottom: 2px solid red; }\n\n.tags-container {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.tag-input form {\n  margin: 0.1em 0; }\n\n.tag-input__text-input {\n  border: none;\n  display: inline;\n  padding: 0 0.5rem;\n  vertical-align: middle;\n  font-size: 15px;\n  height: 35px;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\n.tag-input__text-input:focus {\n  outline: 0; }\n\n.tag {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  letter-spacing: 0.05rem;\n  background: #efefef;\n  color: #222;\n  cursor: pointer;\n  border-radius: 16px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  margin: 0.1rem 0.2rem;\n  padding: 0.08rem 0.5rem;\n  height: 32px;\n  line-height: 32px; }\n\n.tag--readonly {\n  cursor: default; }\n\n.tag--readonly:focus {\n  outline: 0; }\n\n.tag:not(.tag--readonly):focus {\n  background: #2196F3;\n  color: #fff;\n  outline: 0; }\n\n.tag:not(:focus):not(.tag--readonly):hover {\n  background: #e6e6e6; }\n\n.tag:focus path {\n  fill: #fff; }\n\n.tag__remove-button {\n  margin-left: 6px;\n  width: 16px;\n  height: 26px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s; }\n\n.tag__remove-button:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<!-- input tag container -->\n<div class=\"tag-input\"\n     (click)=\"focus()\"\n     [attr.tabindex]=\"-1\"\n     [class.tag-input--invalid]=\"!form.valid && form.controls.item.value\"\n     [class.tag-input--focused]=\"input.isFocused\">\n\n    <!-- tags [custom] -->\n    <div #template class=\"tags-container tags-container--custom flex\">\n        <ng-content></ng-content>\n    </div>\n\n    <!-- tags [default] -->\n    <div class=\"tags-container tags-container--default flex\">\n        <div *ngFor=\"let item of items; trackBy: item; let i = index\"\n             (click)=\"selectItem(item);$event.stopPropagation();\"\n             (keydown)=\"handleKeydown($event, item)\"\n             [attr.tabindex]=\"readonly ? -1 : 0\"\n             class=\"tag\"\n             [class.tag--readonly]=\"readonly\"\n             [attr.aria-label]=\"item\">\n\n            <!-- tag name -->\n            <span class=\"tag__name\">\n                {{ item }}\n            </span>\n\n            <!-- remove 'x' button -->\n            <delete-icon class=\"tag__remove-button\"\n                  aria-label=\"Remove tag\"\n                  (click)=\"removeItem(item)\"\n                  *ngIf=\"!readonly\">\n            </delete-icon>\n        </div>\n\n        <!-- form -->\n        <form (submit)=\"addItem()\" [formGroup]=\"form\" [hidden]=\"readonly || maxItemsReached\">\n            <input type=\"text\"\n                   required\n                   class=\"tag-input__text-input\"\n                   placeholder=\"{{ items.length ? placeholder : secondaryPlaceholder }}\"\n                   (focus)=\"focus()\"\n                   (blur)=\"blur()\"\n                   (keydown)=\"fireEvents('keydown', $event)\"\n                   (keyup)=\"fireEvents('keyup', $event)\"\n                   formControlName=\"item\"\n                   tabindex=\"0\"\n                   [attr.aria-label]=\"placeholder\"\n            />\n        </form>\n    </div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-tag-input.map