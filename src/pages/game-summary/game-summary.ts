import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-game-summary',
  templateUrl: 'game-summary.html'
})
export class GameSummaryPage {

  // Inputs to pass the data received in the Home component down into the directives that get repeated by *ngFor

  @Input() gameThumb: string;
  @Input() gameTitle: string;
  @Input() steamRating: string;
  @Input() metacriticRating: string;
  @Input() originalPrice: string;
  @Input() salePrice: string;
  @Input() dealScore: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
