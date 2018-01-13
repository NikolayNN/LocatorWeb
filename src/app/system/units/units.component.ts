import {Component, OnInit} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  unitList = [];
  searchStr = '';

  constructor() {
  }

  ngOnInit() {
    this.unitList = [
      {id: 1, name: 'Ford AK 5487-7', imei: '123123213'},
      {id: 2, name: 'Scania MP 2498-7', imei: '354354435'},
      {id: 3, name: 'Daf EK 0976-7', imei: '686787678867'},
      {id: 4, name: 'Man HH 6743-7', imei: '35435565656'},
      {id: 5, name: 'Man KF 9536-7', imei: '6766787688'}
    ];
  }

  showModalAddUnit() {
    $('.modal').modal();
  }

}
