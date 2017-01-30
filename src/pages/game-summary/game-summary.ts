import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GameSummary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-summary',
  templateUrl: 'game-summary.html'
})
export class GameSummaryPage {

  @Input() gameThumb: string;
  @Input() gameTitle: string;
  @Input() steamRating: string;
  @Input() metacriticRating: string;
  @Input() originalPrice: string;
  @Input() salePrice: string;
  @Input() dealScore: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
