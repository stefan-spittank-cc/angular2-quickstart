import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { LocationDetailComponent } from './location-detail.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    LocationDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
