import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-jia',
  templateUrl: 'jia.html',
})
export class JiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  close(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JiaPage');
  }
  

}
