import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FavouritesPage} from "../favourites/favourites";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  public favouritesPage = FavouritesPage;
  public libraryPage = LibraryPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
