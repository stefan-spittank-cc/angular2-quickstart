import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [ LocationService ]
})

export class AppComponent implements OnInit { 
    constructor(private locationService: LocationService) {

    }
    ngOnInit(): void {
        this.getLocations();
    }

    title = "Codecentric Dashboard";
    locations :Location[];
    selectedLocation:Location;
    onSelect(location:Location):void {
        this.selectedLocation = location;
    }

    getLocations () :void {
        this.locations = this.locationService.getLocations();
    }
}
