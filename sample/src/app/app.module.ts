import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Cmpnt1Component } from './cmpnt1/cmpnt1.component';
import {SampleService} from './sample.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    Cmpnt1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
