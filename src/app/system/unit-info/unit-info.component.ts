import {Component, Input, OnInit} from '@angular/core';
import {Unit} from "../../shared/models/unit.model";

@Component({
  selector: 'app-unit-info',
  templateUrl: './unit-info.component.html',
  styleUrls: ['./unit-info.component.scss']
})
export class UnitInfoComponent implements OnInit {

  @Input() selectedUnit: Unit;

  constructor() { }

  ngOnInit() {
    this.selectedUnit = new Unit('', '');
  }

}
