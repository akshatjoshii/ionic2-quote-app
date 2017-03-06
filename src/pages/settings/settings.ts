import { Component } from '@angular/core';
import {NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings";

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              public settingsService: SettingsService,
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle){
    console.log(toggle);
    this.settingsService.setBackground(toggle.checked);
  }

}
