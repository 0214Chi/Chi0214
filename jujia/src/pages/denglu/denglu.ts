import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZhucePage } from '../zhuce/zhuce';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';

/**
 * Generated class for the DengluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-denglu',
  templateUrl: 'denglu.html',
})
export class DengluPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goSub1(){
    this.navCtrl.push(ZhucePage);
  }
  
  goSub2(){
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DengluPage');
  }

}
