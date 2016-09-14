import { Component, OnInit } from '@angular/core';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent { 

  locations: Location[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocations()
      .then(locations => this.locations = locations.slice(1, 5));
  }

  gotoDetail(locations: Location): void { /* not implemented yet */}

}