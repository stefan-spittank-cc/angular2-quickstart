import { Component, Input } from '@angular/core';
import { Location } from './location';

@Component({
  selector: 'my-location-detail',
  template: `  
  <div *ngIf="location">
    <h2>{{location.name}} details</h2>
    <div><label>id: </label>{{location.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="location.name" placeholder="name"/>
    </div>
  </div>
  `
})
export class LocationDetailComponent {
  @Input()
	location: Location;
}