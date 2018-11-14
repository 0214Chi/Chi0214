import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad(){
    // console.log(this.slides.getActiveIndex() );
  }
  change(){
  }
  
}
