import { ControlValueAccessor } from '@angular/forms';
export declare class TagInputAccessor implements ControlValueAccessor {
    private _items;
    private _onTouchedCallback;
    private _onChangeCallback;
    items: string[];
    onTouched(items: any): void;
    writeValue(items: string[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
