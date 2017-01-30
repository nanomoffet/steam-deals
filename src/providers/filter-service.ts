import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

/*
  Generated class for the FilterService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FilterService {

  // Steam Rating
  steamRatingSource = new BehaviorSubject({lower: 0, upper: 100});
  steamRatingData$ = this.steamRatingSource.asObservable();

  // Metacritic Rating
  metacriticRatingSource = new BehaviorSubject({lower: 0, upper: 100});
  metacriticRatingData$ = this.metacriticRatingSource.asObservable();

  // Sale Price
  salePriceSource = new BehaviorSubject({lower: 0.00, upper: 100});
  salePriceData$ = this.salePriceSource.asObservable();

  // Deal Rating
  dealScoreSource = new BehaviorSubject({lower: 0, upper: 100});
  dealScoreData$ = this.dealScoreSource.asObservable();

}
