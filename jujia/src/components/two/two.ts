import { Component } from '@angular/core';

/**
 * Generated class for the TwoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'two',
  templateUrl: 'two.html'
})
export class TwoComponent {

  text: string;

  constructor() {
    console.log('Hello TwoComponent Component');
    this.text = 'Hello World';
  }

}
