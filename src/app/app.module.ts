import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {FavouritesPage} from "../pages/favourites/favourites";
import {SettingsPage} from "../pages/settings/settings";
import {QuotesPage} from "../pages/quotes/quotes";
import {QuotePage} from "../pages/quote/quote";
import {LibraryPage} from "../pages/library/library";
import {TabPage} from "../pages/tab/tab";
import {QuoteService} from "../services/quotes";
import {SettingsService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuoteService,
    SettingsService
  ]
})
export class AppModule {}
