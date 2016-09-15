import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { LocationDetailComponent } from './location-detail.component';
import { LocationSearchComponent } from './location-search.component';
import { LocationsComponent } from './locations.component';
import { DashboardComponent } from './dashboard.component';
import { routing } from './app.routing';
import { LocationService } from './location.service';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		routing
	],
	declarations: [ 
		AppComponent,
		LocationsComponent,
		LocationDetailComponent,
		LocationSearchComponent,
		DashboardComponent
	],
	providers: [ LocationService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
