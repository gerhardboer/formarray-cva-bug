import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-broken',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    array: new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
  }

}
