import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dates-selector',
  templateUrl: './dates-selector.component.html',
  styleUrls: ['./dates-selector.component.scss']
})
export class DatesSelectorComponent implements OnInit {

  today = '2018-1-2';

  constructor() {
    this.today = this.getCurrentDate();
    console.log(this.getCurrentDate());
  }

  ngOnInit() {
  }

  getCurrentDate() {
    const today = new Date();
    let dd = today.getDate().toString();
    let mm = (today.getMonth() + 1).toString();
    const yyyy = today.getFullYear().toString();

    if (dd.length === 1) {
      dd = '0' + dd;
    }

    if (mm.length === 1) {
      mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
  }

}
