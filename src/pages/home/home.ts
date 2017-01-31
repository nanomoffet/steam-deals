import { Component } from '@angular/core';

import { NavController, PopoverController } from 'ionic-angular';

import {DealsData} from '../../providers/deals-data';
import {DealsFilterPage} from '../deals-filter/deals-filter';
import {FilterService} from '../../providers/filter-service';
import {Subscription} from 'rxjs';
import {GameDetailPage} from '../game-detail/game-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'Steam Deals';

  games;
  errorMessage;

  // Subscriptions set up for the Observables that will be passing the filter objects to the pipe in order to
  // change the displayed games. Default objects prevent errors on initial load.

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

    // Subscriptions to the observables being returned by the filter service to enable the pipe to reflect the filter
    // options

    this.steamRatingSubscription = this.filterService.steamRatingData$.subscribe(data => this.steamRatingFilter = data);
    this.metacriticRatingSubscription = this.filterService.metacriticRatingData$.subscribe(data => this.metacriticRatingFilter = data);
    this.salePriceSubscription = this.filterService.salePriceData$.subscribe(data => this.salePriceFilter = data);
    this.dealScoreSubscription = this.filterService.dealScoreData$.subscribe(data => this.dealScoreFilter = data);
  }


  //Pull in the list of unfiltered deals
  getData() {
    this.dealsDataService.getDealsData()
      .subscribe(
        data => {this.games = data},
        error => this.errorMessage = <any>error);
  }

  // Load the popover containing the filter controls
  openFilters(myEvent) {
    let popover = this.filterCtrl.create(DealsFilterPage);
    popover.present({
      ev: myEvent
    });
  }

  // Load game detail page for clicked game card
  openGameDetail(game) {
    this.navCtrl.push(GameDetailPage, {
      game: game
    });
  }

}
