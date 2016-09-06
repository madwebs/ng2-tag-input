# Angular2 Tag Input [![Build Status](https://travis-ci.org/Gbuomprisco/ng2-tag-input.svg?branch=develop)](https://travis-ci.org/Gbuomprisco/ng2-tag-input) [![codecov](https://codecov.io/gh/Gbuomprisco/ng2-tag-input/branch/develop/graph/badge.svg)](https://codecov.io/gh/Gbuomprisco/ng2-tag-input)

This is a component for Angular 2. Design and API are blandly inspired by Angular Material's md-chips.


## Demo

Check out the live demo (with source code) here [http://www.webpackbin.com/Vy7PtkdYW](http://www.webpackbin.com/Vy7PtkdYW).

## Quick start. Install the component from NPM by running:

    npm install ng2-tag-input --save

## If you want to run the tests, run the command:

    npm test

## Angular 2 Configuration (RC.6)
The component is updated to use the latest version of Angular 2 (RC 5). This means
it requires some configuration to correctly work with your app. Ensure, you are
registering the following providers when bootstrapping the app:

    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { FormsModule } from '@angular/forms';
    import { App } from './home/home';

    import { NgModule }       from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    @NgModule({
        imports:      [BrowserModule, FormsModule],
        bootstrap:    [App],
        declarations: [App]
    })
    export class AppModule {}

    platformBrowserDynamic().bootstrapModule(AppModule);

Please do have a look at the file `demo/app.ts` if you are unsure how to configure the app.

## Usage

Ensure you import the module:

    import { TagInputModule } from 'ng2-tag-input';

    // please notice this is the new way of telling a Component
    // to import another component...no more directives[]
    @NgModule({
       imports: [TagInputModule]
    })
    export class MyModule {}


Once the module is imported, import the TagInput component and use it in your container component:

    import { TagInput } from 'ng2-tag-input';
    import { Component } from '@angular2/core';

    @Component({
        selector: 'app',
        template: `<tag-input [(ngModel)]='items'></tag-input>`
    });
    export class App {
        items = ['Pizza', 'Pasta', 'Parmesan'];
        // ...
    }

## API

**@Input**
- **`ngModel`** - [**`string[]`**] - Model of the component. Accepts an array of strings as input.
- **`placeholder`** - [**`?string`**] - String that sets the placeholder of the input for entering new terms.
- **`secondaryPlaceholder`** - [**`?string`**] - String that sets the placeholder of the input for entering new terms when there are 0 items entered.
- **`maxItems`** -  [**`?number`**] - Sets the maximum number of items it is possible to enter.
- **`readonly`** - [**`?boolean`**] - Sets the tag input static, not allowing deletion/addition of the items entered.
- **`separatorKeys`** - [**`?number[]`**] - Array of keyboard keys with which is possible to define the key for separating terms. By default, only Enter is the defined key.
- **`transform`** - [**`?(item: string) => string`**] - a function that takes as argument the value of an item, and returns a string with the new value when appended. If the method returns null/undefined/false, the item gets rejected.
- **`validators`** - [**`?Validators[]`**] - an array of Validators (custom or Angular's) that will validate the tag before adding it to the list of items. It is possible to use multiple validators.
- **`autocomplete`** - [**`?boolean`**] - if true, it adds an autocomplete component from which is possible to select items
- **`autocompleteItems`** - [**`?string[]`**] - an array of items to populate the autocomplete dropdown
- **`onlyFromAutocomplete`** - [**`?boolean`**] - if true, it will be possible to add new items only from the autocomplete dropdown


**@Output**
- **`onAdd`** - [**`?onAdd(item: string)`**] - event fired when an item has been added
- **`onRemove`** - [**`?onRemove(item: string)`**] - event fired when an item has been removed
- **`onSelect`** - [**`?onSelect(item: string)`**] - event fired when an item has been selected
- **`onFocus`** - [**`?onFocus(item: string)`**] - event fired when the input is focused - will return current input value
- **`onBlur`** - [**`?onBlur(item: string)`**] - event fired when the input is blurred - will return current input value


Basic examples:

    // example app

    @Component({
        selector: 'app',
        template: `<tag-input [(ngModel)]='items'></tag-input>`
    });
    export class App {
        items = ['Pizza', 'Pasta', 'Parmesan'];
        options = {
            placeholder: "+ term",
            secondaryPlaceholder: "Enter a new term",
            separatorKeys: [4, 5]
            maxItems: 10
        }
        onItemAdded(item) {
            console.log(``${item} has been added`)
        }
        onItemRemoved(item) {
            console.log(``${item} has been removed :(`)
        }
        // ...
    }

    // PROPERTIES
    <tag-input [(ngModel)]='items'
               [placeholder]="options.placeholder"
               [secondaryPlaceholder]="options.secondaryPlaceholder"
               [maxItems]="options.maxItems"
               [separatorKeys]="options.separatorKeys">
    </tag-input>

    // EVENTS
    <tag-input [(ngModel)]='items'
               (onRemove)="onItemRemoved($event)"
               (onAdd)="onItemAdded($event)">
    </tag-input>


    // CUSTOM TEMPLATES
    // Input tag with a custom template

    <tag-input [(ngModel)]='items' #input> // create a reference #input to the controller in order to use its API
        <div class='tag' *ngFor='let item of input.value'> // loop over the items
            <div class='tag__name'> {{ item }} </span> // display its values
            <span (click)="input.remove(item)">
                Remove me
            </span>
        </div>
    </tag-input>

If you want to see more advanced examples, please have a look at [http://www.webpackbin.com/Vy7PtkdYW](http://www.webpackbin.com/Vy7PtkdYW).
