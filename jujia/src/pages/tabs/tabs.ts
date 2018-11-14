import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MyhomePage } from '../myhome/myhome';
import { MenuPage } from '../menu/menu';
import { JiaPage } from '../jia/jia';
import { ModalController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage; //首页
  tab2Root = AboutPage; //商城
  tab3Root = JiaPage; //点开加号页
  // tab6Root = ContactPage; //加号页
  tab4Root = MyhomePage;//灵感
  tab5Root = MenuPage;//我的
  // tab7Root = SettingPage;//设置页

  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector("#tab-t0-2").addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(JiaPage);
      profileModal.present();
    })
  }
}
