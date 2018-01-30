import {Component, Input, OnInit} from '@angular/core';
import {Unit} from '../../shared/models/unit.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() selectedUnit: Unit;

  constructor() { }

  ngOnInit() {
  }

}
