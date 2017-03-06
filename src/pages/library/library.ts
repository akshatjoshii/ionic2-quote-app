import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";
import {QuotePage} from "../quote/quote";


@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit
{
  private quotePage = QuotePage;

  public quoteCollection: {
    category: string,
    quotes:Quote[],
    icon:string
  }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  ngOnInit(){
    this.quoteCollection = quotes;
  }

}
