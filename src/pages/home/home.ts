import { Component } from '@angular/core';

import { NavController, PopoverController } from 'ionic-angular';

import {DealsData} from '../../providers/deals-data';
import { GameSummaryPage } from '../game-summary/game-summary';
import { DealsFilterPage } from '../deals-filter/deals-filter';
import {FilterService} from '../../providers/filter-service';
import {Subscription} from 'rxjs';
import {GameDetailPage} from '../game-detail/game-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  games;
  errorMessage;

  steamRatingSubscription: Subscription;
  steamRatingFilter = {lower: 0, upper: 100};

  metacriticRatingSubscription: Subscription;
  metacriticRatingFilter = {lower: 0, upper: 100};

  salePriceSubscription: Subscription;
  salePriceFilter = {lower: 0.00, upper: 100};

  dealScoreSubscription: Subscription;
  dealScoreFilter = {lower: 0, upper: 100};


  constructor(public navCtrl: NavController,
              public filterCtrl: PopoverController,
              public dealsDataService: DealsData,
              public filterService: FilterService
  ) {

  }

  ionViewDidLoad() {
    this.getData();

    this.steamRatingSubscription = this.filterService.steamRatingData$.subscribe(data => this.steamRatingFilter = data);
    this.metacriticRatingSubscription = this.filterService.metacriticRatingData$.subscribe(data => this.metacriticRatingFilter = data);
    this.salePriceSubscription = this.filterService.salePriceData$.subscribe(data => this.salePriceFilter = data);
    this.dealScoreSubscription = this.filterService.dealScoreData$.subscribe(data => this.dealScoreFilter = data);
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

  openGameDetail(game) {
    this.navCtrl.push(GameDetailPage, {
      game: game
    });
  }

}
