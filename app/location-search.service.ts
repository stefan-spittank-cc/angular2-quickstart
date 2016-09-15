import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { Location }           from './location';

@Injectable()
export class LocationSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Location[]> {
    return this.http
               .get(`app/locations/?name=${term}`)
               .map((r: Response) => r.json().data as Location[]);
  }
}
