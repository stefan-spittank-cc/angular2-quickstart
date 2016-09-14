import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-locations></my-locations>
  `
})
export class AppComponent {
  title = 'cc dashboard';
}