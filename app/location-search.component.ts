import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { LocationSearchService } from './location-search.service';
import { Location } from './location';

@Component({
  selector: 'location-search',
  templateUrl: 'app/location-search.component.html',
  styleUrls:  ['app/location-search.component.css'],
  providers: [LocationSearchService]
})

export class LocationSearchComponent implements OnInit {

	locations: Observable<Location[]>;

	private searchTerms = new Subject<string>();

	constructor(
		private locationSearchService: LocationSearchService,
		private router: Router) {}
		// Push a search term into the observable stream.
		search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.locations = this.searchTerms
			.debounceTime(300)        // wait for 300ms pause in events
			.distinctUntilChanged()   // ignore if next search term is same as previous
			.switchMap(term => term   // switch to new observable each time
				// return the http search observable
				? this.locationSearchService.search(term)
				// or the observable of empty locations if no search term
				: Observable.of<Location[]>([]))
			.catch(error => {
				// TODO: real error handling
				console.log(error);
				return Observable.of<Location[]>([]);
			});
	}

	gotoDetail(location: Location): void {
		let link = ['/detail', location.id];
		this.router.navigate(link);
	}
}
