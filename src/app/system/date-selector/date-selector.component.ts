import {Component, EventEmitter, OnInit, Output} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {

  public startDate = '';
  public startTime = '';

  public finishDate = '';
  public finishTime = '';

  @Output() dateUpdate = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    const today = this.getCurrentDate();
    this.startDate = today;
    this.startTime = '00:00';
    this.finishDate = today;
    this.finishTime = '23:59';
    this.updateDates();
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

  showCalendarStart() {
    $('#startDate').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: false,
      format: 'yyyy-mm-dd',
      close: 'Ok',
      closeOnSelect: true
    })
      .on('change', () => {
        this.startDate = $('#startDate').val();
        this.updateDates();
      });
  }

  showCalendarFinish() {
    $('#finishDate').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      close: 'Ok',
      clear: false,
      format: 'yyyy-mm-dd',
      closeOnSelect: true
    })
      .on('change', () => {
        this.finishDate = $('#finishDate').val();
        this.updateDates();
      });
  }

  showClockStart() {
    $('#startTime').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
    }).on('change', () => {
      this.startTime = $('#startTime').val();
      this.updateDates();
    });
  }

  showClockFinish() {
    $('#finishTime').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
    }).on('change', () => {
      this.finishTime = new $('#finishTime').val();
      this.updateDates();
    });
  }

  updateDates() {
    this.dateUpdate.emit( {
      startDate: this.startDate,
      startTime: this.startTime,
      finishDate: this.finishDate,
      finishTime: this.finishTime
    });
  }
}
