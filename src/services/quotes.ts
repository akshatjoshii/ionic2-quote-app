import {Injectable} from '@angular/core';
import {Quote} from "../data/quote.interface";

@Injectable()
export class QuoteService {
  private favouriteQuotes: Quote[] = [];

  addQuoteToFavourite(quote: Quote){
    this.favouriteQuotes.push(quote);
    console.log(this.favouriteQuotes);

  }
  removeQuoteFromFavourite(quote:Quote){
    const position = this.favouriteQuotes.findIndex((quoteEl)=>{
      return quoteEl.id == quote.id;
    });
    this.favouriteQuotes.splice(position,1);
  }

  getFavouriteQuotes(){
    return this.favouriteQuotes.slice();
  }

  isFavourite(quote){
    return this.favouriteQuotes.find((quoteEl)=>{
      return quoteEl.id == quote.id;
    })
  }
}
