import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-working',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
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
}
