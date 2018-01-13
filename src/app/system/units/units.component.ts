import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    showModalAddUnit() {
      $('.modal').modal();
    }

}
