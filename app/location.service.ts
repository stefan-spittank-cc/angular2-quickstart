import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Location } from './location';

@Injectable()
export class LocationService {

	private locationsUrl = 'app/locations';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getLocations(): Promise<Location[]> {
		return this.http.get(this.locationsUrl)
				.toPromise()
				.then(response => response.json().data as Location[])
				.catch(this.handleError);
	}


	getLocation(id: number) : Promise<Location> {

		return this.getLocations().then(locations => {
			let location = locations.find((element, index, array) => {
				return element.id === id;
			})
			if (typeof location !== "undefined") {
				return Promise.resolve(location);
			}
			else {
				return Promise.reject<Location>(`Location with id: {id} not found`);
			}

		});
	}

	update(location: Location) : Promise<Location> {
		const url = `${this.locationsUrl}/${location.id}`;
		return this.http
			.put(url, JSON.stringify(location), {headers: this.headers})
			.toPromise()
			.then(() => location)
			.catch(this.handleError);
	}

	create(name: string): Promise<Location> {
		 return this.http
			.post(this.locationsUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(location => location.json().data)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.locationsUrl}/${id}`;
		 return this.http
			.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

}