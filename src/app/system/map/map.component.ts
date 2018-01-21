import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Unit} from "../../shared/models/unit.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number = 55.7769;
  lng: number = 27.3894;

  @Input() unitList: Unit[] = [];
  @Input() selectedUnit: Unit;


  constructor() { }

  ngOnInit() {
  }

}
