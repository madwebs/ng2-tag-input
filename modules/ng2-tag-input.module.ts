import { NgModule } from '@angular/core';
import { DeleteIconComponent } from './components/icon';
import { TagInputComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        TagInputComponent,
        DeleteIconComponent
    ],
    exports: [
        TagInputComponent,
        DeleteIconComponent
    ]
})
export class TagInputModule {}
