import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dates-selector',
  templateUrl: './dates-selector.component.html',
  styleUrls: ['./dates-selector.component.scss']
})
export class DatesSelectorComponent implements OnInit {

  startDate = '';
  startTime = '';

  finishDate = '';
  finishTime = '';

  @Output() onUpdateDate = new EventEmitter<{
    startDate: string,
    startTime: string,
    finishDate: string,
    finishTime: string
  }>();

  constructor() {
    const today = this.getCurrentDate();
    this.startDate = today;
    this.startTime = '00:00';
    this.finishDate = today;
    this.finishTime = '23:59';
  }

  ngOnInit() {
    this.emitSelectedDates();
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

  emitSelectedDates() {
    this.onUpdateDate.emit({
      startDate: this.startDate,
      startTime: this.startTime,
      finishDate: this.finishDate,
      finishTime: this.finishTime
    });
  }

  updateStartDate(event: Event) {
    this.startDate = (<HTMLInputElement>event.target).value;
    this.emitSelectedDates();
  }

  updateStartTime(event: Event) {
    this.startTime = (<HTMLInputElement>event.target).value;
    this.emitSelectedDates();
  }

  updateFinishDate(event: Event) {
    this.finishDate = (<HTMLInputElement>event.target).value;
    this.emitSelectedDates();
  }

  updateFinishTime(event: Event) {
    this.finishTime = (<HTMLInputElement>event.target).value;
    this.emitSelectedDates();
  }
}
