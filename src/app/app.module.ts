import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkingModule } from './working/working.module';
import { BrokenModule } from './broken/broken.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkingModule,
    BrokenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
