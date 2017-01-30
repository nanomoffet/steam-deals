import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DealsData} from '../providers/deals-data';
import {GameSummaryPage} from '../pages/game-summary/game-summary';
import {DealsFilterPage} from '../pages/deals-filter/deals-filter';
import {FilterService} from '../providers/filter-service';
import {FilterPipe} from '../pipes/filter-pipe';
import {ScrollToTopPage} from '../pages/scroll-to-top/scroll-to-top';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameSummaryPage,
    ScrollToTopPage,
    DealsFilterPage,
    FilterPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameSummaryPage,
    ScrollToTopPage,
    DealsFilterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DealsData, FilterService]
})
export class AppModule {}
