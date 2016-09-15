import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
    selector: 'my-locations',
    templateUrl: 'app/locations.component.html',
    styleUrls: ['app/locations.component.css']
})

export class LocationsComponent implements OnInit { 
    constructor(private locationService: LocationService,
                private router: Router) { }

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

    gotoDetail () :void {
   		let link = ['/detail', this.selectedLocation.id];
		this.router.navigate(link);
    }

    add (name: string): void {
        name = name.trim();
        if (!name) return;

        this.locationService.create(name).then(location => {
            this.locations.push(location);
            this.selectedLocation = null;
        });
    }

    delete (location: Location) {
        this.locationService.delete(location.id).then(() => {
            let ix = this.locations.indexOf(location);
            this.locations.splice(ix, 1);
            if (this.selectedLocation === location) {
                this.selectedLocation = null;
            }
        });
    }
}
