import { Injectable } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from './mock-locations'

@Injectable()
export class LocationService {
	getLocations(): Promise<Location[]> {
		return Promise.resolve(LOCATIONS);
	}

	getLocation(id: number) : Promise<Location> {
		let location = LOCATIONS.find((element, index, array) => {
			return element.id === id;
		});
		if (typeof location !=="undefined") {
		return Promise.resolve(location);
		}
		else {
			return Promise.reject<Location>(`Location with id: {id} not found`);
		}
	}
}