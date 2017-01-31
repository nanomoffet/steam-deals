import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';
import {Subscription} from 'rxjs';
import {FilterService} from '../../providers/filter-service';

@Component({
  selector: 'page-deals-filter',
  templateUrl: 'deals-filter.html'
})
export class DealsFilterPage {

  steamRatingSubscription: Subscription;
  metacriticRatingSubscription: Subscription;
  salePriceSubscription: Subscription;
  dealRatingSubscription: Subscription;

  // Variables to hold the filter values

  steamRatingFilter;
  metacriticRatingFilter;
  salePriceFilter;
  dealScoreFilter;

  // Initializing value objects in constructor to prevent errors on initial load

  constructor(public viewCtrl: ViewController, public filterService: FilterService) {
    this.steamRatingFilter = {lower: 0, upper: 100};
    this.metacriticRatingFilter = {lower: 0, upper: 100};
    this.salePriceFilter = {lower: 0.00, upper: 99.99};
    this.dealScoreFilter = {lower: 0, upper: 100};
  }

  // Creating subscriptions to the filter service so changes in this component are visible to the pipe in Home Page

  ionViewDidLoad() {
    this.steamRatingSubscription = this.filterService.steamRatingData$.subscribe(data => this.steamRatingFilter = data);
    this.metacriticRatingSubscription = this.filterService.metacriticRatingData$.subscribe(data => this.metacriticRatingFilter = data);
    this.salePriceSubscription = this.filterService.salePriceData$.subscribe(data => this.salePriceFilter = data);
    this.dealRatingSubscription = this.filterService.dealScoreData$.subscribe(data => this.dealScoreFilter = data);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
