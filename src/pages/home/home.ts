import { Component } from '@angular/core';

import { NavController, PopoverController } from 'ionic-angular';

import {DealsData} from '../../providers/deals-data';
import { GameSummaryPage } from '../game-summary/game-summary';
import { DealsFilterPage } from '../deals-filter/deals-filter';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  games;
  errorMessage;


  constructor(public navCtrl: NavController, public filterCtrl: PopoverController, public dealsDataService: DealsData) {

  }

  ionViewDidLoad() {
    this.getData();
  }

  getData() {
    this.dealsDataService.getDealsData()
      .subscribe(
        data => {this.games = data},
        error => this.errorMessage = <any>error);
  }

  openFilters(myEvent) {
    let popover = this.filterCtrl.create(DealsFilterPage);
    popover.present({
      ev: myEvent
    });
  }

}
