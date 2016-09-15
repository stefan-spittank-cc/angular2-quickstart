import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent { 

  	locations: Location[] = [];

  	constructor(private locationService: LocationService,
	  			private router: Router) { }

	ngOnInit(): void {
		this.locationService.getLocations()
			.then(locations => this.locations = locations.slice(1, 5));
	}

	gotoDetail(locations: Location): void { 
		let link = ['/detail', locations.id];
		this.router.navigate(link);
	}

}