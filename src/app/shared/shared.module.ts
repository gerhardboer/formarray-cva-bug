import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvaComponent } from './cva/cva.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CvaComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ CvaComponent ]
})
export class SharedModule {
}
