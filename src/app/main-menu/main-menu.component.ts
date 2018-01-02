import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  selectedUnitId = 0;
  dateSelectorHide = true;

  startDate = '';
  startTime = '';

  finishDate = '';
  finishTime = '';

  constructor() { }

  ngOnInit() {
  }

  updateSelectedCarId(obj) {

    console.log(obj.id);
    this.selectedUnitId = obj.id;
    this.dateSelectorHide = false;
  }

  updateDate(selectedDates) {
    console.log(selectedDates);
    this.startDate = selectedDates.startDate;
    this.startTime = selectedDates.startTime;
    this.finishDate = selectedDates.finishDate;
    this.finishTime = selectedDates.finishTime;
  }
}
