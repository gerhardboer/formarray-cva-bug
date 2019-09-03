import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: [ './array.component.scss' ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => ArrayComponent) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => ArrayComponent) },
  ]
})
export class ArrayComponent implements OnInit, ControlValueAccessor, Validator {
  form = new FormGroup({
    array: new FormArray([])
  });

  get array() {
    return this.form.get('array') as FormArray;
  }

  constructor() {
  }

  ngOnInit() {
    this.addNewControl();
  }

  addNewControl() {
    const group = new FormGroup({
      actief: new FormControl(false),
      control: new FormControl()
    });
    group.get('actief').valueChanges
      .subscribe(
        (value) => {
          if (value) {
            this.addNewControl();
          } else {
            const clicked = this.array.controls.indexOf(group);
            this.array.removeAt(clicked);
          }
        }
      );

    this.array.push(group);
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges
      .subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.invalid
      ? { invalid: true }
      : null;
  }

  writeValue(obj: any): void {
  }
}
