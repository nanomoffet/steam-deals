import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class DealsData {

  constructor(public http: Http) {}

  // Angular's http provider returns an observable which is then parsed into json data consumable by the app.
  // Data extraction and error handling are implemented in a functional programming idiom to keep the code simpler
  // to read, maintain, and test.

  getDealsData(): Observable<any> {
    return this.http.get('http://www.cheapshark.com/api/1.0/deals?steamworks=1?onSale=1')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure or other more complex error handling
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
