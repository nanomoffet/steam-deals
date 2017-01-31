import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class FilterService {

  // Observables for the filter. It's bad practice to subscribe directly to a Subject, so instead we create an observable
  // that captures the stream coming from the Subject and pass it along to both Filter and Home Page

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
