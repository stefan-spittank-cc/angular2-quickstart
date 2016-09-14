import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
    selector: 'my-locations',
    templateUrl: 'app/locations.component.html',
    styleUrls: ['app/locations.component.css']
})

export class LocationsComponent implements OnInit { 
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
        this.locationService.getLocations().then(locations => {
            this.locations = locations;
        })
    }
}
