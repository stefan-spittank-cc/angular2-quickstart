import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
	selector: 'my-location-detail',
	templateUrl: 'app/location-detail.component.html',
	styleUrls: ['app/location-detail.component.css']
})

export class LocationDetailComponent implements OnInit {

  	constructor(
    	private locationService: LocationService,
    	private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.locationService.getLocation(id)
				.then(location => this.location = location);
		});
	}

	goBack(): void {
  		window.history.back();
	}
	save() : void {
		this.locationService.update(this.location).then(() => {
			this.goBack();
		});
		
	}

	@Input()
	location: Location;
}