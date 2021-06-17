import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Radioactrivity';
  items = [
    { name: 'Paris', zipcode: '75', value: 52 },
    { name: 'Bordeaux', zipcode: '33', value: 120 },
    { name: 'Lyon', zipcode: '69', value: 28 },
    { name: 'Lille', zipcode: '59', value: 251 },
    { name: 'Marseille', zipcode: '13', value: 78 },
    { name: 'Nantes', zipcode: '44', value: 102 }
  ]
}
