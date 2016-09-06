exports["ng2-tag-input"] =
/******/ (function(modules) { // webpackBootstrap
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
	var common_1 = __webpack_require__(20);
	var ng2_material_dropdown_1 = __webpack_require__(10);
	var TagInputModule = (function () {
	    function TagInputModule() {
	    }
	    TagInputModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                forms_1.ReactiveFormsModule,
	                ng2_material_dropdown_1.Ng2DropdownModule
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

	module.exports = require("@angular/core");

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
	var ng2_material_dropdown_1 = __webpack_require__(10);
	var accessor_1 = __webpack_require__(12);
	var keypress_actions_1 = __webpack_require__(13);
	var input_manager_1 = __webpack_require__(14);
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
	            styles: [__webpack_require__(15).toString()],
	            template: __webpack_require__(19)
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], TagInputComponent);
	    return TagInputComponent;
	}(accessor_1.TagInputAccessor));
	exports.TagInputComponent = TagInputComponent;
	

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

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
/***/ function(module, exports, __webpack_require__) {

	const components = __webpack_require__(11);

	const Ng2Dropdown = components.Ng2Dropdown;
	const Ng2DropdownMenu = components.Ng2DropdownMenu;
	const Ng2MenuItem = components.Ng2MenuItem;
	const Ng2DropdownButton = components.Ng2DropdownButton;
	const Ng2DropdownModule = components.Ng2DropdownModule;

	module.exports = {
	    Ng2Dropdown,
	    Ng2DropdownMenu,
	    Ng2DropdownButton,
	    Ng2MenuItem,
	    Ng2DropdownModule
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core"], factory);
		else if(typeof exports === 'object')
			exports["ng2-dropdown"] = factory(require("@angular/core"));
		else
			root["ng2-dropdown"] = factory(root["@angular/core"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
		function __export(m) {
		    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
		}
		__export(__webpack_require__(1));
		

	/***/ },
	/* 1 */
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
		function __export(m) {
		    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
		}
		var ng2_dropdown_1 = __webpack_require__(2);
		var ng2_dropdown_menu_1 = __webpack_require__(11);
		var ng2_dropdown_button_1 = __webpack_require__(4);
		var ng2_menu_item_1 = __webpack_require__(14);
		var core_1 = __webpack_require__(3);
		var Ng2DropdownModule = (function () {
		    function Ng2DropdownModule() {
		    }
		    Ng2DropdownModule = __decorate([
		        core_1.NgModule({
		            exports: [
		                ng2_menu_item_1.Ng2MenuItem,
		                ng2_dropdown_button_1.Ng2DropdownButton,
		                ng2_dropdown_menu_1.Ng2DropdownMenu,
		                ng2_dropdown_1.Ng2Dropdown
		            ],
		            declarations: [
		                ng2_dropdown_1.Ng2Dropdown,
		                ng2_menu_item_1.Ng2MenuItem,
		                ng2_dropdown_button_1.Ng2DropdownButton,
		                ng2_dropdown_menu_1.Ng2DropdownMenu
		            ],
		            imports: []
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2DropdownModule);
		    return Ng2DropdownModule;
		}());
		exports.Ng2DropdownModule = Ng2DropdownModule;
		__export(__webpack_require__(2));
		__export(__webpack_require__(11));
		__export(__webpack_require__(4));
		__export(__webpack_require__(14));
		

	/***/ },
	/* 2 */
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
		var core_1 = __webpack_require__(3);
		var ng2_dropdown_button_1 = __webpack_require__(4);
		var ng2_dropdown_menu_1 = __webpack_require__(11);
		var ng2_dropdown_state_1 = __webpack_require__(21);
		var Ng2Dropdown = (function () {
		    function Ng2Dropdown() {
		        this.onItemClicked = new core_1.EventEmitter();
		        this.onItemSelected = new core_1.EventEmitter();
		        this.onShow = new core_1.EventEmitter();
		        this.onHide = new core_1.EventEmitter();
		        this.state = new ng2_dropdown_state_1.Ng2DropdownState();
		    }
		    Ng2Dropdown.prototype.toggleMenu = function (position) {
		        if (position === void 0) { position = this.button.getPosition(); }
		        this.menu.state.isVisible ? this.hide() : this.show(position);
		    };
		    Ng2Dropdown.prototype.hide = function () {
		        this.menu.hide();
		        this.onHide.emit(this);
		    };
		    Ng2Dropdown.prototype.show = function (position) {
		        if (position === void 0) { position = this.button.getPosition(); }
		        this.menu.show();
		        this.menu.updatePosition(position);
		        this.onShow.emit(this);
		    };
		    Ng2Dropdown.prototype.ngOnInit = function () {
		        var _this = this;
		        this.state.onItemClicked.subscribe(function (item) {
		            _this.onItemClicked.emit(item);
		            if (item.preventClose) {
		                return;
		            }
		            _this.hide.call(_this);
		        });
		        if (this.button) {
		            this.button.onMenuToggled.subscribe(function () {
		                _this.toggleMenu();
		            });
		        }
		        this.state.onItemSelected.subscribe(function (item) { return _this.onItemSelected.emit(item); });
		    };
		    __decorate([
		        core_1.ContentChild(ng2_dropdown_button_1.Ng2DropdownButton), 
		        __metadata('design:type', ng2_dropdown_button_1.Ng2DropdownButton)
		    ], Ng2Dropdown.prototype, "button", void 0);
		    __decorate([
		        core_1.ContentChild(ng2_dropdown_menu_1.Ng2DropdownMenu), 
		        __metadata('design:type', ng2_dropdown_menu_1.Ng2DropdownMenu)
		    ], Ng2Dropdown.prototype, "menu", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], Ng2Dropdown.prototype, "onItemClicked", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], Ng2Dropdown.prototype, "onItemSelected", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], Ng2Dropdown.prototype, "onShow", void 0);
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], Ng2Dropdown.prototype, "onHide", void 0);
		    Ng2Dropdown = __decorate([
		        core_1.Component({
		            selector: 'ng2-dropdown',
		            styles: [__webpack_require__(22).toString()],
		            template: __webpack_require__(24)
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2Dropdown);
		    return Ng2Dropdown;
		}());
		exports.Ng2Dropdown = Ng2Dropdown;
		

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

	/***/ },
	/* 4 */
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
		var core_1 = __webpack_require__(3);
		var Ng2DropdownButton = (function () {
		    function Ng2DropdownButton(element) {
		        this.element = element;
		        this.onMenuToggled = new core_1.EventEmitter();
		        this.showCaret = true;
		    }
		    Ng2DropdownButton.prototype.toggleMenu = function () {
		        this.onMenuToggled.emit(true);
		    };
		    Ng2DropdownButton.prototype.getPosition = function () {
		        return this.element.nativeElement.getBoundingClientRect();
		    };
		    __decorate([
		        core_1.Output(), 
		        __metadata('design:type', core_1.EventEmitter)
		    ], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], Ng2DropdownButton.prototype, "showCaret", void 0);
		    Ng2DropdownButton = __decorate([
		        core_1.Component({
		            selector: 'ng2-dropdown-button',
		            styles: [__webpack_require__(5).toString()],
		            template: __webpack_require__(10)
		        }), 
		        __metadata('design:paramtypes', [core_1.ElementRef])
		    ], Ng2DropdownButton);
		    return Ng2DropdownButton;
		}());
		exports.Ng2DropdownButton = Ng2DropdownButton;
		

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(6);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(9)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss", function() {
					var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(7)();
		// imports


		// module
		exports.push([module.id, ".ng2-dropdown-button {\n  font-family: \"Helvetica Neue\", Helvetica, Arial;\n  background: #fff;\n  padding: 0.3rem 0.5rem;\n  font-size: 14px;\n  letter-spacing: 0.08rem;\n  color: #444;\n  outline: 0;\n  cursor: pointer;\n  font-weight: 400;\n  border: none;\n  border-bottom: 1px solid #efefef; }\n\n.ng2-dropdown-button:hover {\n  color: #222; }\n\n.ng2-dropdown-button:active {\n  color: #222;\n  border-bottom: 2px solid #2196F3; }\n\n.caret {\n  background: url(" + __webpack_require__(8) + ");\n  width: 16px;\n  height: 12px;\n  display: inline-block; }\n", ""]);

		// exports


	/***/ },
	/* 7 */
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
	/* 8 */
	/***/ function(module, exports) {

		module.exports = "\"data:image/svg+xml;charset=utf8,%3C?xml version='1.0' ?%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg enable-background='new 0 0 32 32' height='16px' id='Слой_1' version='1.1' viewBox='0 0 32 32' width='16px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0 c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002 c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z' fill='%23121313' id='Expand_More'/%3E%3Cg/%3E%3Cg/%3E%3Cg/%3E%3Cg/%3E%3Cg/%3E%3Cg/%3E%3C/svg%3E\""

	/***/ },
	/* 9 */
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
	/* 10 */
	/***/ function(module, exports) {

		module.exports = "<button class='ng2-dropdown-button' (click)=\"toggleMenu()\">\n    <ng-content></ng-content>\n\n    <span class=\"caret\" [hidden]=\"!showCaret\"></span>\n</button>\n";

	/***/ },
	/* 11 */
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
		var __param = (this && this.__param) || function (paramIndex, decorator) {
		    return function (target, key) { decorator(target, key, paramIndex); }
		};
		var core_1 = __webpack_require__(3);
		var animations_1 = __webpack_require__(12);
		var actions_1 = __webpack_require__(13);
		var ng2_menu_item_1 = __webpack_require__(14);
		var ng2_dropdown_1 = __webpack_require__(2);
		var Ng2DropdownMenu = (function () {
		    function Ng2DropdownMenu(dropdown, element, renderer) {
		        var _this = this;
		        this.dropdown = dropdown;
		        this.element = element;
		        this.renderer = renderer;
		        this.width = 4;
		        this.focusFirstElement = true;
		        this.state = {
		            isVisible: false,
		            toString: function () {
		                return _this.state.isVisible ? 'visible' : 'hidden';
		            }
		        };
		    }
		    Ng2DropdownMenu.prototype.show = function () {
		        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'block');
		        this.state.isVisible = true;
		        if (this.focusFirstElement) {
		            this.dropdown.state.select(this.items.first, false);
		        }
		    };
		    Ng2DropdownMenu.prototype.hide = function () {
		        this.state.isVisible = false;
		        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'none');
		        this.dropdown.state.unselect();
		    };
		    Ng2DropdownMenu.prototype.updatePosition = function (position) {
		        var element = this.getMenuElement();
		        var _a = this.calcPositionOffset(position), top = _a.top, left = _a.left;
		        this.renderer.setElementStyle(element, 'top', top);
		        this.renderer.setElementStyle(element, 'left', left);
		    };
		    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
		        if (!this.state.isVisible) {
		            return;
		        }
		        var key = $event.keyCode, items = this.items.toArray(), index = items.indexOf(this.dropdown.state.selectedItem);
		        if (!actions_1.ACTIONS.hasOwnProperty(key)) {
		            return;
		        }
		        actions_1.ACTIONS[key].call(this, index, items, this.dropdown.state);
		        $event.preventDefault();
		    };
		    Ng2DropdownMenu.prototype.getMenuElement = function () {
		        return this.element.nativeElement.children[0];
		    };
		    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
		        var top = (position.top + window.scrollY - 15) + "px", left = (position.left + window.scrollX - 5) + "px";
		        if (this.offset) {
		            var offset = this.offset.split(' ');
		            if (!offset[1]) {
		                offset[1] = '0';
		            }
		            top = (parseInt(top.replace('px', '')) + parseInt(offset[0])) + "px";
		            left = (parseInt(left.replace('px', '')) + parseInt(offset[1])) + "px";
		        }
		        return { top: top, left: left };
		    };
		    Ng2DropdownMenu.prototype.ngOnInit = function () {
		        var body = document.querySelector('body');
		        body.appendChild(this.element.nativeElement);
		        this.renderer.listen(body, 'keyup', this.handleKeypress.bind(this));
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Number)
		    ], Ng2DropdownMenu.prototype, "width", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', String)
		    ], Ng2DropdownMenu.prototype, "offset", void 0);
		    __decorate([
		        core_1.ContentChildren(ng2_menu_item_1.Ng2MenuItem), 
		        __metadata('design:type', core_1.QueryList)
		    ], Ng2DropdownMenu.prototype, "items", void 0);
		    Ng2DropdownMenu = __decorate([
		        core_1.Component({
		            selector: 'ng2-dropdown-menu',
		            styles: [__webpack_require__(18).toString()],
		            template: __webpack_require__(20),
		            animations: animations_1.animations
		        }),
		        __param(0, core_1.Inject(core_1.forwardRef(function () { return ng2_dropdown_1.Ng2Dropdown; }))), 
		        __metadata('design:paramtypes', [ng2_dropdown_1.Ng2Dropdown, core_1.ElementRef, core_1.Renderer])
		    ], Ng2DropdownMenu);
		    return Ng2DropdownMenu;
		}());
		exports.Ng2DropdownMenu = Ng2DropdownMenu;
		

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var core_1 = __webpack_require__(3);
		exports.animations = [
		    core_1.trigger('fade', [
		        core_1.state('visible', core_1.style({
		            width: '100%',
		            maxHeight: '350px',
		            opacity: 1
		        })),
		        core_1.state('hidden', core_1.style({
		            width: '0px',
		            maxHeight: '0px',
		            opacity: 0
		        })),
		        core_1.transition('visible => hidden', [
		            core_1.animate('100ms ease-out')
		        ]),
		        core_1.transition('hidden => visible', [
		            core_1.animate('150ms cubic-bezier(0.55, 0, 0.55, 0.2)')
		        ])
		    ])
		];
		

	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		"use strict";
		var KEYS = {
		    ENTER: 13,
		    BACKSPACE: 9,
		    PREV: 38,
		    NEXT: 40
		};
		var onSwitchNext = function (index, items, state) {
		    if (index < items.length - 1) {
		        state.select(items[index + 1], true);
		    }
		};
		var onSwitchPrev = function (index, items, state) {
		    if (index > 0) {
		        state.select(items[index - 1], true);
		    }
		};
		var onBackspace = function (index, items, state) {
		    if (index < items.length - 1) {
		        state.select(items[index + 1], true);
		    }
		    else {
		        state.select(items[0], true);
		    }
		};
		var onEnter = function (index, items, state) {
		    state.onItemClicked.emit(state.selectedItem);
		};
		exports.ACTIONS = (_a = {},
		    _a[KEYS.BACKSPACE] = onBackspace,
		    _a[KEYS.PREV] = onSwitchPrev,
		    _a[KEYS.NEXT] = onSwitchNext,
		    _a[KEYS.ENTER] = onEnter,
		    _a
		);
		var _a;


	/***/ },
	/* 14 */
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
		var __param = (this && this.__param) || function (paramIndex, decorator) {
		    return function (target, key) { decorator(target, key, paramIndex); }
		};
		var core_1 = __webpack_require__(3);
		var ng2_dropdown_1 = __webpack_require__(2);
		var Ng2MenuItem = (function () {
		    function Ng2MenuItem(dropdown) {
		        this.dropdown = dropdown;
		        this.preventClose = false;
		    }
		    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
		        get: function () {
		            return this === this.dropdown.state.selectedItem;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Ng2MenuItem.prototype.select = function () {
		        this.dropdown.state.select(this, true);
		    };
		    Ng2MenuItem.prototype.click = function () {
		        this.dropdown.state.onItemClicked.emit(this);
		    };
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Boolean)
		    ], Ng2MenuItem.prototype, "preventClose", void 0);
		    __decorate([
		        core_1.Input(), 
		        __metadata('design:type', Object)
		    ], Ng2MenuItem.prototype, "value", void 0);
		    Ng2MenuItem = __decorate([
		        core_1.Component({
		            selector: 'ng2-menu-item',
		            styles: [__webpack_require__(15).toString()],
		            template: __webpack_require__(17)
		        }),
		        __param(0, core_1.Inject(core_1.forwardRef(function () { return ng2_dropdown_1.Ng2Dropdown; }))), 
		        __metadata('design:paramtypes', [ng2_dropdown_1.Ng2Dropdown])
		    ], Ng2MenuItem);
		    return Ng2MenuItem;
		}());
		exports.Ng2MenuItem = Ng2MenuItem;
		

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(16);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(9)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss", function() {
					var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(7)();
		// imports


		// module
		exports.push([module.id, ".ng2-menu-item {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n  padding: 0 1.25rem;\n  background: #fff;\n  color: #444;\n  cursor: pointer;\n  font-size: 15px;\n  text-transform: none;\n  font-weight: 400;\n  -webkit-transition: background 0.2s;\n  transition: background 0.2s;\n  letter-spacing: 0.03em;\n  height: 48px;\n  line-height: 48px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden; }\n\n.ng2-menu-item--selected {\n  background: #f9f9f9;\n  outline: 0; }\n\n.ng2-menu-item:focus {\n  outline: 0; }\n\n.ng2-menu-item:active {\n  background: #eee; }\n\n.ng2-menu-item [ng2-menu-item-icon] {\n  vertical-align: bottom;\n  font-size: 28px;\n  width: 40px;\n  height: 40px;\n  color: rgba(0, 0, 0, 0.54); }\n", ""]);

		// exports


	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		module.exports = "<div class='ng2-menu-item'\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     [attr.role]=\"button\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n";

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(19);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(9)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss", function() {
					var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(7)();
		// imports


		// module
		exports.push([module.id, ".ng2-dropdown-menu-container {\n  position: absolute;\n  z-index: 2;\n  overflow-y: auto;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  padding: 0.5em 0;\n  background: #fff;\n  border-radius: 2px;\n  display: none; }\n\n.ng2-dropdown-menu-container.ng2-dropdown-menu-container--open {\n  display: block; }\n\n.ng2-dropdown-menu-container--2 {\n  width: 150px; }\n\n.ng2-dropdown-menu-container--4 {\n  width: 250px; }\n\n.ng2-dropdown-menu-container--6 {\n  width: 320px; }\n\n.ng2-dropdown-menu-container:focus {\n  outline: 0;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3); }\n\n.ng2-dropdown-menu {\n  position: relative; }\n\n.ng2-dropdown-menu * {\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s; }\n\n.ng2-dropdown-menu-container.ng2-dropdown-menu-container--open * {\n  opacity: 1; }\n\n.ng2-dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1; }\n\n.ng2-menu-divider {\n  height: 1px;\n  min-height: 1px;\n  max-height: 1px;\n  width: 100%;\n  display: block;\n  background: #f9f9f9; }\n", ""]);

		// exports


	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		module.exports = "<!-- CONTAINER -->\n<div class=\"ng2-dropdown-menu-container ng2-dropdown-menu-container--{{ width }}\"\n     [class.ng2-dropdown-menu-container--open]=\"state.isVisible\"\n     tabindex=\"0\">\n\n    <!-- MENU -->\n    <div class='ng2-dropdown-menu' [@fade]=\"state.toString()\">\n        <ng-content></ng-content>\n    </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" [hidden]=\"!state.isVisible\" (click)=\"hide()\"></div>\n";

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var core_1 = __webpack_require__(3);
		var Ng2DropdownState = (function () {
		    function Ng2DropdownState() {
		        this.onItemSelected = new core_1.EventEmitter();
		        this.onItemClicked = new core_1.EventEmitter();
		    }
		    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
		        get: function () {
		            return this._selectedItem;
		        },
		        enumerable: true,
		        configurable: true
		    });
		    Ng2DropdownState.prototype.select = function (item, dispatchEvent) {
		        if (dispatchEvent === void 0) { dispatchEvent = true; }
		        this._selectedItem = item;
		        if (!dispatchEvent) {
		            return;
		        }
		        this.onItemSelected.emit(item);
		    };
		    Ng2DropdownState.prototype.unselect = function () {
		        this._selectedItem = undefined;
		    };
		    return Ng2DropdownState;
		}());
		exports.Ng2DropdownState = Ng2DropdownState;
		

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag

		// load the styles
		var content = __webpack_require__(23);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(9)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss", function() {
					var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./../../../../node_modules/sass-loader/index.js!./style.scss");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(7)();
		// imports


		// module
		exports.push([module.id, "", ""]);

		// exports


	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		module.exports = "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n";

	/***/ }
	/******/ ])
	});
	;


