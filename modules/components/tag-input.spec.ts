import {
    fakeAsync,
    ComponentFixture,
    async,
    tick,
    TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';

import {
    BasicTagInputComponent,
    TagInputComponentWithOutputs,
    TagInputComponentWithValidation,
    TagInputComponentWithTransformer,
    TagInputComponentWithPlaceholder,
    TagInputComponentWithMaxItems,
    TagInputComponentWithTemplate,
    TagInputComponentWithAutocomplete,
    TagInputComponentWithOnlyAutocomplete,
    TestModule
} from './testing-helpers';

import { TagInputModule } from '../ng2-tag-input.module';

import { TagInputComponent } from './tag-input';

describe('TagInputComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [BrowserModule, TestModule]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    function getComponent(fixture) {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        tick();

        return fixture.debugElement.query(By.directive(TagInputComponent)).componentInstance;
    }

    describe('Basic behaviours', () => {
        it('should have 2 tags set by ngModel', fakeAsync(() => {
            const fixture: ComponentFixture<BasicTagInputComponent> = TestBed.createComponent(BasicTagInputComponent);
            const component = getComponent(fixture);

            expect(component.items.length).toEqual(2);
        }));

        it('should override the default placeholder of the input', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithPlaceholder> = TestBed.createComponent(TagInputComponentWithPlaceholder);
            const component = getComponent(fixture);

            expect(component.items.length).toEqual(2);
            console.log(component.placeholder);
            expect(component.input.element.getAttribute('placeholder')).toEqual('New Tag');
        }));
    });

    describe('when a new item is added', () => {
        it('should be added to the list of items and update its parent\'s model', fakeAsync(() => {
            const fixture: ComponentFixture<BasicTagInputComponent> = TestBed.createComponent(BasicTagInputComponent);
            const component = getComponent(fixture);

            component.form.get('item').setValue('New Item');
            expect(component.form.valid).toEqual(true);

            component.addItem();

            fixture.detectChanges();

            expect(component.form.valid).toEqual(false);
            expect(component.form.controls.item.value).toEqual('');

            fixture.detectChanges();

            expect(fixture.componentInstance.items.length).toEqual(3);
            expect(component.items.length).toEqual(3);
        }));

        it('should not be allowed if max-items is set up', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithMaxItems> = TestBed.createComponent(TagInputComponentWithMaxItems);
            const component = getComponent(fixture);

            component.form.get('item').setValue('New Item');
            component.addItem();

            fixture.detectChanges();

            expect(fixture.componentInstance.items.length).toEqual(2);
            expect(component.items.length).toEqual(2);
        }));

        it('emits the event onAdd', () => {
            const fixture: ComponentFixture<TagInputComponentWithOutputs> = TestBed.createComponent(TagInputComponentWithOutputs);
            const itemName = 'New Item';

            fakeAsync(() => {
              const component = getComponent(fixture);

              component.form.get('item').setValue(itemName);

              component.onAdd.subscribe(item => {
                  expect(item).toEqual(itemName);
              });

              component.addItem();
              tick();
            });
        });

        it('does not allow dupes', fakeAsync(() => {
            const fixture: ComponentFixture<BasicTagInputComponent> = TestBed.createComponent(BasicTagInputComponent);
            const component = getComponent(fixture);

            component.form.get('item').setValue('Javascript');
            component.addItem();
            expect(component.items.length).toEqual(2);
        }));
    });

    describe('when an item is removed', () => {
        it('is removed from the list', fakeAsync(() => {
            const fixture: ComponentFixture<BasicTagInputComponent> = TestBed.createComponent(BasicTagInputComponent);
            const tagName = 'Typescript';
            const component = getComponent(fixture);

            component.removeItem(tagName);

            fixture.detectChanges();

            expect(component.items).toEqual(['Javascript']);
            expect(component.input.isFocused).toEqual(true);

        }));

        it('emits the event onRemove', fakeAsync(() => {
            const fixture: ComponentFixture<BasicTagInputComponent> = TestBed.createComponent(BasicTagInputComponent);
            const component = getComponent(fixture);
            const tagName = 'Typescript';

            component.onRemove.subscribe(item => {
                expect(item).toEqual(tagName);
            });

            component.removeItem(tagName);
            tick();
        }));

        it('is sets current selected item as undefined', fakeAsync(() => {
            const fixture: ComponentFixture<BasicTagInputComponent> = TestBed.createComponent(BasicTagInputComponent);
            const component = getComponent(fixture);
            const tagName = 'Typescript';

            component.removeItem(tagName);
            expect(component.selectedTag).toBe(undefined);
        }));
    });

    describe('testing validators', () => {
        it('injects minLength validator and validates correctly', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithValidation> = TestBed.createComponent(TagInputComponentWithValidation);
            const component = getComponent(fixture);

            component.form.get('item').setValue('Ab');
            expect(component.form.valid).toBe(false);

            component.addItem();
            expect(component.items.length).toEqual(2);

            // addItem element with > 3 chars without @
            component.form.get('item').setValue('Abcde');
            expect(component.form.valid).toBe(false);

            // addItem element with > 3 chars with @
            component.form.get('item').setValue('@Abcde');
            expect(component.form.valid).toBe(true);
            component.addItem();

            expect(component.items.length).toEqual(3);
        }));

        it('injects minLength validator and custom validator and validates correctly', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithValidation> = TestBed.createComponent(TagInputComponentWithValidation);
            const component = getComponent(fixture);

            component.form.get('item').setValue('Javascript');
            expect(component.form.valid).toBe(false);
            component.addItem();
            expect(component.items.length).toEqual(2);

            component.form.get('item').setValue('@J');
            expect(component.form.valid).toBe(false);
            component.addItem();
            expect(component.items.length).toEqual(2);


            // addItem element with > 3 chars AND @
            component.form.get('item').setValue('@Javascript');
            expect(component.form.valid).toBe(true);
            component.addItem();

            expect(component.items.length).toEqual(3);
        }));

        it('validates transformed values', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithTransformer> = TestBed.createComponent(TagInputComponentWithTransformer);
            const component = getComponent(fixture);

            component.form.get('item').setValue('@');
            component.addItem();

            expect(component.items[2]).toEqual('prefix: @');
            expect(component.items.length).toEqual(3);
        }));
    });

    describe('when user navigates tags with keypress event', () => {
        let keyUp: Event = new Event('keyup'),
            keyDown: Event = new Event('keydown'),
            fixture: ComponentFixture<BasicTagInputComponent>,
            component;

        keyDown['keyCode'] = 37;

        beforeEach(() => {
            fixture = TestBed.createComponent(BasicTagInputComponent);
        });

        it('it handles navigation/deletion of tags', fakeAsync(() => {
            component = getComponent(fixture);

            // selected tag is undefined
            expect(component.selectedTag).toEqual(undefined);

            // press backspace
            component.input.element.dispatchEvent(keyDown);

            // selected tag is the last one
            expect(component.selectedTag).toEqual('Typescript');

            // press tab and focus input again
            keyDown['keyCode'] = 9;
            component.tagElements[1].dispatchEvent(keyDown);

            expect(component.selectedTag).toEqual(undefined);
            expect(component.input.isFocused).toEqual(true);

            keyDown['keyCode'] = 8;
            // then starts from back again
            component.input.element.dispatchEvent(keyDown);
            expect(component.selectedTag).toEqual('Typescript');

            // it removes current selected tag when pressing delete
            component.tagElements[1].dispatchEvent(keyDown);

            expect(component.items.length).toEqual(1);
            expect(component.selectedTag).toBe(undefined);
        }));

        it('it navigates back and forth between tags', fakeAsync(() => {
            component = getComponent(fixture);
            keyDown['keyCode'] = 37;

            // press left arrow
            component.input.element.dispatchEvent(keyDown);
            // selected tag is the last one
            expect(component.selectedTag).toEqual('Typescript');

            // press left arrow
            component.tagElements[1].dispatchEvent(keyDown);
            expect(component.selectedTag).toEqual('Javascript');

            // press right arrow
            keyDown['keyCode'] = 39;
            component.tagElements[0].dispatchEvent(keyDown);
            expect(component.selectedTag).toEqual('Typescript');

            // press tab -> focuses input
            component.tagElements[1].dispatchEvent(keyDown);
            expect(component.selectedTag).toEqual(undefined);
            expect(component.input.isFocused).toEqual(true);
        }));

        it('it focuses input when pressing tab', fakeAsync(() => {
            component = getComponent(fixture);
            keyUp['keyCode'] = 9;

            // press left arrow
            component.tagElements[0].dispatchEvent(keyDown);
            // selected tag is the last one
            expect(component.selectedTag).toEqual('Typescript');

            // press tab -> focuses input
            component.tagElements[1].dispatchEvent(keyDown);
            expect(component.selectedTag).toEqual(undefined);

            expect(component.input.isFocused).toEqual(true);
        }));
    });

    describe('when using a custom template', () => {
        it('replaced template with the custom one', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithTemplate> = TestBed.createComponent(TagInputComponentWithTemplate);
            const component = getComponent(fixture);

            expect(component.hasTemplate).toEqual(true);
            expect(component.items.length).toEqual(2);
            expect(component.element.nativeElement.querySelectorAll('.custom_class').length).toEqual(2);
        }));
    });

    describe('when using the autocomplete', () => {
        let keyUp: Event = new Event('keyup');
        const iCode = 73;
        const tCode = 84;
        const aCode = 65;

        keyUp['keyCode'] = iCode;

        it('adds an autocomplete to the template', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithAutocomplete> = TestBed.createComponent(TagInputComponentWithAutocomplete);
            const component = getComponent(fixture);

            expect(component.autocomplete).toEqual(true);
            expect(component.autocompleteItems.length).toEqual(3);
            expect(component.element.nativeElement.querySelector('ng2-dropdown')).toBeTruthy();
        }));

        it('shows a dropdown when entering a matching value', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithAutocomplete> = TestBed.createComponent(TagInputComponentWithAutocomplete);
            const component = getComponent(fixture);

            // press 'i'
            component.setInputValue('i');
            component.input.element.dispatchEvent(keyUp);

            fixture.detectChanges();
            tick();

            const dropdown = document.querySelector('.ng2-dropdown-menu-container');
            const items = document.querySelectorAll('ng2-menu-item');

            expect(dropdown).toBeTruthy();
            expect(component.itemsMatching.length).toEqual(3);
            expect(items.length).toEqual(3);
        }));

        it('filters matching values', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithAutocomplete> = TestBed.createComponent(TagInputComponentWithAutocomplete);
            const component = getComponent(fixture);

            // press 'i'
            component.setInputValue('i');
            component.input.element.dispatchEvent(keyUp);

            fixture.detectChanges();
            tick();

            expect(component.itemsMatching.length).toEqual(3);
            component.itemsMatching = [];

            component.setInputValue('ite');
            component.input.element.dispatchEvent(keyUp);

            fixture.detectChanges();
            tick();

            expect(component.itemsMatching.length).toEqual(2);
            component.itemsMatching = [];

            fixture.detectChanges();
            tick();

            component.setInputValue('ita');
            component.input.element.dispatchEvent(keyUp);
            expect(component.itemsMatching.length).toEqual(1);
        }));

        it('adds items to tag input from autocomplete', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithAutocomplete> = TestBed.createComponent(TagInputComponentWithAutocomplete);
            const component = getComponent(fixture);

            expect(component.dropdown).toBeDefined();

            // press 'i'
            component.setInputValue('i');
            component.input.element.dispatchEvent(keyUp);

            fixture.detectChanges();
            tick();

            const item = component.dropdown.menu.items.first;
            component.dropdown.state.onItemClicked.emit(item);

            tick();

            expect(component.items.length).toEqual(3);
            expect(component.items.indexOf(item.value)).toEqual(2);
        }));

        it('does not let add item if onlyFromAutocomplete is set to true', fakeAsync(() => {
            const fixture: ComponentFixture<TagInputComponentWithOnlyAutocomplete> = TestBed.createComponent(TagInputComponentWithOnlyAutocomplete);
            const component = getComponent(fixture);

            component.setInputValue('item');
            component.addItem();
            expect(component.items.length).toEqual(2);

            component.setInputValue('item');
            component.addItem(true);
            expect(component.items.length).toEqual(3);
        }));
    });
});
