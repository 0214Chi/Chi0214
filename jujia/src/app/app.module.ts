import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyhomePage } from '../pages/myhome/myhome';
import { MenuPage } from '../pages/menu/menu';
import { JiaPage } from '../pages/jia/jia';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingPage } from '../pages/setting/setting';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { DengluPage } from '../pages/denglu/denglu';
import { DingdanPage } from '../pages/dingdan/dingdan';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyhomePage,
    MenuPage,
    JiaPage,
    SettingPage,
    ZhucePage,
    DengluPage,
    DingdanPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(
      MyApp,{backButtonText:'',
      // tabsHideOnSubPages:true
    })],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyhomePage,
    MenuPage,
    JiaPage,
    SettingPage,
    ZhucePage,
    DengluPage,
    DingdanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