/***/ },
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".flex, .tag-input, .tag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tag-input {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  padding: 0.25rem 0.2rem;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n\n.tag-input:focus {\n  outline: 0; }\n\n.tag-input--focused {\n  border-bottom: 2px solid #2196F3; }\n\n.tag-input--invalid {\n  border-bottom: 2px solid red; }\n\n.tags-container {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.tag-input form {\n  margin: 0.1em 0; }\n\n.tag-input__text-input {\n  border: none;\n  display: inline;\n  padding: 0 0.5rem;\n  vertical-align: middle;\n  font-size: 15px;\n  height: 35px;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\n.tag-input__text-input:focus {\n  outline: 0; }\n\n.tag {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  letter-spacing: 0.05rem;\n  background: #efefef;\n  color: #222;\n  cursor: pointer;\n  border-radius: 16px;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  margin: 0.1rem 0.2rem;\n  padding: 0.08rem 0.5rem;\n  height: 32px;\n  line-height: 32px; }\n\n.tag--readonly {\n  cursor: default; }\n\n.tag--readonly:focus {\n  outline: 0; }\n\n.tag:not(.tag--readonly):focus {\n  background: #2196F3;\n  color: #fff;\n  outline: 0; }\n\n.tag:not(:focus):not(.tag--readonly):hover {\n  background: #e6e6e6; }\n\n.tag:focus path {\n  fill: #fff; }\n\n.tag__remove-button {\n  margin-left: 6px;\n  width: 16px;\n  height: 26px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s; }\n\n.tag__remove-button:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3); }\n", ""]);

	// exports


