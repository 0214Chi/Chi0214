import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides:Slides;
  @ViewChild('ac') ac; 
  items=[];
  icons:string="camera";
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=["推荐","家居","餐厨","床上用品"];
  constructor(public htttp:HttpClient,public navCtrl: NavController) {
  //   for (let i = 0; i < 30; i++) {
  //     this.items.push( this.items.length );
  //   }
  // }
  //上拉加载
  // doInfinite(infiniteScroll) {
  //   this.htttp.get('/api/courses').subscribe(data=>{
  //     console.log(data);
  //     infiniteScroll.complete();
  //   })
    // setTimeout(() => {
    //   for (let i = 0; i < 30; i++) {
    //     this.items.push( this.items.length );
    //   }
    //   infiniteScroll.complete();
    //   if(this.items.length>50){
    //     infiniteScroll.enable();
    //   }
    // }, 500);
  }
  //下拉刷新
  //doRefresh(refresher) {
  //   console.log('Begin async operation', refresher);

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  // }
  // goSub(){
  //   this.navCtrl.push(MenuPage,{id:1});
  // }
  ionViewDidLoad(){
    // this.ac.get();
  }
}
