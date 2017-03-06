import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {QuoteService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {QuotesPage} from "../quotes/quotes";
import {SettingsService} from "../../services/settings";


@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  // providers: [QuoteService]
})
export class FavouritesPage {
  public quotes: Quote[];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private quoteService: QuoteService,
              private settingsService: SettingsService,
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }
  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavouriteQuotes();
    console.log(this.quotes);
  }
  onViewQuote(quote: Quote){
    let modal = this.modalCtrl.create(QuotesPage, quote);
    modal.present();
    modal.onDidDismiss((remove)=>{
      console.log(remove);
      if(remove){
        this.quoteService.removeQuoteFromFavourite(quote);
        let position = this.quotes.findIndex((quoteEl)=>{
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
      }
    })
  }

  onDelete(quote){
    this.quoteService.removeQuoteFromFavourite(quote);
    let position = this.quotes.findIndex((quoteEl)=>{
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }
  
  getBackground(){
    return this.settingsService.isAltBackground()? 'altBackground' : 'quoteBackground';
  }

}
