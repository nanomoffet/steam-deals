import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DealsData} from '../providers/deals-data';
import {GameSummaryPage} from '../pages/game-summary/game-summary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameSummaryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DealsData]
})
export class AppModule {}
