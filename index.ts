import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const components = require('./dist/ng2-tag-input.bundle.js');

let TagInput : any = components.TagInput;


@NgModule({
    declarations: [
        TagInput
    ],
    exports: [
        TagInput
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [

    ]
})
export class TagInputModule {}


