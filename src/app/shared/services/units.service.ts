import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UnitsService {

  constructor(private http: Http) {}

  getUnits() {
    return this.http.get('http://localhost:8080/unit')
      .map(response => response.json())
      .map(units => {
        return units.map(u => {
          return{
            id: u.id,
            unitImei: u.unitImei,
            unitName: u.unitName
          };
        });
      });
  }
}
