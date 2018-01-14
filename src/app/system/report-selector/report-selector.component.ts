import {Component, Input, OnInit} from '@angular/core';
import {Unit} from '../../shared/models/unit.model';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.scss']
})
export class ReportSelectorComponent implements OnInit {

  @Input() selectedUnit: Unit;

  constructor() { }

  ngOnInit() {
  }

}