/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<!-- input tag container -->\n<div class=\"tag-input\"\n     (click)=\"focus()\"\n     [attr.tabindex]=\"-1\"\n     [class.tag-input--invalid]=\"!form.valid && form.controls.item.value\"\n     [class.tag-input--focused]=\"input.isFocused\">\n\n    <!-- tags [custom] -->\n    <div #template class=\"tags-container tags-container--custom flex\">\n        <ng-content></ng-content>\n    </div>\n\n    <!-- tags [default] -->\n    <div class=\"tags-container tags-container--default flex\">\n        <div *ngFor=\"let item of items; trackBy: item; let i = index\"\n             (click)=\"selectItem(item);$event.stopPropagation();\"\n             (keydown)=\"handleKeydown($event, item)\"\n             [attr.tabindex]=\"readonly ? -1 : 0\"\n             class=\"tag\"\n             [class.tag--readonly]=\"readonly\"\n             [attr.aria-label]=\"item\">\n\n            <!-- tag name -->\n            <span class=\"tag__name\">\n                {{ item }}\n            </span>\n\n            <!-- remove 'x' button -->\n            <delete-icon class=\"tag__remove-button\"\n                  aria-label=\"Remove tag\"\n                  (click)=\"removeItem(item)\"\n                  *ngIf=\"!readonly\">\n            </delete-icon>\n        </div>\n\n        <!-- form -->\n        <form (submit)=\"addItem()\" [formGroup]=\"form\" [hidden]=\"readonly || maxItemsReached\">\n            <input type=\"text\"\n                   required\n                   class=\"tag-input__text-input\"\n                   placeholder=\"{{ items.length ? placeholder : secondaryPlaceholder }}\"\n                   (focus)=\"focus()\"\n                   (blur)=\"blur()\"\n                   (keydown)=\"fireEvents('keydown', $event)\"\n                   (keyup)=\"fireEvents('keyup', $event)\"\n                   formControlName=\"item\"\n                   tabindex=\"0\"\n                   [attr.aria-label]=\"placeholder\"\n            />\n        </form>\n\n        <div *ngIf=\"autocomplete\">\n            <ng2-dropdown>\n                <ng2-dropdown-menu [focusFirstElement]=\"false\"\n                                   (keydown)=\"escapeDropdown($event)\"\n                                   offset=\"60 0\">\n                    <ng2-menu-item *ngFor=\"let item of itemsMatching\"\n                                   [value]=\"item\">\n                        {{ item }}\n                    </ng2-menu-item>\n                </ng2-dropdown-menu>\n            </ng2-dropdown>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ }
/******/ ]);
//# sourceMappingURL=ng2-tag-input.map