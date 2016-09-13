import { Injectable } from '@angular/core';
import { Location } from './location';
import { LOCATIONS } from './mock-locations'

@Injectable()
export class LocationService {
	getLocations() {
		return LOCATIONS;
	} 
}