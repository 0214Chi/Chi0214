import { Component } from '@angular/core';

/**
 * Generated class for the OneComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'one',
  templateUrl: 'one.html'
})
export class OneComponent {

  text: string;

  constructor() {
    console.log('Hello OneComponent Component');
    this.text = 'Hello World';
  }

}
