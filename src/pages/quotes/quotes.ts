import { Component } from '@angular/core';
import {ViewController, NavParams} from "ionic-angular/index";

/*
  Generated class for the Quotes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  public author: string;
  public text: string

  constructor(public viewCtrl: ViewController, private navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    this.author = this.navParams.get('author');
    this.text = this.navParams.get('text');
  }
  dismiss(remove=false){
    console.log(remove);
    this.viewCtrl.dismiss(remove);
  }
}
