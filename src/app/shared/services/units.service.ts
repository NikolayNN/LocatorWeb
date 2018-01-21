import {Http, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Unit} from "../models/unit.model";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UnitsService {

  constructor(private http: Http) {
  }

  getUnits() {
    return this.http.get('http://localhost:8080/unit')
      .map(response => response.json())
      .map(units => {
        return units.map(u => {
          return {
            id: u.id,
            unitImei: u.unitImei,
            unitName: u.unitName
          };
        });
      });
  }

  getUnitWithMessages(id: number, startDate: string, startTime: string, finishDate: string, finishTime: string): Observable<Unit> {
    const url = 'http://localhost:8080/unit/' + id + '?' +
      'startDate=' + startDate + '&' +
      'startTime=' + startTime + '&' +
      'finishDate=' + finishDate + '&' +
      'finishTime=' + finishTime;

    console.log('url ' + url);

    return this.http.get(url)
      .map(response => response.json())
      .map((unit: Unit) => unit.id > 0 ? unit : undefined);
  }
}
