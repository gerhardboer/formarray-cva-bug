import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-cva',
  templateUrl: './cva.component.html',
  styleUrls: [ './cva.component.scss' ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => CvaComponent) },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => CvaComponent) },
  ]
})
export class CvaComponent implements OnInit, ControlValueAccessor, Validator {

  form = new FormGroup({
    input: new FormControl(null, [ Validators.required ])
  });

  constructor() {
  }

  ngOnInit() {
  }

  get input() {
    return this.form.get('input');
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
    return this.input.invalid
      ? { invalid: true }
      : null;
  }

  writeValue(obj: any): void {
  }

}
