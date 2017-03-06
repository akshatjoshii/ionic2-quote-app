import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuoteService} from "../../services/quotes";

/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
  // providers: [QuoteService]
})
export class QuotePage implements OnInit{
  public quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  };
  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private quoteService: QuoteService ,
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    // this.quoteGroup = this.navParams.data;
  }
  onAddToFavourite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: "Are you sure?",
      message: "Are you sure you want to add the quote?",
      buttons: [
        {
          text: "Yes, go ahead!",
          handler: ()=>{
            console.log(selectedQuote);
            this.quoteService.addQuoteToFavourite(selectedQuote);
            console.log('adding quote again');
          }
        },
        {
          text: "Cancel",
          role: 'cancel',
          handler: ()=>{
          console.log("cancelled")
        }
        }
      ]
    });
    alert.present();
  }
  onRemoveFavourite(quote: Quote){
    this.quoteService.removeQuoteFromFavourite(quote);
  }

  isFavourite(quote){
    return this.quoteService.isFavourite(quote);
  }
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

}
