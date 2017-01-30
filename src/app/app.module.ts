import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DealsData} from '../providers/deals-data';
import {GameSummaryPage} from '../pages/game-summary/game-summary';
import {DealsFilterPage} from '../pages/deals-filter/deals-filter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameSummaryPage,
    DealsFilterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameSummaryPage,
    DealsFilterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DealsData]
})
export class AppModule {}
