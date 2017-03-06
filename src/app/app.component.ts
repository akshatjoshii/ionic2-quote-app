import {Component, ViewChild} from '@angular/core';
import {Platform, NavController, MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {TabPage} from "../pages/tab/tab";
import {SettingsPage} from "../pages/settings/settings";



@Component({
  templateUrl: 'app.html',
})

export class MyApp {
  @ViewChild('nav') nav: NavController;

  rootPage = TabPage;

  public tabsPage = TabPage;
  public settingsPage = SettingsPage;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  loadPage(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}
