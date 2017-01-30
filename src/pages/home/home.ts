import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DealsData} from '../../providers/deals-data';
import { GameSummaryPage } from '../game-summary/game-summary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  games;
  errorMessage;


  constructor(public navCtrl: NavController, public dealsDataService: DealsData) {

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

}
