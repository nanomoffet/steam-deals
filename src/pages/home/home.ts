import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DealsData} from '../../providers/deals-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data;
  errorMessage;


  constructor(public navCtrl: NavController, public dealsDataService: DealsData) {

  }

  ionViewDidLoad() {
    this.getData();
  }

  getData() {
    this.dealsDataService.getDealsData()
      .subscribe(
        data => {this.data = data;
          console.log(this.data)},
        error => this.errorMessage = <any>error);
  }

}
