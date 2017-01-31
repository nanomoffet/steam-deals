import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GameDetailService {

  constructor(public http: Http) {}

  getGameDetail(gameID): Promise<any> {
    return this.http.get(`http://www.cheapshark.com/api/1.0/games?id=${gameID}`)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getSteamDetail (steamID): Promise<any> {
    return this.http.get(`/steam/?appids=${steamID}`)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
